using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Patient
    {
        [Key]
        public int Sin { get; set; }
        public Int64 HealthId { get; set; }
        public bool IsMinor { get; set; }
    }
}
