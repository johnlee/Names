using System.ComponentModel.DataAnnotations;

namespace Names.Data.Entities
{
    public class Feature
    {
        public int Id { get; set; }

        public int NameId { get; set; }

        [Display(Name = "Feature")]
        [StringLength(50)]
        public string Value { get; set; }
    }
}
