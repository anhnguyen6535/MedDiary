using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Appointment
    {
        [Key]
        public int AppointmentId { get; set; }
        [Required]
        public int DoctorId { get; set; }
        [Required]
        public int PatientId { get; set; }

        [Required]
        [Column(TypeName = "varchar(10)")] //HH/MM/SS
        public string Time { get; set; }   

        [Required]
        [Column(TypeName = "varchar(10)")] //DD/MM/YYYY
        public string Date { get; set; }

        [Column(TypeName = "varchar(15)")]
        public string PatientPhone { get; set; }
        public bool IsAttended { get; set; }
        public bool IsCancel { get; set; }

    }
}
