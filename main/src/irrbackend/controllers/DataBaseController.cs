using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class DbController : ControllerBase
	{
		private readonly ILogger<DbController> _logger;

		public DbController(ILogger<DbController> logger)
		{
			_logger = logger;
		}

		[HttpPost]
		public IActionResult PostData(string id)
		{
			return Content($"db Post data called with {id}");
		}
		[HttpGet("{id}")]
		public IActionResult GetData(string id)
		{
			return Content($"db Get data called with {id}");
		}

	}



}