using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Diagnosis
    {
        [Key]
        public int Diagnosis_Id { get; set; }
        [Required]
        public int Doctor_Id { get; set; }
        [Required]
        public int Patient_Id { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")] //DD/MM/YYYY
        public string Date { get; set; } //Fixme: ALL DATE IS TYPE INT FOR NOW
        public string Description { get; set; }
        public string Type { get; set; }
        
    }
}
