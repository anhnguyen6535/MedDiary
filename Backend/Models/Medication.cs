using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Medication
    {
        [Key]
        public int MedId { get; set; }
        public int PatientId { get; set; }
        public string Date { get; set; }   //Fixme: type is int for now
        public string Name { get; set; }
        public string Duration { get; set; }
        public string Dosage { get; set; }


    }
}
