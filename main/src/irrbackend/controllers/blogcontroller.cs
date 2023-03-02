using irrbackend.DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly ILogger<BlogController> _logger;
        private readonly WebDbContext _context;

        public BlogController(ILogger<BlogController> logger, WebDbContext context)
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
        [HttpGet("{id}")]
        public IActionResult GetBlog()
        {

        }
        [HttpGet]
        public IActionResult GetComments()
        {

        }

    }



}