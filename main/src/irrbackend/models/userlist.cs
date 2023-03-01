using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace irrbackend.Models
{
    public class UserList
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
    }
}