using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Names.Models
{
    public class NameModel
    {
        public int Id { get; set; }
        public string Url { get; set; }
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }
        public List<string> Tags { get; set; }
        public List<string> Features { get; set; }
    }
}
