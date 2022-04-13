import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardType } from 'src/types/CardType';
import { Container, Header, EllipsisIcon } from './style';
import { useDispatch } from 'react-redux';
import { DELETE_CARD } from 'src/store/actions/actionType';

interface CardProps {
  card: CardType;
}

const Card = (props: CardProps): JSX.Element => {
  const dispatch = useDispatch();

  const test = (id: string) => {
    dispatch({ type: DELETE_CARD, payload: { id } });
  };

  return (
    <Container>
      <Header>
        <h1>{props.card.title}</h1>
        <EllipsisIcon icon={faEllipsis} onClick={() => test(props.card.id)} />
      </Header>
      <div>{props.card.content}</div>
    </Container>
  );
};

export default Card;
