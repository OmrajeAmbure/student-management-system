package com.InternshipTask.StudentManagmentSystem.Repository;

import com.InternshipTask.StudentManagmentSystem.Models.StudentModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository  extends JpaRepository<StudentModel,Integer> {

}
