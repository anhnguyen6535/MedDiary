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
    public class DiagnosesController : ControllerBase
    {
        private readonly GeneralContext _context;

        public DiagnosesController(GeneralContext context)
        {
            _context = context;
        }


        // GET: api/Diagnoses/id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Diagnosis>>> GetPatientDiagnoses(int id)
        {
            var diagnoses = await _context.Diagnoses.Where(x => x.Patient_Id == id).ToListAsync();

            if (diagnoses == null)
            {
                return NotFound();
            }

            return diagnoses;
        }
        // GET: api/Diagnoses/
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Diagnosis>>> GetPatientDateDiagnoses(int id, string date)
        {
            var diagnoses = await _context.Diagnoses.Where(x => x.Date == date && x.Patient_Id == id).ToListAsync();

            if (diagnoses == null)
            {
                return NotFound();
            }

            return diagnoses;
        }

        // POST: api/Diagnoses
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Diagnosis>> PostDiagnoses(Diagnosis diagnosis)

        {
            var temp = _context.Users.Where(x => x.Sin == diagnosis.Patient_Id).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }

            _context.Diagnoses.Add(diagnosis);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDiagnoses", new { id = diagnosis.Patient_Id }, diagnosis);
        }

        // DELETE: api/Diagnoses/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDiagnosis(int id, string type)
        {
            var diagnosis = await _context.Diagnoses.Where(x => x.Patient_Id == id && x.Type == type).ToListAsync();
            if (diagnosis == null)
            {
                return NotFound();
            }

            _context.Diagnoses.Remove(diagnosis[0]);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DiagnosisExists(int id, string type)
        {
            return _context.Diagnoses.Any(e => e.Patient_Id == id) && _context.Diagnoses.Any(e => e.Type == type);
        }
    }

}