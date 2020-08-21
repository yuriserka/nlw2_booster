package com.example.demo.dtos;

import com.example.demo.models.Lesson;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LessonDTO {
  String subject;
  String description;
  Double price;

  public Lesson build() {
    return new Lesson().setSubject(subject).setDescription(description).setPrice(price);
  }
}
