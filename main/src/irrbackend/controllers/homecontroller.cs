using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[Route("[controller]")]
	public class HomeController : ControllerBase
	{
		private readonly ILogger<HomeController> _logger;

		public HomeController(ILogger<HomeController> logger)
		{
			_logger = logger;
		}
		public IActionResult Home()
		{
			return Content("Home action return in home controller");
		}

	}



}