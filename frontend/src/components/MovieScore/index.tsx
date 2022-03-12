import { MovieStars } from 'components/MoviesStars';

import './styles.css';

type MovieScoreProps = {
  score: number;
  count: number;
}

export function MovieScore({ score, count }: MovieScoreProps) {

  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}