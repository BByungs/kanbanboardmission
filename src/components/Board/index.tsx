import { Container, PlusIcon, Header } from './style';
import { CardType } from 'src/types/CardType';
import Empty from 'src/components/empty';
import Card from 'src/components/Card';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface BoardProps {
  progress: string;
  list: CardType[];
}

const Board = (props: BoardProps): JSX.Element => {
  return (
    <Container>
      <Header>
        <h1>{props.progress}</h1>
        <PlusIcon icon={faPlus} />
      </Header>
      {!props.list.length ? (
        <Empty />
      ) : (
        props.list.map((card) => <Card key={card.id} card={card} />)
      )}
    </Container>
  );
};

export default Board;
