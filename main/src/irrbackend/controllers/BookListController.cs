using irrbackend.DAL;
using irrbackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class BookListController : ControllerBase
	{
		private readonly ILogger<BookListController> _logger;
		private readonly WebDbContext _context;

		public BookListController(ILogger<BookListController> logger, WebDbContext context)
		{
			_logger = logger;
			_context = context;
		}
        [Authorize(Policy = "RequireAdministratorRole")]
		[HttpPost("{id}")]
		public IActionResult PostBook(long id, BookList bookList)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

		}
		[HttpGet("{id}")]
		public IActionResult GetBook(int id)
		{

		}
        [HttpGet]
        public IActionResult GetBook()
        {
            return Content("booklist Get data called with ");
        }

    }



}