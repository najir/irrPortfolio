using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[ApiController]
	[Route("[controller]")]
	public class UserController : ControllerBase
	{
		private readonly ILogger<UserController> _logger;

		public UserController(ILogger<UserController> logger)
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
		public IActionResult LoginUser()
		{

		}
		[Authorize]
		public IActionResult LogoutUser()
		{

		}
		public IActionResult ForgotPassword()
		{

		}
		[Authorize(Policy = "RequireAdministratorRole")]
		public IActionResult SetRole()
		{

		}


	}



}