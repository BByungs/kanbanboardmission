import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { CardType } from 'src/types/CardType';
import { Container, Header, EllipsisIcon, OutSideOfDropdown } from './style';
import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import SubmitCard from '../SubmitCard';
import { useDispatch } from 'react-redux';
import { MOVE_CARD } from 'src/store/actions/actionType';

interface CardProps {
  card: CardType;
}

const Card = (props: CardProps): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleEllipsis = () => {
    setDropdownOpen((prev) => !prev);
  };

  const progressReturn = (x: number) => {
    if (x >= 0 && x <= 773) {
      return 'todo';
    } else if (x > 773 && x <= 1107) {
      return 'inProgress';
    } else if (x > 1107) {
      return 'done';
    }
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch({
      type: MOVE_CARD,
      payload: {
        id: props.card.id,
        title: props.card.title,
        content: props.card.content,
        progress: progressReturn(e.clientX),
        currentPrgoress: props.card.progress,
        card: props.card,
      },
    });
  };

  return (
    <React.Fragment>
      {editOpen ? (
        <SubmitCard card={props.card} setEditOpen={setEditOpen} edit />
      ) : (
        <Container
          draggable="true"
          onDragOver={onDragOver}
          onDragEnd={onDragEnd}
        >
          <Header>
            <h1>{props.card.title}</h1>
            <EllipsisIcon icon={faEllipsis} onClick={handleEllipsis} />
            {dropdownOpen && (
              <React.Fragment>
                <Dropdown
                  setDropdownOpen={setDropdownOpen}
                  setEditOpen={setEditOpen}
                  card={props.card}
                />
                <OutSideOfDropdown onClick={() => setDropdownOpen(false)} />
              </React.Fragment>
            )}
          </Header>
          <div>{props.card.content}</div>
        </Container>
      )}
    </React.Fragment>
  );
};

export default Card;
