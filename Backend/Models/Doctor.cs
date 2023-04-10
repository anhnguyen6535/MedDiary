using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Doctor
    {
        [Key]
        public int Sin { get; set; }
        [Required]
        public int PracId { get; set; }

        [Column(TypeName = "varchar(15)")]
        public string ClinicName { get; set; }
    }
}
