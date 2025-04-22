package com.example.Parcial.Service;


import com.example.Parcial.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserService extends JpaRepository<User, Long> {

}
