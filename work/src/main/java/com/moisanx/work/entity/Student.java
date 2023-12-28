package com.moisanx.work.entity;

import java.util.UUID;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {
  

  @Id
   @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  private String firstName;
    private String lastName;
 private String email;
  private String departament;


}
