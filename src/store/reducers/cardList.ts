import {
  DELETE_CARD,
  EDIT_CARD,
  PLUS_CARD,
} from 'src/store/actions/actionType';
import { deleteCard, editCard, plusCard } from '../actions';
import { CARDLIST } from '../data';
import { cardDelete, cardEdit, cardPlus } from './utils/cardListUtils';

type cardListActionTypes =
  | ReturnType<typeof deleteCard>
  | ReturnType<typeof plusCard>
  | ReturnType<typeof editCard>;

const cardList = (state = CARDLIST, action: cardListActionTypes) => {
  switch (action.type) {
    case DELETE_CARD:
      return cardDelete(state, action.payload.id);
    case EDIT_CARD:
      return cardEdit(state, action.payload);
    case PLUS_CARD:
      return cardPlus(state, action.payload);
    default:
      return state;
  }
};

export default cardList;
