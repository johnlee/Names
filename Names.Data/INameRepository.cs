using Names.Data.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Names.Data
{
    public interface INameRepository
    {
        IEnumerable<Name> GetAllNamesByUser(string userId);
        Name GetNameById(int id);
        Task<int> AddName(Name name);
        Task<int> UpdateName(Name name);
        Task<bool> DeleteNameById(int id);

        IEnumerable<Feature> GetAllFeaturesByName(int nameId);

        IEnumerable<Tag> GetAllTagsByName(int nameId);
    }
}
