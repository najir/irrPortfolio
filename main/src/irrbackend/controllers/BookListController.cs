using irrbackend.DAL;
using irrbackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
		[HttpPost]
		public async Task<IActionResult> PostBook(BookList bookList)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			await _context.Books.AddAsync(bookList);
			return CreatedAtAction(nameof(GetBook), new { id = bookList.Id }, bookList);
		}
		[HttpGet("{id}")]
		public async Task<IActionResult> GetBook(int id)
		{
			BookList? book = null;
			try
			{
				book = await _context.Books
                .SingleAsync(b => b.Id == id);
            }
			catch(Exception ex)
			{
				_logger.LogError($"An Error has occured : {ex}");
			}
			if(book is null)
			{
				return NotFound("Book was not found");
			}
			else
			{
				return Ok(book);
			}
		}
        [HttpGet]
        public async Task<IActionResult> GetBook()
        {
			BookList[] books = { };
			try
			{
				books = await _context.Books
					.ToArrayAsync();
			}
			catch(Exception ex)
			{
				_logger.LogError($"An Error has occurd : {ex}");
			}
			if(!books.Any())
			{
				return NotFound("No Books were found");
			}
			else
			{
				return Ok(books);
			}
        }
    }



}