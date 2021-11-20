using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace PrimeHiringProj.Models
{
    public class Candidate
    {
        [Key]
        public int id { get; set; }

        [Column(TypeName="nvarchar(100)")]
        public string fullName { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string location { get; set; }
        
        [Column(TypeName = "nvarchar(200)")]
        public string profilePicture { get; set; }
        
        [Column(TypeName = "nvarchar(4)")]
        public string pricePerHour { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string technology { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string description { get; set; }

        [Column(TypeName = "nvarchar(2)")]
        public string yearsOfExperience { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string nativeLanguage { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string linkedIn { get; set; }
    }
}
