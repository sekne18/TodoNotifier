using System.Collections.Generic;
using System.Threading.Tasks;
using API.Data;
using API.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UsersController : BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<Todo>>> GetUsers()
        {
            return await _context.Todos.ToListAsync();
        }


        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<Todo>> GetUser(int  id)
        {
            return await _context.Todos.FindAsync(id);
        }

    }
}