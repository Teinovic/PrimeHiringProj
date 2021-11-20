using Microsoft.EntityFrameworkCore.Migrations;

namespace PrimeHiringProj.Migrations
{
    public partial class ModelFieldsStrings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AlterColumn<string>(
                name: "yearsOfExperience",
                table: "Candidates",
                type: "nvarchar(2)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "profilePicture",
                table: "Candidates",
                type: "nvarchar(200)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "pricePerHour",
                table: "Candidates",
                type: "nvarchar(4)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "mobile",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "linkedIn",
                table: "Candidates",
                type: "nvarchar(200)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "yearsOfExperience",
                table: "Candidates",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(2)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "profilePicture",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "pricePerHour",
                table: "Candidates",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(4)",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "mobile",
                table: "Candidates",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(100)",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "linkedIn",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dateDeparture",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "dateHired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "hired",
                table: "Candidates",
                type: "nvarchar(100)",
                nullable: true);
        }
    }
}
