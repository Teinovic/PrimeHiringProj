using Microsoft.EntityFrameworkCore.Migrations;

namespace PrimeHiringProj.Migrations
{
    public partial class EditedMig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "Hired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(bool),
                oldType: "bit");

            migrationBuilder.AlterColumn<string>(
                name: "DateHired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");

            migrationBuilder.AlterColumn<string>(
                name: "DateDeparture",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<bool>(
                name: "hired",
                table: "Candidates",
                type: "bit",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "dateHired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "dateDeparture",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }
    }
}
