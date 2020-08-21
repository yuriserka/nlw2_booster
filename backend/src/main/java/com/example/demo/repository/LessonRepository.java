package com.example.demo.repository;

import java.util.List;

import com.example.demo.models.Lesson;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface LessonRepository extends JpaRepository<Lesson, Long> {
  @Query(
    nativeQuery = true,
    value = "SELECT * FROM lessons le JOIN lesson_schedule ls ON ls.lesson_id = le.id JOIN users u ON le.user_id = u.id WHERE le.subject = ?1 AND ls.week_day = ?2 AND ls.begin_time <= ?3 AND ls.end_time > ?3"
  )
  List<Lesson> findLessonsAvaible(final String subject, final int weekDay, final int timeInMinutes);
}
