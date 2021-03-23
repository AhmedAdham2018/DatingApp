using Api.Data;
using Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class ErrorsController : BaseApiController
    {
        private readonly DataContext _context;
        public ErrorsController(DataContext context)
        {
            _context = context;
        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var thing = _context.Users.Find(-1);
            if(thing == null) return NotFound();
            return Ok(thing);
        }

        
        [HttpGet("server-error")]
        public ActionResult<string> GetSeverError()
        {
          var thing = _context.Users.Find(-1);
          var toReturn = thing.ToString();
          return toReturn;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
          return BadRequest("this is a bad request!");
        }
    }
}