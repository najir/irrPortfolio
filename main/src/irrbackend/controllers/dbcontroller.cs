using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[Route("[controller]")]
	[ApiController]
	public class DbController : ControllerBase
	{
		private readonly ILogger<DbController> _logger;

		public DbController(ILogger<DbController> logger)
		{
			_logger = logger;
		}

		[HttpPost]
		public string PostData(string id)
		{
			return id;
		}
		[HttpGet("{id}")]
		public IActionResult GetData(string id)
		{
			return ControllerContext.MyDisplayRouteInfo(id);
		}

	}



}