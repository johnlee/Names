using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using Names.Data;
using Names.Models;
using System.Security.Claims;
using System.Security.Principal;

namespace Names.Controllers
{
    public abstract class BaseController : Controller
    {
        private ILogger<BaseController> _logger;
        private INameRepository _repository;
        private ModelFactory _factory;

        public const string URLHELPER = "URLHELPER";

        public BaseController(INameRepository repository, ILogger<BaseController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        public override void OnActionExecuting(ActionExecutingContext context)
        {
            base.OnActionExecuting(context);
            context.HttpContext.Items[URLHELPER] = this.Url;
        }

        protected INameRepository Repository
        {
            get
            {
                return _repository;
            }
        }

        protected ModelFactory Factory
        {
            get
            {
                _factory = new ModelFactory(_repository); // TODO URLHELPER
                return _factory;
            }
        } 
    }
}
