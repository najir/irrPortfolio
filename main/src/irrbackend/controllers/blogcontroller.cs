using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class blogController : ControllerBase
    {
        private readonly ILogger<blogController> _logger;

        public blogController(ILogger<blogController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        public IActionResult PostData(string id)
        {
            return Content($"blog Post data called with {id}");
        }
        [HttpGet("{id}")]
        public IActionResult GetData(string id)
        {
            return Content($"blog Get data called with {id}");
        }

    }



}