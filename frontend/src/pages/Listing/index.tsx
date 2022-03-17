import axios from 'axios';
import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination'
import { useState, useEffect } from 'react';
import { MoviePage } from 'types/movie';
import { BASE_URL } from 'utils/requests';

import './styles.css';

export function Listing() {

  const [pageNumber, setPageNumber] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then(response => {
        const data: MoviePage = response.data;
        setPage(data);

        if (!data.empty) {
          // setIsEmpty(false);
          console.log("## LOG 1 ##");
          console.log("data: ", data);
          console.log(`isEmpty: ${data.empty}`);
          // console.log("setPage: ", setPage);
          console.log("#### \n");
        }
        setIsEmpty(data.empty);


        console.log("## LOG 2 ##");
        console.log("data: ", data);
        console.log(`isEmpty: ${data.empty}`);
        // console.log("setPage: ", setPage);
        console.log("####");
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };



  return (
    <>
      <div className="is-loading" hidden={!isEmpty}  >
        <div className="c-loader"></div>
      </div>
      <div hidden={isEmpty} >
        <Pagination page={page} onChange={handlePageChange} />

        <div className='container'>
          <div className="row">
            {
              page.content.map(movie => (
                <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        </div>

      </div>
    </>
  );
}