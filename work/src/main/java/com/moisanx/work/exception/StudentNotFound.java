package com.moisanx.work.exception;

public class StudentNotFound extends RuntimeException {
  
  public StudentNotFound(){
    super("Estudante não localizado");
  }
}
