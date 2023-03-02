using irrbackend.Models;
using Microsoft.EntityFrameworkCore;

namespace irrbackend.DAL;

public class WebDbContext : DbContext
{
	public WebDbContext(DbContextOptions<WebDbContext> options)
		: base(options)
	{
	}
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<UserList> Users { get; set; }
	public DbSet<BookList> Books { get; set; }

}