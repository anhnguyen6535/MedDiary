using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Minor
    {
        [Key]
        public int UserId { get; set; }
        public int GuardianId { get; set; }
    }
}
