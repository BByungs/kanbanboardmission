import { PlusAndEditParams } from 'src/store/actions/cardList';
import { CardListType } from 'src/types/CardListType';

export const cardDelete = (cardListState: CardListType, id: string) => {
  Object.keys(cardListState).forEach((idx: string) => {
    const cards = cardListState[idx as keyof CardListType];
    cards.forEach((card) => {
      if (card.id === id) console.log(card);
    });
  });

  return cardListState;
};

export const cardEdit = (
  cardListState: CardListType,
  { id, title, content, progress }: PlusAndEditParams,
) => {};

export const cardPlus = (
  cardListState: CardListType,
  { id, title, content, progress }: PlusAndEditParams,
) => {
  const addData = cardListState[progress as keyof CardListType].unshift({
    id,
    title,
    content,
  });

  return { ...cardListState, addData };
};
