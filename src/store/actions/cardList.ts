import { DELETE_CARD, EDIT_CARD, PLUS_CARD } from './actionType';

export interface DeleteParams {
  id: string;
}

export interface PlusAndEditParams {
  id: string;
  title: string;
  content: string;
}

const deleteCard = ({ id }: DeleteParams) => {
  return {
    type: DELETE_CARD,
    payload: { id },
  };
};

const plusCard = ({ id, title, content }: PlusAndEditParams) => {
  return {
    type: PLUS_CARD,
    payload: { id, title, content },
  };
};

const editCard = ({ id, title, content }: PlusAndEditParams) => {
  return {
    type: EDIT_CARD,
    payload: { id, title, content },
  };
};

export { deleteCard, plusCard, editCard };
