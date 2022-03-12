import axios from 'axios';
import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination'
import { useState, useEffect } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';

export function Listing() {

  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
      .then(response => {
        const data: MoviePage = response.data;
        setPageNumber(data.number);
        console.log(data)
      });
  }, []);


  return (
    <>
      <p>{pageNumber}</p>
      <Pagination />

      <div className='container'>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-4">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}