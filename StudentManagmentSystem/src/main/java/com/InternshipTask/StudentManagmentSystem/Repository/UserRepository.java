package com.InternshipTask.StudentManagmentSystem.Repository;

import com.InternshipTask.StudentManagmentSystem.Models.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserModel,Integer> {
    Optional<UserModel> findByUsername(String username);
}
