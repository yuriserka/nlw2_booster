package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Accessors(chain = true)
@Entity
@Table(name = "lessons")
public class Lesson {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  String subject;

  String description;

  Double price;

  @ManyToOne(cascade = CascadeType.ALL)
  User user;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
  List<Schedule> schedules = new ArrayList<>();

  public void addSchedule(final Schedule schedule) {
    this.schedules.add(schedule);
    schedule.setLesson(this);
  }

  public void removeSchedule(final Schedule schedule) {
    schedules.remove(schedule);
    schedule.setLesson(null);
  }
}
