namespace Backend.Models
{
    public class TodoDTO
    {
        public int TodoId { get; set; }
        public string Name { get; set; }
        public bool IsComplete { get; set; }
        public string Description { get; set; }
    }
}
