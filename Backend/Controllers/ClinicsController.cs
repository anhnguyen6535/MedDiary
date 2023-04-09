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
    public class ClinicsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public ClinicsController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/Clinics
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Clinic>>> GetClinics()
        {
            return await _context.Clinics.ToListAsync();
        }

        // GET: api/Clinics1/5
        [HttpGet("Phone")]
        public async Task<ActionResult<string>> GetClinic(string phone)
        {
            var clinic = await _context.Clinics.FindAsync(phone);

            if (clinic == null)
            {
                return NotFound();
            }

            return clinic.Name;
        }
        // POST: api/Clinics
        [HttpPost]
        public async Task<ActionResult<Clinic>> PostClinic(Clinic clinic)

        {
            var temp = _context.Clinics.Where(x => x.Phone == clinic.Phone).FirstOrDefault();
            if (temp != null)
            {
                return BadRequest();
            }

            _context.Clinics.Add(clinic);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinic", new {Phone = clinic.Phone }, clinic);
        }
        // DELETE: api/Clinics
        [HttpDelete]
        public async Task<IActionResult> DeleteClinic(string phone)
        {
            var clinic = await _context.Clinics.FindAsync(phone);
            if (clinic == null)
            {
                return NotFound();
            }

            _context.Clinics.Remove(clinic);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // PUT: api/Clinics
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutClinic(string phone, Clinic clinic)
        {
            
            if (!ClinicExists(phone))
            {
                return BadRequest();
            }

            _context.Entry(clinic).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                    throw;
            }

            return NoContent();
        }
        private bool ClinicExists(string phone)
        {
            return _context.Clinics.Any(e => e.Phone == phone);
        }
    }
}
