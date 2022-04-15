import { Container, PlusIcon, Header } from './style';
import { CardType } from 'src/types/CardType';
import Card from 'src/components/Card';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SubmitCard from '../SubmitCard';

interface BoardProps {
  progress: string;
  list: CardType[];
}

const Board = (props: BoardProps): JSX.Element => {
  const [addOpen, setAddOpen] = useState<boolean>(false);
  const handleAdd = () => {
    setAddOpen((prev) => !prev);
  };
  return (
    <Container className="container" draggable="true">
      <Header id="header">
        <h1>{props.progress}</h1>
        <PlusIcon icon={faPlus} onClick={handleAdd} />
      </Header>
      {addOpen && (
        <SubmitCard setAddOpen={setAddOpen} progress={props.progress} />
      )}
      {props.list.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </Container>
  );
};

export default Board;
