package com.devsuperior.dsmovie.controllers;

import com.devsuperior.dsmovie.dtos.MovieResponseDTO;
import com.devsuperior.dsmovie.dtos.ScoreRequestDTO;
import com.devsuperior.dsmovie.services.ScoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

  @Autowired
  private ScoreService service;

  @PutMapping
  public MovieResponseDTO saveScore(@RequestBody ScoreRequestDTO requestDTO) {
    MovieResponseDTO responseDTO;
    responseDTO = service.saveScore(requestDTO);

    return responseDTO;
  }

}
