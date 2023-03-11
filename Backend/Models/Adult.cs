using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Adult
    {
        [Key]
        public int UserId { get; set; }
        public string MaritalStatus { get; set; }
    }
}
