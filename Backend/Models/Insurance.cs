using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Insurance
    {
        [Key]
        public int UserId { get; set; }
       
        public string Iname { get; set; }
        
        public int Inumber { get; set; }
    }
}
