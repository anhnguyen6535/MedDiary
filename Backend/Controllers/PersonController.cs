using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Learning.Models;
using Microsoft.AspNetCore.JsonPatch;

namespace Learning.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : ControllerBase
    {
        private readonly GeneralContext _context;

        public PersonController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/People
        [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<PersonDTO>>> GetPersons()
        {
            return await _context.Persons.Select(x => PersonToDTO(x)).ToListAsync();
        }

        // GET: api/People/5
        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PersonDTO>> GetPerson(int id)
        {
            var person = await _context.Persons.FindAsync(id);

            if (person == null)
            {
                return NotFound();
            }

            return PersonToDTO(person);
        }

        // PUT: api/People/5
        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PutPerson(int id, PersonDTO person)
        {
            if (id != person.Id)
            {
                return BadRequest();
            }



            _context.Entry(DTOToPerson(person)).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
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

        // POST: api/People
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<PersonDTO>> PostPerson(PersonDTO person)
        {
            if (person == null) return BadRequest();   // Null input
            if (person.Id == 0) return BadRequest();

            if (!ModelState.IsValid) return BadRequest(ModelState);      // Check if key attributes are provided

            // Check if the person already exists
            var persons = await _context.Persons.FindAsync(person.Id);
            if (persons != null)
            {
                ModelState.AddModelError("CustomerError", "Person already exists");
                return BadRequest(ModelState);
            }

            // Add person
            _context.Persons.Add(DTOToPerson(person));
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPerson", new { id = person.Id }, person);
        }

        // DELETE: api/People/5
        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> DeletePerson(int id)
        {
            if(id == 0) return BadRequest();        //suppose id cant be 0

            var person = await _context.Persons.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _context.Persons.Remove(person);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // PATCH: api/People/5
        [HttpPatch("{id}", Name = "PartialUpdatePerson")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> PatchPerson(int id, JsonPatchDocument<Person> patchDTO)
        {
            if(patchDTO == null || id == 0)
            {
                return BadRequest();
            }

            var person = await _context.Persons.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            patchDTO.ApplyTo(person, ModelState);
            if(!ModelState.IsValid) return BadRequest();

            _context.Persons.Update(person);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PersonExists(int id)
        {
            return _context.Persons.Any(e => e.Id == id);
        }

        private static PersonDTO PersonToDTO(Person x) => new PersonDTO
        {
            Id = x.Id,
            FName = x.FName,
            LName = x.LName,
            Phone = x.Phone,
            Address = x.Address,
            Birthdate = x.Birthdate,
            Sex = x.Sex,
        };

        private static Person DTOToPerson(PersonDTO x) => new Person
        {
            Id = x.Id,
            FName = x.FName,
            LName = x.LName,
            Phone = x.Phone,
            Address = x.Address,
            Birthdate = x.Birthdate,
            Sex = x.Sex,
            IsActive = true,
        };
    }
}
