using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Insurance
    {
        [Key]
        public int Sin { get; set; }
        [Required]
        public string Iname { get; set; }
        [Required]
        public int Inumber { get; set; }
    }
}
