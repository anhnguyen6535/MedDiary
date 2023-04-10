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


    }
}