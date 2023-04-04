using System.ComponentModel.DataAnnotations;
namespace Backend.Models
{
    public class Labtest
    {
        [Key]
        public int TestId { get; set; }
        public int PatientSin { get; set; }
        public string Date { get; set; }
        public string Lab { get; set; }
        public string Service { get; set; }
        public string Results { get; set; }
        public string Notes { get; set; }   //Fixme: type is int for now


    }
}