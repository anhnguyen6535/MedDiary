
using Backend.Models.DTO;

namespace Backend.Models
{
    public class ClinicVisitFormDTO
    {
        public ClinicVisitDTO clinicVisit { get; set; }
        #nullable enable
        public MedicationDTO[]? medications { get; set; }

        #nullable enable
        public TodoDTOCreate[]? todoList { get; set; }
    }
}
