import { FormCard } from 'components/FormCard';
import { useParams } from 'react-router-dom';


export function Form() {

  const params = useParams();

  return (
    <FormCard movieId={`${params.movieId}`} />
  );
}