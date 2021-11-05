using Microsoft.EntityFrameworkCore.Migrations;

namespace PrimeHiringProj.Migrations
{
    public partial class AddedToModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "dateDeparture",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "dateHired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<bool>(
                name: "hired",
                table: "Candidates",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "dateDeparture",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "dateHired",
                table: "Candidates");

            migrationBuilder.DropColumn(
                name: "hired",
                table: "Candidates");
        }
    }
}
