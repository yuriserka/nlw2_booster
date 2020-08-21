package com.example.demo.dtos;

import com.example.demo.models.Schedule;
import com.example.demo.utils.ConvertHourToMinutes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {
  Integer weekDay;
  String beginTime;
  String endTime;

  public Schedule build() {
    return new Schedule().setWeekDay(weekDay).setBeginTime(ConvertHourToMinutes.exec(beginTime))
        .setEndTime(ConvertHourToMinutes.exec(endTime));
  }
}
