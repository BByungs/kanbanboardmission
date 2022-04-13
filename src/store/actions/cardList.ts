import { DELETE_CARD, EDIT_CARD, PLUS_CARD } from './actionType';

export interface PlusAndEditParams {
  id: string;
  title: string;
  content: string;
  progress: 'To do' | 'In progress' | 'Done';
}

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

export { deleteCard, plusCard, editCard };
