namespace Backend.Models
{
    public class MinorRegisterDTO
    {
        public User User { get; set; }
        public Patient Patient { get; set; }
        public EmergencyContact EmergencyContact { get; set; }
        public Insurance Insurance { get; set; }
        public Minor Minor { get; set; }
    }
}
