package com.example.Parcial.Controller;

import com.example.Parcial.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<Student>getAll(){
        return userService.getStudent();
    }

    @GetMapping("/{studentId}")
    public Optional<Student> getBId(@PathVariable("studentId")Long studentId){
        return userService.getStudent(studentId);
    }

    @PostMapping
    public void saveOrUpdate(@RequestBody Student student){
        userService.saveOrUpdate(student);
    }
    @DeleteMapping("{studentId}")
    public void saveOrUpdate(@PathVariable ("studentId")Long studentId){
        userService.delete(studentId);
    }
}