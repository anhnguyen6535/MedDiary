using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Clinic
    {
        [Key]
        public Int64 Phone { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
    }
}
