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
    public class EmergancyContactsController : ControllerBase
    {

        private readonly GeneralContext _context;

        public EmergancyContactsController(GeneralContext context)
        {
            _context = context;
        }


        // GET: api/EmergencyContacts/id
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<EmergencyContact>>> GetPatientEmergancyContacts(int id)
        {
            var emergencyContacts = await _context.EmergancyContacts.Where(x => x.UserId == id).ToListAsync();

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
        public async Task<ActionResult<EmergencyContact>> PostEmergancyContact(EmergencyContact emergencyContact)

        {
            var temp = _context.Users.Where(x => x.UserId == emergencyContact.UserId).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }

            _context.EmergancyContacts.Add(emergencyContact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEmergancyContacts", new { id = emergencyContact.UserId }, emergencyContact);
        }

        // DELETE: api/EmergencyContacts/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmergancyContact(int id, Int64 phone)
        {
            var emergencyContacts = await _context.EmergancyContacts.Where(x => x.UserId == id && x.Phone == phone).ToListAsync();
            if (emergencyContacts == null)
            {
                return NotFound();
            }

            _context.EmergancyContacts.Remove(emergencyContacts[0]);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EmergancyContactExists(int id, string name)
        {
            return _context.EmergancyContacts.Any(e => e.UserId == id) && _context.EmergancyContacts.Any(e => e.Name == name);
        }
    }

}