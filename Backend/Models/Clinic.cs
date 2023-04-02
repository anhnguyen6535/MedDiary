using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Models
{
    public class Clinic
    {
        [Key]
        [Column(TypeName = "varchar(15)")]
        public string Phone { get; set; }
        public string Location { get; set; }
        public string Name { get; set; }
    }
}
