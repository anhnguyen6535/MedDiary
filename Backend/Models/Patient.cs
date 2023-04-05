using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Patient
    {
        [Key]
        public int Sin { get; set; }
        [Required]
        public string HealthId { get; set; }
        public bool IsMinor { get; set; }
    }
}
