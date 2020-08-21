package com.example.demo.dtos;

import com.example.demo.models.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
  String name;
  String avatar;
  String phone;
  String bio;

  public User build() {
    return new User().setName(name).setAvatar(avatar).setPhone(phone).setBio(bio);
  }
}
