using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PrimeHiringProj.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrimeHiringProj.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DevTeamController : ControllerBase
    {
        private readonly PrimeHiringDBContext _context;

        public DevTeamController(PrimeHiringDBContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DevTeam>>> GetDevTeams()
        {
            return await _context.DevTeams.ToListAsync();
        }

        // POST api/<ValuesController>
        [HttpPost]
        public async Task<ActionResult<DevTeam>> PostDevTeam(DevTeam devTeam)
        {
            _context.DevTeams.Add(devTeam);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDevTeam", new { id = devTeam.id }, devTeam);
        }
        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDevTeam(int id, DevTeam devTeam)
        {
            devTeam.id = id;

            _context.Entry(devTeam).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevTeamExists(id))
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

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<DevTeam>> DeleteDevTeam(int id)
        {
            var devTeam = await _context.DevTeams.FindAsync(id);
            if (devTeam == null)
            {
                return NotFound();
            }

            _context.DevTeams.Remove(devTeam);
            await _context.SaveChangesAsync();

            return devTeam;
        }

        private bool DevTeamExists(int id)
        {
            return _context.DevTeams.Any(e => e.id == id);
        }
    }
}
