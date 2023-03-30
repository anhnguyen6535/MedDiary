using System;
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }
        public int DoctorId { get; set; }

        public int PatientId { get; set; }
        
        public string Time { get; set; }   //Fixme: type is int for now
        
        public string Date { get; set; }   //Fixme: type is int for now
        public Int64 PatientPhone { get; set; }
        public bool IsAttended { get; set; }
        public bool IsCancel { get; set; }

    }
}
