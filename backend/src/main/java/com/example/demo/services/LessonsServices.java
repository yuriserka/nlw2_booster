package com.example.demo.services;

import java.util.List;

import com.example.demo.dtos.LessonDTO;
import com.example.demo.dtos.ScheduleDTO;
import com.example.demo.dtos.UserDTO;
import com.example.demo.models.Lesson;
import com.example.demo.models.User;
import com.example.demo.repository.LessonRepository;
import com.example.demo.utils.ConvertHourToMinutes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LessonsServices {

  @Autowired
  LessonRepository lessonRepository;

  @Autowired
  UsersServices usersService;

  @Autowired
  ScheduleServices scheduleService;

  public List<Lesson> findAll(int weekDay, String subject, String time) {
    var timeInMinutes = ConvertHourToMinutes.exec(time);
    return lessonRepository.findLessonsAvaible(subject, weekDay, timeInMinutes);
  }

  public Lesson findOne(final Long id) throws Exception {
    return this.lessonRepository.findById(id).orElseThrow(() -> new Exception("lesson not found"));
  }

  @Transactional
  public Lesson createLesson(final LessonDTO lessonDTO, final UserDTO userDTO, final ScheduleDTO[] schedulesDTO) {
    var user = usersService.saveOne(userDTO);
    var lesson = this.saveOne(lessonDTO, user);

    for (var s : schedulesDTO) {
      scheduleService.saveOne(s, lesson);
    }

    return lesson;
  }

  public Lesson saveOne(final LessonDTO dto, final User user) {
    var lesson = dto.build().setUser(user);
    return this.lessonRepository.save(lesson);
  }

  public void deleteOne(final Long id) {
    lessonRepository.deleteById(id);
  }
}