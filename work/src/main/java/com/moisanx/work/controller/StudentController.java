package com.moisanx.work.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.moisanx.work.entity.Student;
import com.moisanx.work.exception.StudentNotFound;
import com.moisanx.work.service.interfaces.IStudentService;

import lombok.AllArgsConstructor;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/student")
@AllArgsConstructor
public class StudentController {

  @Autowired
  private IStudentService iStudentService;

  @GetMapping("/")
  public ResponseEntity<Object> getStudents() {
    return new ResponseEntity<>(iStudentService.getStudents(), HttpStatus.FOUND);
  }

  @PostMapping("/")
  public Student addStudent(@RequestBody Student student) {
    return iStudentService.addStudent(student);
  }

  @PutMapping("/update/{id}")
  public Student updateStudent(@RequestBody Student student, @PathVariable UUID id) {

    return iStudentService.updateStudent(student, id);
  }

  @DeleteMapping("/delete/{id}")
  public ResponseEntity<Object> deleteStudent(@PathVariable UUID id) {
    boolean isDeleted = iStudentService.deleteStudent(id);

    if (isDeleted) {
      return ResponseEntity.ok("Student Deleted Success");
    } else {
      throw new StudentNotFound();
    }

  }

  @GetMapping("/student/{id}")
  public Student getStudentById(@PathVariable UUID id) {
    return iStudentService.getStudentById(id);
  }

}
