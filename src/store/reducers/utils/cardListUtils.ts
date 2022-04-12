import { PlusAndEditParams } from 'src/store/actions/cardList';
import { CardListType } from 'src/types/CardListType';

export const cardDelete = (cardListState: CardListType, id: string) => {};

export const cardEdit = (
  cardListState: CardListType,
  { id, title, content }: PlusAndEditParams,
) => {};

export const cardPlus = (
  cardListState: CardListType,
  { id, title, content }: PlusAndEditParams,
) => {};
