package com.moisanx.work.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moisanx.work.entity.Student;
import com.moisanx.work.exception.StudentEmailAlreadyExists;
import com.moisanx.work.exception.StudentNotFound;
import com.moisanx.work.repository.StudentRepository;
import com.moisanx.work.service.interfaces.IStudentService;

@Service
public class StudentService implements IStudentService {

  @Autowired
  private StudentRepository studentRepository;

  @Override
  public Student addStudent(Student student) {

    this.studentRepository.findByEmail(student.getEmail()).ifPresent((u) -> {

      throw new StudentEmailAlreadyExists();
    });

    return this.studentRepository.save(student);
  }

  @Override
  public List<Student> getStudents() {
    return studentRepository.findAll();
  }

  @Override
  public Student updateStudent(Student student, UUID id) {

    return studentRepository.findById(id).map(studentM -> {
      studentM.setFirstName(student.getFirstName());
      studentM.setLastName(student.getLastName());
      studentM.setEmail(student.getEmail());
      studentM.setDepartament(student.getDepartament());
      return studentRepository.save(studentM);

    }).orElseThrow(() -> new StudentNotFound());
  }

  @Override
  public Student getStudentById(UUID id) {
    return studentRepository.findById(id).orElseThrow(() -> new StudentNotFound());
  }

  @Override
  public boolean deleteStudent(UUID id) {

    Optional<Student> student = studentRepository.findById(id);
    if (student.isEmpty()) {
     return false;
    } else {
      studentRepository.deleteById(id);
      return true;
    }

  }
}