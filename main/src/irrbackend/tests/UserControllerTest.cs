using System;
using System.Collections.Generic;
using Xunit;
using irrbackend.Controllers;
using Moq;

namespace irrbackend.tests
{
	public class UserLogTest
	{
		[Fact]
		public bool User_Login_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Home action return in home controller";
			var result = UserController.LoginUser().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool User_Logout_NoAuth_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Home action return in home controller";
			var result = UserController.LogoutUser().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool User_Logout_Auth_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Home action return in home controller";
			var result = UserController.LogoutUser().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool User_ForgotPassword_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Home action return in home controller";
			var result = UserController.ForgotPassword().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool User_SetRole_NoAuth_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Home action return in home controller";
			var result = UserController.SetRole().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
		public bool User_SetRole_Auth_Attempt()
		{
			//This simply tests that my controller and action works at any level
			var _mockLogger = new Mock<ILogger<UserController>>();
			ILogger<UserController> logger = _mockLogger.Object;
			var UserController = new UserController(logger);

			string answer = "Set role was called";
			var result = UserController.SetRole().ToString;

			Assert.True(answer.Equals(result));

			return true;
		}
	}
}