namespace Backend.Models
{
    public class UserLogInDTO
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsDoctor { get; set; }
    }
}
