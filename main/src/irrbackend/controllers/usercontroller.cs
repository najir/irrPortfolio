using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class userController : ControllerBase
	{
		private readonly ILogger<userController> _logger;

		public userController(ILogger<userController> logger)
		{
			_logger = logger;
		}

		[HttpPost]
		public IActionResult PostData(string id)
		{
			return Content($"user Post data called with {id}");
		}
		[HttpGet("{id}")]
		public IActionResult GetData(string id)
		{
			return Content($"user Get data called with {id}");
		}

	}



}