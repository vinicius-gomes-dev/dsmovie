package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dtos.MovieResponseDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MovieService {

  @Autowired
  private MovieRepository repository;

  @Transactional(readOnly = true)
  public Page<MovieResponseDTO> findAll(Pageable pageable) {
    Page<Movie> response;
    response = repository.findAll(pageable);

    Page<MovieResponseDTO> responseDTO;
    responseDTO = response.map(x -> new MovieResponseDTO(x));

    return responseDTO;
  }

  @Transactional(readOnly = true)
  public MovieResponseDTO findById(Long id) {
    Movie response;
    response = repository.findById(id).get();

    MovieResponseDTO responseDTO;
    responseDTO = new MovieResponseDTO(response);

    return responseDTO;
  }
}
