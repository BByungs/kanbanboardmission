import {
  DELETE_CARD,
  EDIT_CARD,
  PLUS_CARD,
  MOVE_CARD,
} from 'src/store/actions/actionType';
import { deleteCard, editCard, moveCard, plusCard } from '../actions';
import { CARDLIST } from '../data';
import {
  cardDelete,
  cardEdit,
  cardMove,
  cardPlus,
} from './utils/cardListUtils';

type cardListActionTypes =
  | ReturnType<typeof deleteCard>
  | ReturnType<typeof plusCard>
  | ReturnType<typeof editCard>
  | ReturnType<typeof moveCard>;

const cardList = (state = CARDLIST, action: cardListActionTypes) => {
  switch (action.type) {
    case DELETE_CARD:
      return cardDelete(state, action.payload);
    case EDIT_CARD:
      return cardEdit(state, action.payload);
    case PLUS_CARD:
      return cardPlus(state, action.payload);
    case MOVE_CARD:
      return cardMove(state, action.payload);
    default:
      return state;
  }
};

export default cardList;
