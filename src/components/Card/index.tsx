import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardType } from 'src/types/CardType';
import { Container, Header, EllipsisIcon, OutSideOfDropdown } from './style';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
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

  return (
    <Container>
      <Header>
        <h1>{props.card.title}</h1>
        <EllipsisIcon icon={faEllipsis} onClick={handleEllipsis} />
        {dropdownOpen && (
          <React.Fragment>
            <Dropdown setDropdownOpen={setDropdownOpen} />
            <OutSideOfDropdown onClick={() => setDropdownOpen(false)} />
          </React.Fragment>
        )}
      </Header>
      <div>{props.card.content}</div>
    </Container>
  );
};

export default Card;
