import { MovieCard } from 'components/MovieCard';
import { Pagination } from 'components/Pagination'

export function Listing() {
  return (
    <>
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