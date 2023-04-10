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
    }
}
