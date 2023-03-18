using System;
using System.Collections.Generic;
using Xunit;
using irrbackend.Controllers;
using Moq;

namespace irrbackend.tests
{
	public class HomeViewTest
	{
		[Fact]
		public bool Home_RequestStandard_Test()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<GitController>>();
			ILogger<GitController> logger = _mockLogger.Object;
			var homeController = new GitController(logger);

			string answer = "Home action return in home controller";
			var result = homeController.Home().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
	}
}