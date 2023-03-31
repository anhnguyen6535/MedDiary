using System.ComponentModel.DataAnnotations;

namespace Backend.Models

{
    public class TodoList
    {
        [Key]
        public int TodoId { get; set; }
        public int UserId { get; set; }
        public string Name{ get; set; }
        public int IsComplete { get; set; }
        public string Description { get; set; }
    }
}
