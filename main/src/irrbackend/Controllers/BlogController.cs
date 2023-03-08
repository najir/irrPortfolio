using irrbackend.DAL;
using irrbackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace irrbackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BlogController : ControllerBase
    {
        private readonly ILogger<BlogController> _logger;
        private readonly WebDbContext _context;

        public BlogController(ILogger<BlogController> logger, WebDbContext context)
        {
            _logger = logger;
            _context = context;
        }
        [Authorize(Policy = "RequireAdministratorRole")]
        [HttpPost]
        public async Task<IActionResult> PostBlog(Blog blog)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            await _context.Blogs.AddAsync(blog);
            return CreatedAtAction(nameof(GetBlog), new { id = blog.Id }, blog);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlog(int id)
        {
            Blog? blog = null;
            try
            {
                blog = await _context.Blogs
                .SingleAsync(b => b.Id == id);
            }
            catch (Exception ex)
            {
                _logger.LogError($"An Error has occured : {ex}");
            }
            if (blog is null)
            {
                return NotFound("Book was not found");
            }
            else
            {
                return Ok(blog);
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetBlog()
        {
            Blog[] blogs = { };
            try
            {
                blogs = await _context.Blogs
                    .ToArrayAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError($"An Error has occurd : {ex}");
            }
            if (!blogs.Any())
            {
                return NotFound("No Books were found");
            }
            else
            {
                return Ok(blogs);
            }
        }
    }



}