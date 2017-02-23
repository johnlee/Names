using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Names.Data.Entities;

namespace Names.Data
{
    public class NamesContext : IdentityDbContext<IdentityUser>
    {
        public NamesContext(DbContextOptions<NamesContext> options) : base (options) { }

        public DbSet<Name> Names { get; set; }

        public DbSet<Feature> Features { get; set; }

        public DbSet<Tag> Tags { get; set; }
    }
}
