using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Clinic
    {
        [Column(TypeName = "varchar(15)")]
        public string Phone { get; set; }
        public string Location { get; set; }
        [Key]
        public string Name { get; set; }
    }
}
