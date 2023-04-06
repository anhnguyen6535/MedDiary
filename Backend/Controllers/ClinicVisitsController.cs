using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;
using Microsoft.Win32;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicVisitsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public ClinicVisitsController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/ClinicVisits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetClinicVisit()
        {
            return await _context.ClinicVisits.ToListAsync();
        }

        // GET: api/ClinicVisits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClinicVisit>> GetClinicVisit(int id)
        {
            var clinicVisit = await _context.ClinicVisits.FindAsync(id);

            if (clinicVisit == null)
            {
                return NotFound();
            }

            return clinicVisit;
        }

        // Gets Patient ClinicVisit Log
        // GET: api/ClinicVisits
        [HttpGet("patient")]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetPatientClinicVisits(int patientid)
        {
            return await _context.ClinicVisits.Where(x => x.Sin == patientid).ToListAsync();
        }
        // Gets Doctor ClinicVisit Log
        // GET: api/ClinicVisits
        [HttpGet("doctor")]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetDoctorClinicVisits(string physician)
        {
            return await _context.ClinicVisits.Where(x => x.Physician == physician).ToListAsync();
        }


        // PUT: api/ClinicVisits/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClinicVisit(int id, ClinicVisit clinicVisit)
        {
            if (id != clinicVisit.VisitId)
            {
                return BadRequest();
            }

            _context.Entry(clinicVisit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicVisitExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        // Post ClinicVisit Form
        // POST: api/ClinicVisits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Form")]
        public async Task<ActionResult<ClinicVisit>> PostClinicVisitForm(ClinicVisitFormDTO visitForm)
        {
            if (!UserExists(visitForm.clinicVisit.Sin) && !PatientExists(visitForm.clinicVisit.Sin) && !DoctorExists(visitForm.clinicVisit.Physician))
            {
                return BadRequest("User exists");
            }
            var temp2 = _context.Clinics.Where(x => x.Name == visitForm.clinicVisit.ClinicName).FirstOrDefault();
            if (temp2 == null)
            {
                return BadRequest();
            }

            _context.ClinicVisits.Add(visitForm.clinicVisit);
            _context.Diagnoses.Add(visitForm.diagnosis);
            _context.Medications.Add(visitForm.medication);
            _context.TodoLists.Add(visitForm.todoList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinicVisit", new { id = visitForm.clinicVisit }, visitForm);
        }

        // POST: api/ClinicVisits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClinicVisit>> PostClinicVisit(ClinicVisit clinicVisit)
        {
            _context.ClinicVisits.Add(clinicVisit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinicVisit", new { id = clinicVisit.VisitId }, clinicVisit);
        }

        // DELETE: api/ClinicVisits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClinicVisit(int id)
        {
            var clinicVisit = await _context.ClinicVisits.FindAsync(id);
            if (clinicVisit == null)
            {
                return NotFound();
            }

            _context.ClinicVisits.Remove(clinicVisit);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ClinicVisitExists(int id)
        {
            return _context.ClinicVisits.Any(e => e.VisitId == id);
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Sin == id);
        }

        private bool DoctorExists(string physician)

        {
 
            return _context.Users.Any(x => "Dr." + x.Lname == physician && x.IsDoctor == true);
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.Sin == id);
        }
    }
}
