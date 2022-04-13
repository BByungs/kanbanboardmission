import { PlusAndEditParams } from './../../store/actions/cardList';
import {
  DELETE_CARD,
  EDIT_CARD,
  PLUS_CARD,
} from 'src/store/actions/actionType';
export interface CardDeleteAction {
  type: typeof DELETE_CARD;
  payload: Pick<PlusAndEditParams, 'id' | 'progress'>;
}

export interface CardPlusAction {
  type: typeof PLUS_CARD;
  payload: PlusAndEditParams;
}

export interface CardEditAction {
  type: typeof EDIT_CARD;
  payload: PlusAndEditParams;
}
