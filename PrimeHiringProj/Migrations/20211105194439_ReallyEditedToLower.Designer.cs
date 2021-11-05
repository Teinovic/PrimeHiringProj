﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PrimeHiringProj.Models;

namespace PrimeHiringProj.Migrations
{
    [DbContext(typeof(PrimeHiringDBContext))]
    [Migration("20211105194439_ReallyEditedToLower")]
    partial class ReallyEditedToLower
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("PrimeHiringProj.Models.Candidate", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("dateDeparture")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("dateHired")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(300)");

                    b.Property<string>("fullName")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("hired")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("linkedIn")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("location")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("mobile")
                        .HasColumnType("int");

                    b.Property<string>("nativeLanguage")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("pricePerHour")
                        .HasColumnType("int");

                    b.Property<string>("profilePicture")
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("technology")
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("yearsOfExperience")
                        .HasColumnType("int");

                    b.HasKey("id");

                    b.ToTable("Candidates");
                });
#pragma warning restore 612, 618
        }
    }
}
