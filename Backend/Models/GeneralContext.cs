﻿using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Learning.Models
{
    public class GeneralContext : DbContext
    {
        public GeneralContext(DbContextOptions<GeneralContext> options)
        : base(options)
        {
        }

        // Adding models to context
        public DbSet<User> Users { get; set; } = null!;
        public DbSet<Doctor> Doctors { get; set; } = null!;
        public DbSet<Patient> Patients { get; set; } = null!;
        public DbSet<Adult> Adults { get; set; } = null!;
        public DbSet<Minor> Minors { get; set; } = null!;
        public DbSet<Labtest> Labtests { get; set; } = null!;
        public DbSet<Appointment> Appointments { get; set; } = null!;
        public DbSet<Medication> Medications { get; set; } = null!;
        public DbSet<Clinic> Clinics { get; set; } = null!;
        public DbSet<Diagnosis> Diagnoses{ get; set; } = null!; 
        public DbSet<EmergencyContact> EmergencyContacts { get; set; } = null!;
        public DbSet<Insurance> Insurances { get; set; } = null!;
        public DbSet<TodoList> TodoLists { get; set; } = null!;
        public DbSet<Backend.Models.Labtest> Labtest { get; set; }
        public DbSet<Backend.Models.ClinicVisit> ClinicVisits { get; set; }
        public DbSet<Backend.Models.Work_For> Work_Fors { get; set; }
        // // THESE MODELS FOR TESTING WILL BE REMOVED

        // public DbSet<Person> Persons { get; set; } = null!;
        // public DbSet<Question> Questions { get; set; } = null!;
        // public DbSet<Participant> Participants { get; set; } = null!;

    }
}
