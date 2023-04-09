# irrPortfolio
	Isaac Perks
	2/20/23

# Description
My personal portfolio website. Serves as a place of practice and an overview of my experience & skills.
Built in C# ASP.NET CORE MVC for the backend, JS React for the frontend, and SQL for the database.
I developed this project while using as few libraries as possible and as few pre-made templates as possible.


Currently this website includes a host of features such as;  
- User Authentication via Duende  
- Database Read/Write with API endpoints  
- Data visualization and retrieval from location such as github  
- Dynamic webpages with smooth animations and fast response times  
- Integrated resume as a JSON schema wrapped in react  
- A web api for front/back-end communication  
- Full Web Blog view/editor with SQL Integration and user Auth
Other notable points: 
- The backend calls github data via GraphQL calls
- All API calls are implemented via ASYNC/AWAIT process
- Minimal library usage to keep build process simple
- Built without as few pre-written templates via Microsoft as possible
  
  
  
Plans to further update this project include;  
- User and Admin Interface  
- Direct project integration  
*These will be implemented via other repo's to be built with more compartmentalization of logic in mind and allow for reuse in other places  
  
### Build
	OS: Windows
	IDE: Visual Studio Community 2022   
	Language: C# and Javascript   
	Dependencies: 
	ASP.NET 7.0
		XUnit
		Moq
		DependencyInjection
		EntityFrameworkCore
		EFC SQLServer
		Swashbuckle aspnetcore(Swagger OpenAPI UI)
		IdentityServer
		SPAProxy
	React 13.4
		Bootstrap 5.2
		Bootstrap Icons
		Http-Proxy-Middleware 2.0.6
		React-router 6.3
		Reactstrap 9.1.3
		Rimraf 3.0.2
		TipTap 2.0.0