using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Clinic
    {
        [Key]
        public int Phone { get; set; }
        [Key]
        public string Location { get; set; }
        public string Name { get; set; }
    }
}
