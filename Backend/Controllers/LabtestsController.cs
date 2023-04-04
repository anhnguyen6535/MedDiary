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
    public class LabtestsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public LabtestsController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/Labtests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Labtest>>> GetLabtest()
        {
            return await _context.Labtest.ToListAsync();
        }

        // GET: api/Labtests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<Labtest>>> GetPatientLabtest(int id)
        {
            var labtests = await _context.Labtest.Where(x => x.PatientSin == id).ToListAsync();

            if (labtests == null)
            {
                return NotFound();
            }

            return labtests;
        }

        // GET: api/Labtests/date
        [HttpGet("Date")]
        public async Task<ActionResult<IEnumerable<Labtest>>> GetPatientLabtestByDate(string date)
        {
            var labtests = await _context.Labtest.Where(x => x.Date == date).ToListAsync();

            if (labtests == null)
            {
                return NotFound();
            }

            return labtests;
        }

        // PUT: api/Labtests/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLabtest(int id, Labtest labtest)
        {
            if (id != labtest.TestId)
            {
                return BadRequest();
            }

            _context.Entry(labtest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LabtestExists(id))
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

        // POST: api/Labtests
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Labtest>> PostLabtest(Labtest labtest)
        {
            _context.Labtest.Add(labtest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLabtest", new { id = labtest.TestId }, labtest);
        }

        // DELETE: api/Labtests/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLabtest(int id)
        {
            var labtest = await _context.Labtest.FindAsync(id);
            if (labtest == null)
            {
                return NotFound();
            }

            _context.Labtest.Remove(labtest);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LabtestExists(int id)
        {
            return _context.Labtest.Any(e => e.TestId == id);
        }
    }
}
