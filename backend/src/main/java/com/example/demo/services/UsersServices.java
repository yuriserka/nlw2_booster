package com.example.demo.services;

import java.util.List;

import com.example.demo.dtos.UserDTO;
import com.example.demo.models.User;
import com.example.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UsersServices {

  @Autowired
  private UserRepository repository;

  public List<User> findAll() {
    return repository.findAll();
  }

  public User findOne(final Long id) throws Exception {
    return repository.findById(id).orElseThrow(() -> new Exception("user not found"));
  }

  public User saveOne(final UserDTO dto) {
    return repository.save(dto.build());
  }

  public void deleteOne(final Long id) {
    repository.deleteById(id);
  }
}