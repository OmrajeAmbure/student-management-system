package com.InternshipTask.StudentManagmentSystem.Controller;

import com.InternshipTask.StudentManagmentSystem.Models.StudentModel;
import com.InternshipTask.StudentManagmentSystem.Service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    public StudentService service;
    @PostMapping("/register")
    public String GetStudentDetails(@RequestBody StudentModel studentModel){

        service.saveStudent(studentModel);
        return "Student Data Register Successfully";
    }
    @GetMapping("/list")
    public List<StudentModel> ShowStudent(){
        return service.getStudentList();
    }
    @PutMapping("/update-course/{id}")
    public String updateCourse(@PathVariable int id,@RequestBody String newCourse){
        service.updateCourse(id,newCourse);
        return "Course Update Successfully ";
    }
    @DeleteMapping("/delete-student/{id}")
    public String deleteStudent(@PathVariable int id){
        service.deleteStudent(id);
        return "Student Deleted Successfully";
    }

}
