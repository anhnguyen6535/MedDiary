using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ModifyDiagnosis : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Diagnoses");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Diagnoses");

            migrationBuilder.RenameColumn(
                name: "Diagnosis_Id",
                table: "Diagnoses",
                newName: "VisitId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VisitId",
                table: "Diagnoses",
                newName: "Diagnosis_Id");

            migrationBuilder.AddColumn<string>(
                name: "Date",
                table: "Diagnoses",
                type: "varchar(10)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Diagnoses",
                type: "TEXT",
                nullable: true);
        }
    }
}
