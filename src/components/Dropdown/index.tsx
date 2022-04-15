import { useDispatch } from 'react-redux';
import { DELETE_CARD } from 'src/store/actions/actionType';
import { CardType } from 'src/types/CardType';
import { Container } from './style';

interface DropdownProps {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  card: CardType;
}

const Dropdown = (props: DropdownProps): JSX.Element => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    props.setEditOpen((prev) => !prev);
    props.setDropdownOpen((prev) => !prev);
  };
  const handleDelete = () => {
    dispatch({
      type: DELETE_CARD,
      payload: {
        id: props.card.id,
        progress: props.card.progress,
      },
    });
    props.setDropdownOpen(false);
  };
  return (
    <Container>
      <div id="edit" onClick={handleEdit}>
        Edit
      </div>
      <div onClick={handleDelete}>Delete</div>
    </Container>
  );
};

export default Dropdown;
