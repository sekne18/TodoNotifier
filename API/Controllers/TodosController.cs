using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{

    [ApiController]
    [Route("api/[controller]")]
    public class TodosController : ControllerBase
    {
        private readonly DataContext _context;
        public TodosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todo>>> GetTasks()
        {
            return await _context.Todos.ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetTasks(int  id)
        {
            return await _context.Todos.FindAsync(id);
        }

        


    }
}