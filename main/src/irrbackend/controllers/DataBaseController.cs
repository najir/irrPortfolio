using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class databasecontroller : ControllerBase
	{
		private readonly ILogger<databasecontroller> _logger;

		public databasecontroller(ILogger<databasecontroller> logger)
		{
			_logger = logger;
		}

		[HttpPost]
		public IActionResult PostData(int id)
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