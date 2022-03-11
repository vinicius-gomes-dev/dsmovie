package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.dtos.MovieResponseDTO;
import com.devsuperior.dsmovie.dtos.ScoreRequestDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ScoreService {

  @Autowired
  private MovieRepository movieRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private ScoreRepository repository;

  @Transactional
  public MovieResponseDTO saveScore(ScoreRequestDTO requestDTO) {
    User user;
    user = userRepository.findByEmail(requestDTO.getEmail());

    if (user == null) {
      user = new User();
      user.setEmail(requestDTO.getEmail());
      user = userRepository.saveAndFlush(user);
    }

    Movie movie;
    movie = movieRepository.findById(requestDTO.getMovieID()).get();

    Score score = new Score();
    score.setUser(user);
    score.setMovie(movie);
    score.setValue(requestDTO.getScore());
    score = repository.saveAndFlush(score);

    double sum = 0.0;

    for (Score s : movie.getScores()) {
      sum += s.getValue();
    }

    double avg = sum / movie.getScores().size();

    movie.setScore(avg);
    movie.setCount(movie.getScores().size());
    movie = movieRepository.save(movie);

    MovieResponseDTO responseDTO = new MovieResponseDTO(movie);

    return responseDTO;

  }

}
