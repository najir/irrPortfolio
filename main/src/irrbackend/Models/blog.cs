using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Web;

namespace irrbackend.Models
{
    public class Blog
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string? Summary { get; set; }
        [Required]
        public string BlogContent { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
        [DataType(DataType.Date)]
        [Required]
        public DateTime PostDate { get; set; }
        [Required]
        public bool IsPrivate { get; set; }
    }
}