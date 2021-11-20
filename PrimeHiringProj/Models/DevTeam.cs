using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PrimeHiringProj.Models
{
    public class DevTeam
    {
        
        [Key]
        public int id { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string TeamMembersNames { get; set; }
        
        [Column(TypeName = "nvarchar(1000)")]
        public string TeamMembersHireDates { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string TeamMembersLeaveDates { get; set; }
    }
}
