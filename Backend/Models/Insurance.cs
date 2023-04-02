using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Insurance
    {
        [Key]
        public int Sin { get; set; }
       
        public string Iname { get; set; }
        
        public int Inumber { get; set; }
    }
}
