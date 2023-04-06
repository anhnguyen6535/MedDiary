using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateWorksFor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Location",
                table: "Work_Fors");

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "Work_Fors",
                type: "varchar(15)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Work_Fors");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "Work_Fors",
                type: "TEXT",
                nullable: true);
        }
    }
}
