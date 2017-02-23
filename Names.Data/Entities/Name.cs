using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Names.Data.Entities
{
    public class Name
    {
        public Name()
        {
            Tags = new List<Tag>();
            Features = new List<Feature>();
            Modified = DateTime.Now;
            Created = DateTime.Now;
        }
        public int Id { get; set; }

        [Display(Name = "Feature")]
        [StringLength(50)]
        public string Value { get; set; }

        [Display(Name = "Tags")]
        public virtual ICollection<Tag> Tags { get; set; }

        [Display(Name = "Features")]
        public virtual ICollection<Feature> Features { get; set; }

        [Display(Name = "User Id")]
        public string UserId { get; set; }

        [Display(Name = "Modified")]
        public Nullable<DateTime> Modified { get; set; }

        [Display(Name = "Created")]
        public Nullable<DateTime> Created { get; set; }
    }
}
