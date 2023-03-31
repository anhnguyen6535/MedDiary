using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Insurance
    {
        [Key]
        public int UserId { get; set; }
        [Key]
        public string Iname { get; set; }
        [Key]
        public int Inumber { get; set; }
    }
}
