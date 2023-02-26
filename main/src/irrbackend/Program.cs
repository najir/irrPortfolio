/*****************************************
 * Isaac Perks
 * 2/23/2023
 * Back-End web server for irrportfolio website
 ****************************************/
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllersWithViews();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/home/error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=home}/{action=Index}/");
app.MapControllerRoute(
    name: "db",
    pattern: "db/{action=read}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
