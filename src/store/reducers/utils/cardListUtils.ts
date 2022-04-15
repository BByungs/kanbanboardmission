import { MoveCardParams } from './../../actions/cardList';
import produce from 'immer';
import { PlusAndEditParams } from 'src/store/actions/cardList';
import { CardListType } from 'src/types/CardListType';

export const cardDelete = (
  cardListState: CardListType,
  { id, progress }: Pick<PlusAndEditParams, 'id' | 'progress'>,
) => {
  return produce(cardListState, (draft) => {
    const key = progress as keyof CardListType;
    draft[key].forEach((card, idx) => {
      if (card.id === id) {
        draft[key].splice(idx, 1);
      }
    });
  });
};

export const cardEdit = (
  cardListState: CardListType,
  { id, title, content, progress }: PlusAndEditParams,
) => {
  return produce(cardListState, (draft) => {
    const key = progress as keyof CardListType;
    const card = draft[key].find((card) => card.id === id);
    if (card) {
      card.content = content;
      card.title = title;
    }
  });
};

export const cardPlus = (
  cardListState: CardListType,
  { id, title, content, progress }: PlusAndEditParams,
) => {
  return produce(cardListState, (draft) => {
    const key = progress as keyof CardListType;
    draft[key].unshift({
      id,
      title,
      content,
      progress,
    });
  });
};

export const cardMove = (
  cardListState: CardListType,
  { id, progress, currentPrgoress, card }: MoveCardParams,
) => {
  return produce(cardListState, (draft) => {
    const nextKey = progress as keyof CardListType;
    const currentKey = currentPrgoress as keyof CardListType;
    draft[currentKey].forEach((card, idx) => {
      if (card.id === id) {
        draft[currentKey].splice(idx, 1);
      }
    });
    draft[nextKey].push({ ...card, progress: nextKey });
  });
};
