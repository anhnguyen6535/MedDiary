using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models;
using Learning.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public TodoListsController(GeneralContext context)
        {
            _context = context;
        }

        // GET: api/TodoLists
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoList>>> GetTodoLists()
        {
            return await _context.TodoLists.ToListAsync();
        }

        // GET: api/TodoLists/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<TodoDTO>>> GetPatientTodoLists(int id)
        {
            var todoLists = await _context.TodoLists.Where(x => x.Sin == id).ToListAsync();

            if (todoLists == null)
            {
                return NotFound();
            }

            var dto = todoLists.Select((x) => ConvertToDTO(x)).ToList();

            return dto;
        }

        // PUT: api/TodoLists/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{sin}")]
        public async Task<IActionResult> PutTodoList(int sin, TodoDTO dto)
        {
            var todoList = ConvertToTodoList(dto, sin);
            _context.Entry(todoList).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoListExists(dto.TodoId, sin))
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

        // POST: api/TodoLists
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoList>> PostTodoList(TodoList todoList)
        {
            var temp = _context.Users.Where(x => x.Sin == todoList.Sin).FirstOrDefault();
            if (temp == null)
            {
                return BadRequest();
            }

            _context.TodoLists.Add(todoList);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDiagnoses", new { id = todoList.Sin }, todoList);
        }

        private bool TodoListExists(int id, int sin)
        {
            return _context.TodoLists.Any(e => e.TodoId == id && e.Sin == sin);
        }

        private TodoDTO ConvertToDTO(TodoList todoList)
        {
            TodoDTO dto = new()
            {
                TodoId = todoList.TodoId,
                Name = todoList.Name,
                IsComplete = todoList.IsComplete,
                Description = todoList.Description
            };
            return dto;
        }
    
        private TodoList ConvertToTodoList(TodoDTO dto, int sin)
        {
            TodoList todoList = new()
            {
                Sin = sin,
                TodoId = dto.TodoId,
                Name = dto.Name,
                Description = dto.Description,
                IsComplete = dto.IsComplete,
            };
            return todoList;
        }
}
}
