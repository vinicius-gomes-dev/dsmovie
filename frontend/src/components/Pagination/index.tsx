import { ReactComponent as Arrow } from 'assets/images/arrow.svg';
import { MoviePage } from 'types/movie';

import './styles.css';

type PaginationProps = {
  page: MoviePage;
  onChange: Function;
}

export function Pagination({ page, onChange }: PaginationProps) {

  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button className="dsmovie-pagination-button" onClick={() => onChange(page.number - 1)} disabled={page.first} >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button className="dsmovie-pagination-button" onClick={() => onChange(page.number + 1)} disabled={page.last} >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}