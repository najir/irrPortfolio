using irrbackend.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class blogController : ControllerBase
    {
        private readonly ILogger<blogController> _logger;
        private readonly WebDbContext _context;

        public blogController(ILogger<blogController> logger, WebDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        public IActionResult PostData(int id)
        {
            return Content($"blog Post data called with {id}");
        }
        [HttpGet("{id}")]
        public IActionResult GetData(int id)
        {
            return Content($"blog Get data called with {id}");
        }
        [Authorize]
        public IActionResult PostComment()
        {

        }
        [Authorize(Policy = "RequireAdministratorRole")]
        public IActionResult PostBlog()
        {

        }

    }



}