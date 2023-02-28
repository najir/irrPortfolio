using System;
using System.Collections.Generic;
using Xunit;
using irrbackend.Controllers;
using Moq;

namespace irrbackend.tests
{
	public class DbPostTest
	{
		[Fact]
		public bool post_InputInt_IsSuccess()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<databasecontroller>>();
			ILogger<databasecontroller> logger = _mockLogger.Object;
			var dbController = new databasecontroller(logger);

			var id = 5;
			string answer = $"db Post data called with {id}";
			var result = dbController.PostData(id).ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
	}
}