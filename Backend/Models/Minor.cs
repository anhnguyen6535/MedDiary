using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Minor
    {
        [Key]
        public int Sin { get; set; }
        public int GuardianId { get; set; }
    }
}
