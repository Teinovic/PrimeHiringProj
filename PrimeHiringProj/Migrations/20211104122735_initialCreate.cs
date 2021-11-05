using Microsoft.EntityFrameworkCore.Migrations;

namespace PrimeHiringProj.Migrations
{
    public partial class initialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Candidates",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    fullName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    mobile = table.Column<int>(nullable: false),
                    location = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    profilePicture = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    pricePerHour = table.Column<int>(nullable: false),
                    technology = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    description = table.Column<string>(type: "nvarchar(300)", nullable: true),
                    yearsOfExperience = table.Column<int>(nullable: false),
                    nativeLanguage = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    linkedIn = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Candidates", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Candidates");
        }
    }
}
