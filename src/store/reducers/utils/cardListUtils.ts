import produce from 'immer';
import { PlusAndEditParams } from 'src/store/actions/cardList';
import { CardListType } from 'src/types/CardListType';

export const cardDelete = (
  cardListState: CardListType,
  { id, progress }: Pick<PlusAndEditParams, 'id' | 'progress'>,
) => {
  Object.keys(cardListState).forEach((idx: string) => {
    const cards = cardListState[idx as keyof CardListType];
    if (cards.length) {
      cards.forEach((card) => {
        if (card.id === id) console.log(card);
      });
    } else return;
  });

  return cardListState;
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
