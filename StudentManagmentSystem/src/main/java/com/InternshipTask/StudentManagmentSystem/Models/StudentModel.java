package com.InternshipTask.StudentManagmentSystem.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "student")
public class StudentModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String email;
    String course;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    LocalDate dateOfJoining;
    public StudentModel(){}
    public StudentModel(int id,String name,String email,String course,LocalDate dateOfJoining){
        this.id = id;
        this.name = name;
        this.email = email;
        this.course = course;
        this.dateOfJoining = dateOfJoining;
    }
    public void setId(int id){
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setCourse(String course){
        this.course = course;
    }
    public void setDateOfJoining(LocalDate dateOfJoining){
        this.dateOfJoining = dateOfJoining;
    }
    public int getId(){
        return this.id;
    }
    public String getName() {
        return this.name;
    }
    public String getEmail(){
        return this.email;
    }
    public String getCourse(){
        return this.course;
    }
    public LocalDate getDateOfJoining() {
        return dateOfJoining;
    }
}
