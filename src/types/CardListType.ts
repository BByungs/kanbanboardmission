import { CardType } from './CardType';

export interface CardListType {
  todo: CardType[];
  inProgress: CardType[];
  done: CardType[];
}
