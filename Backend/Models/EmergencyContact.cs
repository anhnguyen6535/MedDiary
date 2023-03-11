using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class EmergencyContact
    {
        [Key]
        public int UserId { get; set; }
        [Key]
        public string Name { get; set; }
        public int Phone { get; set; }
    }
}
