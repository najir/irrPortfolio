using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[Route("[controller]")]
	public class DbController : ControllerBase
	{
		private readonly ILogger<DbController> _logger;

		public DbController(ILogger<DbController> logger)
		{
			_logger = logger;
		}


	}



}