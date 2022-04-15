import { MoveCardParams, PlusAndEditParams } from 'src/types/store';
import { DELETE_CARD, EDIT_CARD, MOVE_CARD, PLUS_CARD } from './actionType';

const deleteCard = ({
  id,
  progress,
}: Pick<PlusAndEditParams, 'id' | 'progress'>) => {
  return {
    type: DELETE_CARD,
    payload: { id, progress },
  };
};

const plusCard = ({ id, title, content, progress }: PlusAndEditParams) => {
  return {
    type: PLUS_CARD,
    payload: { id, title, content, progress },
  };
};

const editCard = ({ id, title, content, progress }: PlusAndEditParams) => {
  return {
    type: EDIT_CARD,
    payload: { id, title, content, progress },
  };
};

const moveCard = ({ id, progress, card, currentPrgoress }: MoveCardParams) => {
  return {
    type: MOVE_CARD,
    payload: { id, progress, card, currentPrgoress },
  };
};

export { deleteCard, plusCard, editCard, moveCard };
