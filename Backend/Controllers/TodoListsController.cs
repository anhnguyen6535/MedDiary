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
    public class TodoListsController : ControllerBase
    {
        private readonly GeneralContext _context;

        public TodoListsController(GeneralContext context)
        {
            _context = context;
        }


        // GET: api/TodoLists/id
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


        //FIX ERROR RESPONSE 500
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

        // DELETE: api/TodoLists/id
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoList(int id, string name)
        {
            var diagnosis = await _context.TodoLists.Where(x => x.Sin == id && x.Name == name).ToListAsync();
            if (diagnosis == null)
            {
                return NotFound();
            }

            _context.TodoLists.Remove(diagnosis[0]);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DiagnosisExists(int id, string name)
        {
            return _context.TodoLists.Any(e => e.Sin == id) && _context.TodoLists.Any(e => e.Name == name);
        }

        private TodoDTO ConvertToDTO(TodoList todoList)
        {
            TodoDTO dto = new()
            {
                Name = todoList.Name,
                IsComplete = todoList.IsComplete,
                Description = todoList.Description
            };
            return dto;
        }
    }

}