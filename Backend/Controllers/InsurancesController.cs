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
                var insurances = await _context.Insurances.Where(x => x.Sin == id).ToListAsync();

                if (insurances == null)
                {
                    return NotFound();
                }

                return insurances;
            }
        }

   }
