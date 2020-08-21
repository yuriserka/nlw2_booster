package com.example.demo.controllers;

import java.util.List;
import java.util.Map;

import com.example.demo.dtos.LessonDTO;
import com.example.demo.dtos.ScheduleDTO;
import com.example.demo.dtos.UserDTO;
import com.example.demo.models.Lesson;
import com.example.demo.services.LessonsServices;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping(path = "/lessons")
public class LessonsController {
  ObjectMapper mapper = new ObjectMapper();

  LessonsController() {
    mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
  }

  @Autowired
  private LessonsServices lessonsService;

  @GetMapping
  public @ResponseBody List<Lesson> index(
    @RequestParam int weekDay,
    @RequestParam String subject,
    @RequestParam String time
  ) {
    return lessonsService.findAll(weekDay, subject, time);
  }

  @PostMapping
  public @ResponseBody Lesson save(@RequestBody Map<String, Object> req) {
    var userDTO = mapper.convertValue(req, UserDTO.class);
    var lessonDTO = mapper.convertValue(req, LessonDTO.class);
    var schedulesDTO = mapper.convertValue(req.get("schedule"), ScheduleDTO[].class);

    return lessonsService.createLesson(lessonDTO, userDTO, schedulesDTO);
  }

  @GetMapping("/{id}")
  public @ResponseBody Lesson show(@PathVariable Long id) {
    try {
      return lessonsService.findOne(id);
    } catch (Exception e) {
      System.out.println(e.getMessage());
      return null;
    }
  }

}