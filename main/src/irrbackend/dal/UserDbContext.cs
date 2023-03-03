using irrbackend.Models;
using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace irrbackend.DAL
{
	public class UserDbContext : ApiAuthorizationDbContext<ApplicationUser>
	{
		public UserDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreItems)
			: base(options, operationalStoreItems)
		{

		}
	}
}