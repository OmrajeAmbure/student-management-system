package com.InternshipTask.StudentManagmentSystem.Service;

import com.InternshipTask.StudentManagmentSystem.Models.StudentModel;
import com.InternshipTask.StudentManagmentSystem.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    public StudentRepository repository;
    public StudentModel saveStudent(StudentModel studentModel){
        return repository.save(studentModel);
    }
    public List<StudentModel> getStudentList() {
        return repository.findAll();
    }
    public void updateCourse(int id, String newCourse) {
        StudentModel studentModel =  repository.findById(id)
                .orElseThrow(()-> new RuntimeException("Student Not Found...!"));
        studentModel.setCourse(newCourse);
        repository.save(studentModel);
    }
    public void deleteStudent(int id) {
        repository.deleteById(id);
    }
}
