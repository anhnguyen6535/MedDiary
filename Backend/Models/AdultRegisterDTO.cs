namespace Backend.Models
{
    public class AdultRegisterDTO
    {
        public User User { get; set; }
        public Patient Patient { get; set; }    
        public EmergencyContact EmergencyContact { get; set; }
        public Insurance Insurance { get; set; }
        public Adult Adult { get; set; }
    }
}
