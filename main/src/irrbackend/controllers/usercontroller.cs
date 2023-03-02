using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using irrbackend.DAL;
using System.Linq;


namespace irrbackend.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class UserController : ControllerBase
	{
		private readonly ILogger<UserController> _logger;
        private readonly WebDbContext _context;


        public UserController(ILogger<UserController> logger, WebDbContext context)
		{
            _context = context;
			_logger = logger;
        }

		[HttpPost]
		public IActionResult PostData(int id)
		{
			return Content($"user Post data called with {id}");
		}
		[HttpGet("{id}")]
		public IActionResult GetData(int id)
		{
            var data = _context.Users
                .Single(b => b.Id == id);
            return Content($"user Get data called with {id}");
		}
		public IActionResult LoginUser()
		{
            return Content("Login user was called");
        }
        [Authorize]
		public IActionResult LogoutUser()
		{
            return Content("Loginout user was called");
        }
        public IActionResult ForgotPassword()
		{
            return Content("Forgot password was called");
        }
        [Authorize(Policy = "RequireAdministratorRole")]
		public IActionResult SetRole()
		{
            return Content("Set role was called");
        }


    }



}