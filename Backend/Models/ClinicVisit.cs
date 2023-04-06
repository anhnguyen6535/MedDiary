using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Backend.Models

{
    public class ClinicVisit
    {
        [Key]
        public int VisitId { get; set; }
        [Required]
        public int Sin { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")] //DD/MM/YYYY
        public string Date { get; set; }
        public string ClinicName { get; set; }
        public string Physician { get; set; }
    }
}