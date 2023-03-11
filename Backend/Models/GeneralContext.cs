using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Learning.Models
{
    public class GeneralContext : DbContext
    {
        public GeneralContext(DbContextOptions<GeneralContext> options)
        : base(options)
        {
        }

        // Adding models to context
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Doctor> Doctors { get; set; } = null!;
        public DbSet<Patient> Patients { get; set; } = null!;


        // THESE MODELS FOR TESTING WILL BE REMOVED
        public DbSet<TodoItem> TodoItems { get; set; } = null!;
        public DbSet<Person> Persons { get; set; } = null!;
        public DbSet<Question> Questions { get; set; } = null!;
        public DbSet<Participant> Participants { get; set; } = null!;

    }
}
