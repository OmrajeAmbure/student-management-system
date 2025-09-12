package com.InternshipTask.StudentManagmentSystem.Service;

import com.InternshipTask.StudentManagmentSystem.Models.UserModel;
import com.InternshipTask.StudentManagmentSystem.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserModel user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getUsername())
                .password(user.getPassword()) // already encoded with BCrypt
                .roles(user.getRole()) // use "ADMIN" or "USER" in DB
                .build();
    }
}
