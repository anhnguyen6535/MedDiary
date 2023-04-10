using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;
using Microsoft.Win32;
using Backend.Models.DTO;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicVisitsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public ClinicVisitsController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/ClinicVisits
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetClinicVisit()
        {
            return await _context.ClinicVisits.ToListAsync();
        }

        // GET: api/ClinicVisits/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ClinicVisit>> GetClinicVisit(int id)
        {
            var clinicVisit = await _context.ClinicVisits.FindAsync(id);

            if (clinicVisit == null)
            {
                return NotFound();
            }

            return clinicVisit;
        }

        // Gets Patient ClinicVisit Log
        // GET: api/ClinicVisits
        [HttpGet("patient")]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetPatientClinicVisits(int patientid)
        {
            return await _context.ClinicVisits.Where(x => x.Sin == patientid).ToListAsync();
        }
        // Gets Doctor ClinicVisit Log
        // GET: api/ClinicVisits
        [HttpGet("doctor")]
        public async Task<ActionResult<IEnumerable<ClinicVisit>>> GetDoctorClinicVisits(string physician)
        {
            return await _context.ClinicVisits.Where(x => x.Physician == physician).ToListAsync();
        }


        // PUT: api/ClinicVisits/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClinicVisit(int id, ClinicVisit clinicVisit)
        {
            if (id != clinicVisit.VisitId)
            {
                return BadRequest();
            }

            _context.Entry(clinicVisit).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClinicVisitExists(id))
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
        // Post ClinicVisit Form
        // POST: api/ClinicVisits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("Form")]
        public async Task<ActionResult<ClinicVisit>> PostClinicVisitForm(ClinicVisitFormDTO visitForm)
        {
            var clinicVisitDTO = visitForm.clinicVisit;
            if (!UserExists(clinicVisitDTO.PatientSin) && !PatientExists(clinicVisitDTO.PatientSin) && !DoctorExists(clinicVisitDTO.DoctorSin))
            {
                return BadRequest("User does not exist");
            }
            var clinicVisit = await DTOToClinicVisit(clinicVisitDTO);

            _context.ClinicVisits.Add(clinicVisit);

            if(visitForm.medications != null)
            {
                AddMedList(visitForm.medications, clinicVisitDTO.PatientSin);
            }

            if(visitForm.todoList != null)
            {
                AddTodoList(visitForm.todoList, clinicVisitDTO.PatientSin);
            }

            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinicVisit", new { id = clinicVisit.VisitId }, visitForm);
        }

        // POST: api/ClinicVisits
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ClinicVisit>> PostClinicVisit(ClinicVisit clinicVisit)
        {
            _context.ClinicVisits.Add(clinicVisit);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetClinicVisit", new { id = clinicVisit.VisitId }, clinicVisit);
        }

        // DELETE: api/ClinicVisits/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClinicVisit(int id)
        {
            var clinicVisit = await _context.ClinicVisits.FindAsync(id);
            if (clinicVisit == null)
            {
                return NotFound();
            }

            _context.ClinicVisits.Remove(clinicVisit);
            await _context.SaveChangesAsync();

            return NoContent();
        }
        
        private async Task<ClinicVisit> DTOToClinicVisit(ClinicVisitDTO dto)
        {
            var clinicName = await GetClinicName(dto.DoctorSin);
            var drName = await GetDrName(dto.DoctorSin);

            ClinicVisit clinicVisit = new()
            {
                Diagnosis = dto.Diagnosis,
                Sin = dto.PatientSin,
                Date = getCurDate(),
                ClinicName = clinicName.ToString(),
                Physician = drName.ToString(),
                VisitId = generateClinicId(),
            };
            return clinicVisit;
        }

        private int generateClinicId()
        {
            Random rnd = new();
            int randInt = 0;
            while(randInt <= 0 || ClinicVisitExists(randInt))
            {
                randInt = rnd.Next();
            }
            return randInt;
        }

        private async Task<string> GetClinicName(int id)
        {
            Doctor doctor = await _context.Doctors.FindAsync(id);

            return doctor.ClinicName;
        }

        private async Task<string> GetDrName(int id)
        {
            User user = await _context.Users.FindAsync(id);

            return user.Fname;
        }

        private void AddMedList(MedicationDTO[] list, int patientSin)
        {
            for (int i = 0; i < list.Length; i++)
            {
                Medication med = DTOToMedication(list[i], patientSin);
                _context.Medications.Add(med);
            }
        }

        private Medication DTOToMedication(MedicationDTO dto, int patientSin)
        {
            Random rnd = new();
            int randInt = 0;
            while (randInt <= 0 || MedicationExists(randInt))
            {
                randInt = rnd.Next();
            }

            Medication medication = new()
            {
                Date = getCurDate(),
                MedId = randInt,
                Name = dto.Name,
                Dosage = dto.Dosage,
                Duration = dto.Duration,
                PatientId = patientSin,
            };
            return medication;
        }

        private void AddTodoList(TodoDTOCreate[] list, int patientSin)
        {
            for (int i = 0; i < list.Length; i++)
            {
                TodoList todo = DTOToTodoList(list[i], patientSin);
                _context.TodoLists.Add(todo);
            }
        }

        private TodoList DTOToTodoList(TodoDTOCreate dto, int patientSin)
        {
            Random rnd = new();
            int randInt = 0;
            while (randInt <= 0 || TodoListExists(randInt))
            {
                randInt = rnd.Next();
            }

            TodoList todo = new()
            {
                TodoId = randInt,
                Sin = patientSin,
                IsComplete = false,
                Name = dto.Name,
                Description = dto.Description,
            };
            return todo;
        }

        private bool ClinicVisitExists(int id)
        {
            return _context.ClinicVisits.Any(e => e.VisitId == id);
        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Sin == id);
        }

        private bool DoctorExists(int sin)

        {
            return _context.Doctors.Any(x => x.Sin == sin);
        }

        private bool PatientExists(int id)
        {
            return _context.Patients.Any(e => e.Sin == id);
        }

        private bool ClinicExists(string name)
        {
            return _context.Clinics.Any(e => e.Name == name);
        }

        private bool MedicationExists(int id)
        {
            return _context.Medications.Any(e => e.MedId == id);
        }
        private string getCurDate()
        {
            return DateTime.Now.ToString("dd/MM/yyyy");
        }

        private bool TodoListExists(int id)
        {
            return _context.TodoLists.Any(e => e.TodoId == id);
        }
    }
}
