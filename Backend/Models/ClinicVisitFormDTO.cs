
namespace Backend.Models
{
    public class ClinicVisitFormDTO
    {
        public ClinicVisit clinicVisit { get; set; }
        public Medication medication { get; set; }
        public TodoList todoList { get; set; }
    }
}
