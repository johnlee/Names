using System.ComponentModel.DataAnnotations;

namespace Names.Data.Entities
{
    public class Tag
    {
        public int Id { get; set; }

        public int NameId { get; set; }

        [Display(Name = "Tag")]
        [StringLength(50)]
        public string Value { get; set; }
    }
}
