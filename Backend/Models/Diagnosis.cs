using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Diagnosis
    {
        [Key]
        public int Doctor_Id { get; set; }
        [Key]
        public int Patient_Id { get; set; }
        [Key]
        public int Date { get; set; } //Fixme: ALL DATE IS TYPE INT FOR NOW
        public string Description { get; set; }
        public string Type { get; set; }
        
    }
}
