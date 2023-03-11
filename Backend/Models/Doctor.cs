using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Doctor
    {
        [Key]
        public int UserId { get; set; }
        public int PracId { get; set; }
    }
}
