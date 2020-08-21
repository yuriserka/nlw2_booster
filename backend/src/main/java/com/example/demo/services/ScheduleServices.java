package com.example.demo.services;

import java.util.List;

import com.example.demo.dtos.ScheduleDTO;
import com.example.demo.models.Lesson;
import com.example.demo.models.Schedule;
import com.example.demo.repository.ScheduleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ScheduleServices {

  @Autowired
  private ScheduleRepository repository;

  public List<Schedule> findAll() {
    return repository.findAll();
  }

  public Schedule findOne(final Long id) throws Exception {
    return repository.findById(id).orElseThrow(() -> new Exception("schedule not found"));
  }

  public Schedule saveOne(final ScheduleDTO dto, final Lesson lesson) {
    var schedule = dto.build();
    lesson.addSchedule(schedule);
    return repository.save(schedule);
  }

  public void deleteOne(final Long id) {
    repository.deleteById(id);
  }
}