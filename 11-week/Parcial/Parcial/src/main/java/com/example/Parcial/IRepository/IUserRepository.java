package com.example.Parcial.IRepository;

import com.example.Parcial.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserRepository extends JpaRepository<User,Long> {
}
