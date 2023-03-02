using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[Route("api/[controller]")]
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
		public IActionResult GitProgressPull()
		{
			return Content("GitDataPull called");
		}
		[HttpGet]
        public IActionResult GitProjectPull()
        {
            return Content("GitDataPull called");
        }
		[HttpGet("{id}")]
        public IActionResult GitProjectPull(int id)
        {
            return Content("GitDataPull called");
        }
    }



}