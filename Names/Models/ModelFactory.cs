using Microsoft.AspNetCore.Mvc.Routing;
using Names.Data;
using Names.Data.Entities;
using System.Collections.Generic;

namespace Names.Models
{
    public class ModelFactory
    {
        INameRepository _repository;
        //UrlHelper _url;

        public ModelFactory(INameRepository repository)
        {
            _repository = repository;
            //_url = request;
        }

        #region ViewModels
        public NameModel Create(Name name)
        {
            List<string> tags = new List<string>();
            foreach (var tag in name.Tags)
            {
                tags.Add(tag.Value);
            }
            List<string> features = new List<string>();
            foreach (var feature in name.Features)
            {
                features.Add(feature.Value);
            }
            return new NameModel()
            {
                Id = name.Id,
                //Url = _url.Link("DefaultApi", new { controller = "Names", id = name.Id }),
                Name = name.Value,
                Tags = tags,
                Features = features
            };
        }
        #endregion

        #region DataModels
        public Name Create(NameModel name)
        {
            List<Tag> tags = new List<Tag>();
            foreach (var tag in name.Tags)
            {
                tags.Add(new Tag() { NameId = name.Id, Value = tag });
            }
            List<Feature> features = new List<Feature>();
            foreach (var feature in name.Features)
            {
                features.Add(new Feature() { NameId = name.Id, Value = feature });
            }
            return new Name()
            {
                Id = name.Id,
                Value = name.Name,
                Tags = tags,
                Features = features
            };
        }
        #endregion
    }
}
