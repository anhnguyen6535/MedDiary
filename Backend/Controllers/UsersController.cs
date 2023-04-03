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
    public class UsersController : ControllerBase
    {
        private readonly GeneralContext _context;
        private readonly DoctorsController _doctorsController;

        public UsersController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET: api/Users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // Post: api/Users
        [HttpPost("Login")]
        public IActionResult CheckUser(UserLogInDTO user)
        {
            var temp = _context.Users
               .Where(x => x.Email == user.Email
               && x.Password == user.Password && x.IsDoctor == user.IsDoctor).FirstOrDefault();

            if (temp == null)
            {
                return NotFound("User does not exist.");
            }

            return Ok(user);
        }

        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Sin)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Doctor")]
        public async Task<ActionResult<User>> PostDoctorUser(DoctorRegisterDTO register)
        {
            if(UserExists(register.User.Sin) || DoctorExists(register.Doctor.PracId)){
                return BadRequest("User exists");
            }
 
            _context.Users.Add(register.User);
            await _context.SaveChangesAsync();

            _context.Doctors.Add(register.Doctor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = register.User.Sin }, register.User);
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Adult")]
        public async Task<ActionResult<User>> PostAdultPatientUser(AdultRegisterDTO register)
        {
            if (UserExists(register.User.Sin) || PatientExists(register.Patient.Sin))
            {
                return BadRequest("User exists");
            }

            _context.Users.Add(register.User);
            await _context.SaveChangesAsync();

            _context.Patients.Add(register.Patient);
            await _context.SaveChangesAsync();

            _context.Insurances.Add(register.Insurance);
            await _context.SaveChangesAsync();

            _context.EmergencyContacts.Add(register.EmergencyContact);
            await _context.SaveChangesAsync();

            _context.Adults.Add(register.Adult);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = register.User.Sin }, register.User);
        }

        // POST: api/Users
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Minor")]
        public async Task<ActionResult<User>> PostMinorPatientUser(MinorRegisterDTO register)
        {
            if (UserExists(register.User.Sin) || PatientExists(register.Patient.Sin))
            {
                return BadRequest("User exists");
            }

            _context.Users.Add(register.User);
            await _context.SaveChangesAsync();

            _context.Patients.Add(register.Patient);
            await _context.SaveChangesAsync();

            _context.Insurances.Add(register.Insurance);
            await _context.SaveChangesAsync();

            _context.EmergencyContacts.Add(register.EmergencyContact);
            await _context.SaveChangesAsync();

            _context.Minors.Add(register.Minor);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = register.User.Sin }, register.User);
        }

        // DELETE: api/Users/5
        [HttpDelete("id")]
        public async Task<IActionResult> DeleteUser(int sin)
        {
            var user = await _context.Users.FindAsync(sin);
            if (user == null)
            {
                return NotFound();
            }
            else
            {
                if (user.IsDoctor)
                {
                    var doctor = await _context.Doctors.FindAsync(sin);
                    if (doctor == null) return NotFound();
                    else
                    {
                        _context.Doctors.Remove(doctor);
                        await _context.SaveChangesAsync();
                    } 
                }
                else  // user is patient
                {
                    var patient = await _context.Patients.FindAsync(sin);
                    if (patient == null) return NotFound();
                    else
                    {
                        DeletePatientTuple(patient);
                    }
                }
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }

            

            return NoContent();
        }

        private async void DeletePatientTuple(Patient patient)
        {
            if (patient.IsMinor)
            {
                var minor = await _context.Minors.FindAsync(patient.Sin);
                if (minor != null)
                {
                    _context.Minors.Remove(minor);                                      // Delete from Minor
                    await _context.SaveChangesAsync();
                }
            }
            else
            {
                var adult = await _context.Adults.FindAsync(patient.Sin);
                if(adult != null)
                {
                    _context.Adults.Remove(adult);                                      // Delete from Adult
                    await _context.SaveChangesAsync();
                }
            }
            _context.Patients.Remove(patient);                                      // Delete Patient
            await _context.SaveChangesAsync();

            var insurance = await _context.Insurances.FindAsync(patient.Sin);       // Delete Insurance
            if(insurance != null)
            {
                _context.Insurances.Remove(insurance);
                await _context.SaveChangesAsync();
            }

            var emergency = await _context.EmergencyContacts.FindAsync(patient.Sin);    // Delete Emergency
            if(emergency != null)
            {
                _context.EmergencyContacts.Remove(emergency);
                await _context.SaveChangesAsync();
            }


        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Sin == id);
        }

        private bool DoctorExists(int id)
        {
            return _context.Doctors.Any(e => e.PracId == id);
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.Sin == id);
        }
    }
}
