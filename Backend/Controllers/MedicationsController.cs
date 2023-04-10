using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicationsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public MedicationsController(GeneralContext context)
        {
            _context = context;
        }


        // GET: api/Medications/id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Medication>>> GetPatientMedications(int id)
        {
            var medications = await _context.Medications.Where(x => x.PatientId == id).ToListAsync();

            if (medications == null)
            {
                return NotFound();
            }

            return medications;
        }

        // POST: api/Medications/date
        [HttpPost("Date")]
        public async Task<ActionResult<IEnumerable<Medication>>> GetMedicationByDate(MedByDateDTO dto)
        {
            var medications = await _context.Medications.Where(x => x.Date == dto.Date && x.PatientId == dto.PatientSin).ToListAsync();

            if (medications == null)
            {
                return NotFound();
            }

            return medications;
        }
    }
}