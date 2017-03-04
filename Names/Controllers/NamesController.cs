using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Names.Data;
using Names.Models;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Names.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class NamesController : BaseController
    {
        public NamesController(INameRepository repository, ILogger<BaseController> logger) : base(repository, logger) { }

        // GET: api/Names
        [HttpGet]
        public object Get()
        {
            var names = Repository.GetAllNamesByUser(this.User.Identity.Name);
            return names.Select(x => Factory.Create(x));
        }

        // GET api/Names/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var name = Repository.GetNameById(id);
            if (name != null)
            {
                return Ok(Factory.Create(name));
            }
            return NotFound();
        }

        // POST api/Names
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]NameModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var name = Factory.Create(model);
            name.UserId = this.User.Identity.Name;
            int id = await Repository.AddName(name);
            return Ok(id);
        }

        // PUT api/Names/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]NameModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (Repository.GetNameById(id) == null)
            {
                return BadRequest("Invalid Name Id");
            }

            var name = Factory.Create(model);
            name.UserId = this.User.Identity.Name;
            int updatedId = await Repository.UpdateName(name);
            return Ok(updatedId);
        }

        // DELETE api/Names/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var name = Repository.GetNameById(id);
            if (name == null)
            {
                return BadRequest("Invalid Name Id");
            }
            var result = await Repository.DeleteNameById(id);
            return Ok(result);
        }
    }
}
