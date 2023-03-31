using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Diagnosis
    {
        [Key]
        public int Diagnosis_Id { get; set; }
        public int Doctor_Id { get; set; }
        
        public int Patient_Id { get; set; }
       
        public string Date { get; set; } //Fixme: ALL DATE IS TYPE INT FOR NOW
        public string Description { get; set; }
        public string Type { get; set; }
        
    }
}
