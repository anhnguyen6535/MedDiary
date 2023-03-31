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
        public class InsurancesController : ControllerBase
        {


            private readonly GeneralContext _context;

            public InsurancesController(GeneralContext context)
            {
                _context = context;
            }


        // GET: api/Insurances/id
        [HttpGet("{id}")]
            public async Task<ActionResult<IEnumerable<Insurance>>> GetInsurance(int id)
            {
                var insurances = await _context.Insurances.Where(x => x.UserId == id).ToListAsync();

                if (insurances == null)
                {
                    return NotFound();
                }

                return insurances;
            }


        //FIX ERROR RESPONSE 500
        // POST: api/Insurances
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
            public async Task<ActionResult<Insurance>> PostInsurance(Insurance insurance)

            {
                var temp = _context.Users.Where(x => x.UserId == insurance.UserId).FirstOrDefault();
                if (temp == null)
                {
                    return BadRequest();
                }

                _context.Insurances.Add(insurance);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetEmergancyContacts", new { id = insurance.UserId }, insurance);
            }

        // DELETE: api/Insurances/id
        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteInsurance(int id)
            {
                var insurance = await _context.Insurances.Where(x => x.UserId == id).ToListAsync();
                if (insurance == null)
                {
                    return NotFound();
                }

            _context.Insurances.Remove(insurance[0]);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool InsuranceExists(int id)
            {
                return _context.EmergancyContacts.Any(e => e.UserId == id);
            }
        }

   }
