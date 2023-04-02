using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Medication
    {
        [Key]
        public int MedId { get; set; }
        [Required]
        public int PatientId { get; set; }
        [Required]
        [Column(TypeName = "varchar(10)")] //DD/MM/YYYY
        public string Date { get; set; }
        [Required]
        [Column(TypeName = "varchar(50)")]
        public string Name { get; set; }
        [Required]
        public string Duration { get; set; }
        [Required]
        public string Dosage { get; set; }


    }
}
