using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class AddClinicVisits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ClinicVisits",
                columns: table => new
                {
                    VisitId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Sin = table.Column<int>(type: "INTEGER", nullable: false),
                    Date = table.Column<string>(type: "varchar(10)", nullable: false),
                    ClinicName = table.Column<string>(type: "TEXT", nullable: true),
                    Physician = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClinicVisits", x => x.VisitId);
                });

            migrationBuilder.CreateTable(
                name: "Work_Fors",
                columns: table => new
                {
                    DoctorId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Location = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Work_Fors", x => x.DoctorId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClinicVisits");

            migrationBuilder.DropTable(
                name: "Work_Fors");
        }
    }
}
