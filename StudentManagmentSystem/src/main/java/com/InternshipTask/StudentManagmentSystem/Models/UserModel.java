package com.InternshipTask.StudentManagmentSystem.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "UserTable")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;  // store hashed passwords with BCrypt

    @Column(nullable = false)
    private String role; // e.g. ROLE_USER, ROLE_ADMIN

    public UserModel() {}

    public UserModel(int id, String username, String password, String role) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    // --- Getters & Setters ---
    public int getId() {
        return this.id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return this.username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return this.role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
