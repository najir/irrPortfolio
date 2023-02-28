using System;
using System.Collections.Generic;
using Xunit;
using irrbackend.Controllers;
using Moq;

namespace irrbackend.tests
{
	public class BlogHttpTest
	{
		[Fact]
		public bool Blog_SendStandard_Test()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<blogController>>();
			ILogger<blogController> logger = _mockLogger.Object;
			var blogController = new blogController(logger);

			int id = 1;
			string answer = $"blog Post data called with {id}";
			var result = blogController.PostData(id).ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool Blog_GetStandard_Test()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<blogController>>();
			ILogger<blogController> logger = _mockLogger.Object;
			var blogController = new blogController(logger);

			int id = 1;
			string answer = $"db Get data called with {id}";
			var result = blogController.GetData(id).ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
	}
}