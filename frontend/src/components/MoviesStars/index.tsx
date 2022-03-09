import { ReactComponent as StarEmpty } from 'assets/images/star-empty.svg';
import { ReactComponent as StarHalf } from 'assets/images/star-half.svg';
import { ReactComponent as StarFull } from 'assets/images/star-full.svg';



import './styles.css';

export function MovieStars() {

  return (
    <div className="dsmovie-stars-container">
      <StarFull />
      <StarFull />
      <StarFull />
      <StarHalf />
      <StarEmpty />
    </div>
  );
}