using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;
using Microsoft.CodeAnalysis;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Work_ForController : ControllerBase
    {
        private readonly GeneralContext _context;

        public Work_ForController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/Work_For
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Work_For>>> GetWork_Fors()
        {
            return await _context.Work_Fors.ToListAsync();
        }

        // GET: api/Work_For/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Work_For>> GetWork_For(int id)
        {
            var work_For = await _context.Work_Fors.FindAsync(id);

            if (work_For == null)
            {
                return NotFound();
            }

            return work_For;
        }

        // PUT: api/Work_For/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutWork_For(int id, Work_For work_For)
        {
            //Checks if ID is the same
            if (id != work_For.DoctorId)
            {
                return BadRequest();
            }
            // Check for Valid Clinic Name
            var temp = _context.Clinics.Where(x => x.Phone == work_For.Phone).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }

            _context.Entry(work_For).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Work_ForExists(id))
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

        // POST: api/Work_For
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Work_For>> PostWork_For(Work_For work_For)
        {
            // Check for Valid Clinic Name
            var temp = _context.Clinics.Where(x => x.Phone == work_For.Phone).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }
            // Check if ID is a DoctorID
            var temp2 = _context.Doctors.Where(x => x.Sin == work_For.DoctorId).FirstOrDefault();
            if (temp2 == null)
            {
                return BadRequest();
            }
            _context.Work_Fors.Add(work_For);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetWork_For", new { id = work_For.DoctorId }, work_For);
        }

        // DELETE: api/Work_For/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteWork_For(int id)
        {
            var work_For = await _context.Work_Fors.FindAsync(id);
            if (work_For == null)
            {
                return NotFound();
            }

            _context.Work_Fors.Remove(work_For);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool Work_ForExists(int id)
        {
            return _context.Work_Fors.Any(e => e.DoctorId == id);
        }
    }
}
