package com.moisanx.work.exception;

public class StudentEmailAlreadyExists extends RuntimeException {

  public StudentEmailAlreadyExists() {
    super("Email ja existe");
  }
}
