using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class User
    {
        [Key]
        public int Sin { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public bool IsDoctor { get; set; }
        public Int64 Phone { get; set; }
        public string Address { get; set; }
        public string Sex { get; set; }
    }
}
