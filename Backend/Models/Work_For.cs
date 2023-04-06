using System.ComponentModel.DataAnnotations;
namespace Backend.Models
{
    public class Work_For
    {
        [Key]
        public int DoctorId { get; set; }
        public string Location { get; set; }

    }
}
