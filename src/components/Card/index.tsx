import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardType } from 'src/types/CardType';
import { Container, Header, EllipsisIcon } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Dropdown from '../Dropdown';

interface CardProps {
  card: CardType;
}

const Card = (props: CardProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  // const dispatch = useDispatch();

  const handleEllipsis = () => {
    setDropdownOpen((prev) => !prev);
  };

  const test = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLDivElement;
    console.log(target.className);
  };

  return (
    <Container>
      <Header>
        <h1>{props.card.title}</h1>
        <EllipsisIcon icon={faEllipsis} onClick={handleEllipsis} />
      </Header>
      {dropdownOpen && <Dropdown setDropdownOpen={setDropdownOpen} />}
      <div>{props.card.content}</div>
    </Container>
  );
};

export default Card;
