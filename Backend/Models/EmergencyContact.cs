using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class EmergencyContact
    {
        [Key]
        public int Sin { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [Column(TypeName = "varchar(15)")]
        public Int64 Phone { get; set; }
    }
}
