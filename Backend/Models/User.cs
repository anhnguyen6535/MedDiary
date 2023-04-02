using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class User
    {
        [Key]
        public int Sin { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Fname { get; set; }

        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Lname { get; set; }

        [Required]
        public bool IsDoctor { get; set; }
        [Column(TypeName = "varchar(15)")]
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Sex { get; set; }
    }
}
