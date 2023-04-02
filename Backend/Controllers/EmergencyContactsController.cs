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
    public class EmergencyContactsController : ControllerBase
    {


        private readonly GeneralContext _context;

        public EmergencyContactsController(GeneralContext context)
        {
            _context = context;
        }


        // GET: api/EmergencyContacts/id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EmergencyContact>>> GetPatientEmergencyContacts(int id)
        {
            var emergencyContacts = await _context.EmergencyContacts.Where(x => x.Sin == id).ToListAsync();

            if (emergencyContacts == null)
            {
                return NotFound();
            }

            return emergencyContacts;
        }


        //FIX ERROR RESPONSE 500
        // POST: api/EmergencyContacts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EmergencyContact>> PostEmergencyContact(EmergencyContact emergencyContact)

        {
            var temp = _context.Users.Where(x => x.Sin == emergencyContact.Sin).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }

            _context.EmergencyContacts.Add(emergencyContact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmergencyContacts", new { id = emergencyContact.Sin }, emergencyContact);
        }

        // DELETE: api/EmergencyContacts/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmergencyContact(int id)
        {
            var emergencyContacts = await _context.EmergencyContacts.Where(x => x.Sin == id).ToListAsync();
            if (emergencyContacts == null)
            {
                return NotFound();
            }

            _context.EmergencyContacts.Remove(emergencyContacts[0]);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmergencyContactExists(int id)
        {
            return _context.EmergencyContacts.Any(e => e.Sin == id);
        }
    }

}