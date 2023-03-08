using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;

namespace irrbackend.Models
{
	public class BookList
	{
		public int Id { get; set; }
		[Required]

		public string? Title { get; set; }
		[Required]

		public string? Author { get; set; }

		public string? BlogUrl { get; set; }
		[Required]
		public string? Summary { get; set; }

	}
}