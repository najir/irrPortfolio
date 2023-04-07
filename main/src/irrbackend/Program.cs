/*****************************************
 * Isaac Perks
 * 2/23/2023
 * Back-End web server for irrportfolio website
 ****************************************/
using irrbackend.DAL;
using irrbackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication;
using Duende.IdentityServer.EntityFramework.Entities;
using Microsoft.Extensions.FileSystemGlobbing.Internal.Patterns;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Azure.Identity;
using Azure.Extensions.AspNetCore.Configuration.Secrets;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<WebDbContext>(options => 
options.UseSqlServer(builder.Configuration.GetConnectionString("IrrDb")));

builder.Services.AddDbContext<UserDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("IrrDb")));



if (!builder.Environment.IsDevelopment())
{
    var keyVaultEndpoint = new Uri("");
    builder.Configuration.AddAzureKeyVault(keyVaultEndpoint, new DefaultAzureCredential());
}

builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
    .AddRoles<IdentityRole>()
    .AddRoleManager<RoleManager<IdentityRole>>()
    .AddDefaultTokenProviders()
    .AddEntityFrameworkStores<UserDbContext>();

builder.Services.AddIdentityServer(options =>
{
    options.IssuerUri = builder.Configuration["IssuerUri"];
})
    .AddApiAuthorization<ApplicationUser, UserDbContext>()
    .AddProfileService<ProfileService>();

builder.Services.AddAuthentication()
    .AddIdentityServerJwt()
    .AddJwtBearer(options =>
    {
        var issuers = new List<string>()
        {
            "https://irrperks.dev",
            "https://irrbackend.azurewebsites.net"
        };
        TokenValidationParameters tokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuers = issuers
        }; 
    });

builder.Services.AddHttpClient("github", c =>
{
    c.BaseAddress = new Uri("https://api.github.com/graphql");
    c.DefaultRequestHeaders.Add("Accept", "application/vnd.github.v3+json");
    c.DefaultRequestHeaders.Add($"Authorization, Bearer {builder.Configuration["SECRET-KEY"]}", "Najir-Backend");
    c.DefaultRequestHeaders.Add("User-Agent", "Najir-Backend");

});
builder.Services.AddControllers(options => options.SuppressImplicitRequiredAttributeForNonNullableReferenceTypes = true);
builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddNewtonsoftJson();

builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("IsAdmin",
        policy => policy.RequireClaim(ClaimTypes.Role, "admin"));//policy.RequireRole("admin"));
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/error");
    app.UseHsts();
}
else
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = "";
    });
}
app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseIdentityServer();
app.UseAuthorization();

app.MapControllerRoute( 
    name: "default",
    pattern: "api/{controller}/{action=Index}/{id?}");
app.MapRazorPages();

using (var scope = app.Services.CreateScope())
{
    await UserSeeder.SeedRolesAndAdminAsync(scope.ServiceProvider, builder.Configuration);
}

app.MapFallbackToFile("index.html");
app.Run();
