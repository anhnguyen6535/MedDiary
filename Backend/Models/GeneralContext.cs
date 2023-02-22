using Microsoft.EntityFrameworkCore;

namespace Learning.Models
{
    public class GeneralContext : DbContext
    {
        public GeneralContext(DbContextOptions<GeneralContext> options)
        : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; } = null!;
        public DbSet<Person> Persons { get; set; } = null!;
    }
}
