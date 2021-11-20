using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PrimeHiringProj.Models
{
    public class PrimeHiringDBContext:DbContext
    {
        public PrimeHiringDBContext(DbContextOptions<PrimeHiringDBContext> options):base(options)
        {

        }
        public DbSet<Candidate> Candidates { get; set; }

        public DbSet<DevTeam> DevTeams { get; set; }
    }
}
