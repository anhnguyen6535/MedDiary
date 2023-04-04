using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
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


        //FIX ERROR RESPONSE 500
        // POST: api/Medications
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Medication>> PostMedication(Medication medication)

        {
            var temp = _context.Users.Where(x => x.Sin == medication.PatientId).FirstOrDefault();
            if (temp == null){
                return BadRequest();
            }

            _context.Medications.Add(medication);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMedication", new {id = medication.MedId}, medication);
        }

        // DELETE: api/Medications/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedication(int id, int patientId, string name)
        {
            var medication = await _context.Medications.Where(x => x.MedId == id && x.PatientId == patientId && x.Name == name).ToListAsync();
            if (medication == null)
            {
                return NotFound();
            }

            _context.Medications.Remove(medication[0]);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MedicationExists(int id, string name)
        {
            return _context.Medications.Any(e => e.MedId == id) && _context.Medications.Any(e => e.Name == name);
        }
    }
}