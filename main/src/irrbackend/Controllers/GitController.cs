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

        private static string projectLanguages = "query { viewer{ repositories(last: 15){ nodes{ languages(first: 5){ nodes{name} }}}}}";


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
        public async Task<IActionResult> GitLanguagePie()
        {
            var request = new HttpRequestMessage(HttpMethod.Post, projectLanguages);

            var client = _clientFactory.CreateClient("github");

            var response = await client.SendAsync(request);

            string returnData;

            if (response.IsSuccessStatusCode)
            {
                returnData = await response.Content.ReadAsStringAsync();
            }
            else
            {
                returnData = "An Error Has Occured";
            }
            return Content(returnData, "application/json");

        }

        [HttpGet]
        public async Task<IActionResult> GitProgressPull()
		{
			var request = new HttpRequestMessage(HttpMethod.Post, commityHistoryQuery);

			var client = _clientFactory.CreateClient("github");

			var response = await client.SendAsync(request);

            string returnData;

            if (response.IsSuccessStatusCode)
            {
                using var body =
                    await response.Content.ReadAsStreamAsync();

                GitModel? editData = await JsonSerializer.DeserializeAsync<GitModel>(body);
                Week[] weekArray = editData.Data.Viewer.ContributionsCollection.ContributionCalendar.Weeks[0..4];
                using (var stream = new MemoryStream())
                {
                    await JsonSerializer.SerializeAsync(stream, weekArray);
                    stream.Position = 0;
                    using var reader = new StreamReader(stream);
                    returnData = await reader.ReadToEndAsync();
                }
            }
            else
            {
                returnData = "An Error Has Occured";
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
                returnData = await response.Content.ReadAsStringAsync();
            }
            else
            {
                returnData = "An Error Has Occured";
            }
            return Content(returnData, "application/json");
        }
		[HttpGet("{id}")]
        public async Task<IActionResult> GitProjectPullId(int id)
        {
            string projectItemQuery = $"query {{ viewer{{ repository(name: {id}){{ defaultBranchRef{{ target{{ ...on Commit{{ history{{ totalCount}}}}}}}} description, primaryLanguage {{name}}, updatedAt, createdAt}}}}";
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
                returnData = "An Error Has Occured";
            }
            return Content(returnData, "application/json");
        }
    }

}