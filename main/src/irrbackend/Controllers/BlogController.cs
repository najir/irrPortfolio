using irrbackend.DAL;
using irrbackend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace irrbackend.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("api/[controller]/[action]")]
    public class BlogController : ControllerBase
    {
        private readonly ILogger<BlogController> _logger;

        private readonly WebDbContext _context;

        public BlogController(ILogger<BlogController> logger, WebDbContext context)
        {
            _logger = logger;
            _context = context;
        }
        [ApiExplorerSettings(IgnoreApi = true)]
        [Route("/error")]
        public IActionResult HandleError() =>
            Problem();
        [HttpGet]
        [ActionName("latestblog")]
        public async Task<IActionResult> LatestBlog()
        {
            var latestBlog = await _context.Blogs.Where(b => b.IsPrivate == false).OrderBy(s => s.Id).LastOrDefaultAsync();

            if (latestBlog == null)
            {
                return NotFound();
            }
            return Ok(latestBlog);
        }
        [HttpGet]
        public async Task<IActionResult> ListBlog()
        {
            var listBlog = await _context.Blogs.Where(b => b.IsPrivate == false).OrderBy(s => s.Id).ToListAsync();

            if (listBlog == null)
            {
                return NotFound();
            }
            return Ok(listBlog);
        }
        [HttpGet]
        public async Task<IActionResult> GetBlogByDate(DateTime date)
        {
            var getBlog = await _context.Blogs.SingleAsync(b => b.PostDate == date);

            if (getBlog == null)
            {
                return NotFound();
            }
            return Ok(getBlog);

        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlogById(int id)
        {
            var getBlog = await _context.Blogs.FindAsync(id);

            if (getBlog == null)
            {
                return NotFound();
            }
            return Ok(getBlog);

        }
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostBlog(Blog blog)
        {

            await _context.Blogs.AddAsync(new Blog()
            {
                Title = blog.Title.ToString(),
                Summary = blog.Summary?.ToString(),
                BlogContent = blog.BlogContent,
                IsPrivate = blog.IsPrivate,
                PostDate = blog.PostDate

            });
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(PostBlog), new { id = blog.Id }, blog);
        }
        [HttpPost("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteBlog(int id)
        {
            var blogObj = await _context.Blogs.FindAsync(id);
            if (blogObj == null)
            {
                return NotFound();
            }

            _context.Blogs.Remove(blogObj);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        [HttpPut]
        [Authorize]
        public async Task<IActionResult> ModifyBlog(Blog blog)
        {
            var oldBlog = await _context.Blogs.FindAsync(blog.Id);

            if(oldBlog == null)
            {
                return NotFound();
            }
            oldBlog.Title = blog.Title.ToString();
            oldBlog.Summary = blog.Summary?.ToString();
            oldBlog.BlogContent = blog.BlogContent;
            oldBlog.IsPrivate = blog.IsPrivate;
            oldBlog.PostDate = blog.PostDate;

            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}