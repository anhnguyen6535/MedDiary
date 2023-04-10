using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ModifyDiagnosis2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Doctor_Id",
                table: "Diagnoses");

            migrationBuilder.DropColumn(
                name: "Patient_Id",
                table: "Diagnoses");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Doctor_Id",
                table: "Diagnoses",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Patient_Id",
                table: "Diagnoses",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }
    }
}
