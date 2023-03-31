using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class EmergencyContact
    {
        [Key]
        public int UserId { get; set; }
        public string Name { get; set; }
        public Int64 Phone { get; set; }
    }
}
