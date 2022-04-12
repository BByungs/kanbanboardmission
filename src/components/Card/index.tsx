import { useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardType } from 'src/types/CardType';
import { Container, Header, EllipsisIcon } from './style';

interface CardProps {
  card: CardType;
}

const Card = (props: CardProps): JSX.Element => {
  const [editOpen, setEditOpen] = useState<boolean>(false);

  const handleEdit = () => {
    setEditOpen(true);
  };

  return (
    <Container>
      <Header>
        <h1>{props.card.title}</h1>
        <EllipsisIcon icon={faEllipsis} onClick={handleEdit} />
      </Header>
      <div>{props.card.content}</div>
    </Container>
  );
};

export default Card;
