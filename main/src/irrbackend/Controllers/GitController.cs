using Castle.Components.DictionaryAdapter.Xml;
using Microsoft.AspNetCore.Mvc;

namespace irrbackend.Controllers
{
	[Route("api/[controller]")]
	public class GitController : ControllerBase
	{
		private readonly ILogger<GitController> _logger;

		private readonly IHttpClientFactory _clientFactory;

        private static string commityHistoryQuery = "";

		private static string projectListQuery = "";

		private static string projectItemQuery = "";

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
                returnData = await response.Content.ReadAsStringAsync();
            }
            else
            {
                returnData = "";
            }
            return Content(returnData, "application/json");
        }
		[HttpGet("{id}")]
        public async Task<IActionResult> GitProjectPull(int id)
        {
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