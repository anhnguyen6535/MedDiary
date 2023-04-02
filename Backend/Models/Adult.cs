using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Adult
    {
        [Key]
        public int Sin { get; set; }
        public string MaritalStatus { get; set; }
    }
}
