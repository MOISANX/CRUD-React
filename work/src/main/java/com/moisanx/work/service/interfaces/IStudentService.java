package com.moisanx.work.service.interfaces;

import java.util.List;
import java.util.UUID;

import com.moisanx.work.entity.Student;

public interface IStudentService {

  Student addStudent(Student student);

  List<Student> getStudents();

  Student updateStudent(Student student, UUID id);

  Student getStudentById(UUID id);

  boolean deleteStudent(UUID id);

}
