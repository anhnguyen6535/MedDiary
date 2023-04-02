﻿// <auto-generated />
using Learning.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(GeneralContext))]
    partial class GeneralContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.2");

            modelBuilder.Entity("Backend.Models.Appointment", b =>
                {
                    b.Property<int>("AppointmentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<int>("DoctorId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsAttended")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsCancel")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PatientId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("PatientPhone")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("Time")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.HasKey("AppointmentId");

                    b.ToTable("Appointments");
                });

            modelBuilder.Entity("Backend.Models.Clinic", b =>
                {
                    b.Property<string>("Phone")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("Location")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Phone");

                    b.ToTable("Clinics");
                });

            modelBuilder.Entity("Backend.Models.Diagnosis", b =>
                {
                    b.Property<int>("Diagnosis_Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<int>("Doctor_Id")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Patient_Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Type")
                        .HasColumnType("TEXT");

                    b.HasKey("Diagnosis_Id");

                    b.ToTable("Diagnoses");
                });

            modelBuilder.Entity("Backend.Models.Doctor", b =>
                {
                    b.Property<int>("Sin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("PracId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Sin");

                    b.ToTable("Doctors");
                });

            modelBuilder.Entity("Backend.Models.EmergencyContact", b =>
                {
                    b.Property<int>("Sin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<long>("Phone")
                        .HasColumnType("varchar(15)");

                    b.HasKey("Sin");

                    b.ToTable("EmergencyContacts");
                });

            modelBuilder.Entity("Backend.Models.Insurance", b =>
                {
                    b.Property<int>("Sin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Iname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Inumber")
                        .HasColumnType("INTEGER");

                    b.HasKey("Sin");

                    b.ToTable("Insurances");
                });

            modelBuilder.Entity("Backend.Models.Medication", b =>
                {
                    b.Property<int>("MedId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Date")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Dosage")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Duration")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<int>("PatientId")
                        .HasColumnType("INTEGER");

                    b.HasKey("MedId");

                    b.ToTable("Medications");
                });

            modelBuilder.Entity("Backend.Models.Patient", b =>
                {
                    b.Property<int>("Sin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<long>("HealthId")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsMinor")
                        .HasColumnType("INTEGER");

                    b.HasKey("Sin");

                    b.ToTable("Patients");
                });

            modelBuilder.Entity("Backend.Models.TodoList", b =>
                {
                    b.Property<int>("TodoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<int>("IsComplete")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("Sin")
                        .HasColumnType("INTEGER");

                    b.HasKey("TodoId");

                    b.ToTable("TodoLists");
                });

            modelBuilder.Entity("Backend.Models.User", b =>
                {
                    b.Property<int>("Sin")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Address")
                        .HasColumnType("TEXT");

                    b.Property<string>("Dob")
                        .IsRequired()
                        .HasColumnType("varchar(10)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Fname")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<bool>("IsDoctor")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Lname")
                        .IsRequired()
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Phone")
                        .HasColumnType("varchar(15)");

                    b.Property<string>("Sex")
                        .HasColumnType("TEXT");

                    b.HasKey("Sin");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
