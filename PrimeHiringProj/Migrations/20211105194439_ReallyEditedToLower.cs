using Microsoft.EntityFrameworkCore.Migrations;

namespace PrimeHiringProj.Migrations
{
    public partial class ReallyEditedToLower : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Hired",
                table: "Candidates",
                newName: "hired");

            migrationBuilder.RenameColumn(
                name: "DateHired",
                table: "Candidates",
                newName: "dateHired");

            migrationBuilder.RenameColumn(
                name: "DateDeparture",
                table: "Candidates",
                newName: "dateDeparture");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "hired",
                table: "Candidates",
                newName: "Hired");

            migrationBuilder.RenameColumn(
                name: "dateHired",
                table: "Candidates",
                newName: "DateHired");

            migrationBuilder.RenameColumn(
                name: "dateDeparture",
                table: "Candidates",
                newName: "DateDeparture");
        }
    }
}
