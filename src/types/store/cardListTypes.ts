import { CardType } from '../CardType';

export interface PlusAndEditParams {
  id: string;
  title: string;
  content: string;
  progress: 'To do' | 'In progress' | 'Done';
}

export interface MoveCardParams
  extends Pick<PlusAndEditParams, 'id' | 'progress'> {
  card: CardType;
  currentPrgoress: 'To do' | 'In progress' | 'Done';
}
