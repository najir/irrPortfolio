using irrbackend.Models;
using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace irrbackend.Controllers
{
	[Route("api/[controller]")]
	public class GitController : ControllerBase
	{
		private readonly ILogger<GitController> _logger;

		private readonly IHttpClientFactory _clientFactory;

        private static string commityHistoryQuery = "query { viewer{ contributionsCollection{ contributionCalendar{ weeks{ contributionDays{ contributionCount}}}}}}";

		private static string projectListQuery = "query {viewer {repositories(last: 10, privacy: PUBLIC){ nodes{ name, description }}}}";

		public GitController(ILogger<GitController> logger, IHttpClientFactory clientFactory)
		{
			_logger = logger;
			_clientFactory = clientFactory;
		}
        [ApiExplorerSettings(IgnoreApi = true)]
        [Route("/error")]
		public IActionResult HandleError() =>
			Problem();
        [HttpGet]
        public async Task<IActionResult> GitProgressPull()
		{
			var request = new HttpRequestMessage(HttpMethod.Post, commityHistoryQuery);

			var client = _clientFactory.CreateClient("github");

			var response = await client.SendAsync(request);

			string returnData;

			if (response.IsSuccessStatusCode)
			{
				returnData = await response.Content.ReadAsStringAsync();
			}
			else
			{
				returnData = "";
			}
			return Content(returnData, "application/json");
		}
		[HttpGet]
        public async Task<IActionResult> GitProjectPull()
        {
            var request = new HttpRequestMessage(HttpMethod.Post, projectListQuery);

            var client = _clientFactory.CreateClient("github");

            var response = await client.SendAsync(request);

             string returnData;

            if (response.IsSuccessStatusCode)
            {
                using var body = 
                    await response.Content.ReadAsStreamAsync();

                GitModel? editData = await JsonSerializer.DeserializeAsync<GitModel>(body);
                returnData = editData.data.viewer.contributionsCollection.contributionCalendar.weeks.GetRange(0, 4);
            }
            else
            {
                returnData = JsonSerializer.Serialize<Dictionary<string, Object>>((){"",""});
            }
            return Content(returnData, "application/json");
        }
		[HttpGet("{id}")]
        public async Task<IActionResult> GitProjectPull(int id)
        {
            string projectItemQuery = $"query {{viewer {{repository(name:{id}) {{description}}}}}}";
            var request = new HttpRequestMessage(HttpMethod.Post, projectItemQuery);

            var client = _clientFactory.CreateClient("github");

            var response = await client.SendAsync(request);

            string returnData;

            if (response.IsSuccessStatusCode)
            {
                returnData = await response.Content.ReadAsStringAsync();
            }
            else
            {
                returnData = "";
            }
            return Content(returnData, "application/json");
        }
    }



}