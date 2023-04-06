using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Backend.Models
{
    public class Work_For
    {
        [Key]
        public int DoctorId { get; set; }
        [Column(TypeName = "varchar(15)")]
        public string Phone { get; set; }

    }
}
