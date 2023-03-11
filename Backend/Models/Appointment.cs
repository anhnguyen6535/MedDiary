using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Appointment
    {
        [Key]
        public int DoctorId { get; set; }
        [Key]
        public int PatientId { get; set; }
        [Key]
        public int Time { get; set; }   //Fixme: type is int for now
        [Key]
        public int Date { get; set; }   //Fixme: type is int for now
        public int PatientPhone { get; set; }
        public bool IsAttended { get; set; }
        public bool IsCancel { get; set; }

    }
}
