using System.ComponentModel.DataAnnotations;

namespace Backend.Models

{
    public class TodoList
    {
        [Key]
        public int TodoId { get; set; }
        [Required]
        public int Sin { get; set; }
        public string Name{ get; set; }
        public bool IsComplete { get; set; }
        public string Description { get; set; }
    }
}
