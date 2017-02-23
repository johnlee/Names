using Microsoft.EntityFrameworkCore;
using Names.Data.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Names.Data
{
    public class NameRepository : INameRepository
    {
        private NamesContext _context;

        public NameRepository(NamesContext context)
        {
            _context = context;
        }

        #region Names
        public Name GetNameById(int id)
        {
            return _context.Names.AsNoTracking().Include(f => f.Features).Include(t => t.Tags).FirstOrDefault(x => x.Id == id);
        }

        public IEnumerable<Name> GetAllNamesByUser(string userId)
        {
            return _context.Names.AsNoTracking().Include(f => f.Features).Include(t => t.Tags).Where(x => x.UserId == userId);
        }

        public async Task<int> AddName(Name name)
        {
            _context.Names.Add(name);
            await _context.SaveChangesAsync();
            return name.Id;
        }

        public async Task<int> UpdateName(Name name)
        {
            // When updating name, we drop all tags and features then re-add them
            var tagsToAdd = name.Tags;
            var featuresToAdd = name.Features;
            var tagsToRemove = _context.Tags.Where(x => x.NameId == name.Id);
            var featuresToRemove = _context.Features.Where(x => x.NameId == name.Id);

            name.Tags = new List<Tag>();
            name.Features = new List<Feature>();
            _context.Entry(name).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            _context.Tags.RemoveRange(tagsToRemove);
            _context.Features.RemoveRange(featuresToRemove);
            _context.Tags.AddRange(tagsToAdd);
            _context.Features.AddRange(featuresToAdd);
            await _context.SaveChangesAsync();

            return name.Id;
        }

        public async Task<bool> DeleteNameById(int id)
        {
            var name = _context.Names.FirstOrDefault(x => x.Id == id);
            var tagsToRemove = _context.Tags.Where(x => x.NameId == name.Id);
            var featuresToRemove = _context.Features.Where(x => x.NameId == name.Id);

            _context.Tags.RemoveRange(tagsToRemove);
            _context.Features.RemoveRange(featuresToRemove);
            _context.Names.Remove(name);
            _context.Entry(name).State = EntityState.Deleted;
            return (await _context.SaveChangesAsync()) > 0;
        }
        #endregion

        #region Tags
        public IEnumerable<Tag> GetAllTagsByName(int nameId)
        {
            return _context.Tags.AsNoTracking().Where(x => x.NameId == nameId);
        }
        #endregion

        #region Features
        public IEnumerable<Feature> GetAllFeaturesByName(int nameId)
        {
            return _context.Features.AsNoTracking().Where(x => x.NameId == nameId);
        }
        #endregion
    }
}
