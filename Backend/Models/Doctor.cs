using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Doctor
    {
        [Key]
        public int Sin { get; set; }
        public int PracId { get; set; }
    }
}
