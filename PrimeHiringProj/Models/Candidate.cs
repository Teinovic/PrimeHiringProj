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
        public int mobile { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string location { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string profilePicture { get; set; }
        public int pricePerHour { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string technology { get; set; }

        [Column(TypeName = "nvarchar(300)")]
        public string description { get; set; }
        public int yearsOfExperience { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string nativeLanguage { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string linkedIn { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string hired { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string dateHired { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string dateDeparture { get; set; }
    }
}
