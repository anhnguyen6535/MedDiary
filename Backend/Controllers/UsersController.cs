using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;
using Microsoft.CodeAnalysis.VisualBasic.Syntax;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly GeneralContext _context;

        public UsersController(GeneralContext context)
        {
            _context = context;
        }
        // Gets all Users in Database
        // GET: api/Users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()

        {
            return await _context.Users.ToListAsync();
        }

        // Gets Selected User 
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

        // Check If User is in Database
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

            return Ok(temp);
        }
        // Saves Changes to User's Information
        // PUT: api/Users/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.UserId)
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
        // Creates New User
        // POST: api/Users 
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            _context.Users.Add(user);
            if (user.IsDoctor == false) {
                Patient patient = new Patient();
                patient.UserId = user.UserId;
                _context.Patients.Add(patient);
            }
            else{
                Doctor doctor = new Doctor();
                doctor.UserId = user.UserId;
                _context.Doctors.Add(doctor);
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.UserId }, user);
        }

        // Deletes User 
        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        // Check if User Exists
        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.UserId == id);
        }
    }
}
