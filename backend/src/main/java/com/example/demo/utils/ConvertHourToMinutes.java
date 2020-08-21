package com.example.demo.utils;

import java.util.List;
import java.util.stream.Collectors;

public class ConvertHourToMinutes {
  public final static int exec(String time) {
    List<Integer> h_m = List.of(time.split(":")).stream().map(Integer::parseInt).collect(Collectors.toList());
    return (h_m.get(0) * 60) + h_m.get(1);
  }
}