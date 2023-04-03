using Microsoft.AspNetCore.Identity;
using irrbackend.Models;
using irrbackend.Constants;

namespace irrbackend.DAL
{
    public static class UserSeeder
    {
        public static async Task SeedRolesAndAdminAsync(IServiceProvider service, IConfigurationSection configuration)
        {
            //Initializes User/Role Manager. Sets up new Roles based on MyConstants.cs and ensures they're created inside the DB
            var userManager = service.GetService<UserManager<ApplicationUser>>();
            var roleManager = service.GetService<RoleManager<IdentityRole>>();
            var roles = new List<IdentityRole> { };

            //Creates a list of roles based on constants, iterates on list and initializes roles to the managers
            foreach (Roles constantRole in Enum.GetValues(typeof(Roles)))
            {
                roles.Add(new IdentityRole { Name = constantRole.ToString() });
            }
            foreach(var role in roles)
            {
                if (await roleManager.RoleExistsAsync(role.Name)) continue;
                var result = await roleManager.CreateAsync(role);
                if (result.Succeeded) continue;

                throw new Exception($"Could not create role {role.Name}");
            }
            
            // Creates a default user with Username/Email/Password set inside secrets and added to the config in program.cs
            var user = new ApplicationUser
            {
                UserName = configuration["username"],
                Email = configuration["email"],
                EmailConfirmed = true,
                PhoneNumberConfirmed = true
            };
            //Checks if our admin was created. Initializes a new one if not, using password in secrets
            var userInDb = await userManager.FindByEmailAsync(user.Email);
            if (userInDb == null)
            {
                await userManager.CreateAsync(user, configuration["password"]);
                await userManager.AddToRoleAsync(user, Roles.admin.ToString());
            }

        }
    }
}
