import styled from 'styled-components';
import { Container } from './style';

interface DropdownProps {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = (props: DropdownProps) => {
  const handleEdit = () => {
    props.setEditOpen((prev) => !prev);
    props.setDropdownOpen((prev) => !prev);
  };
  return (
    <Container>
      <div id="edit" onClick={handleEdit}>
        Edit
      </div>
      <div>Delete</div>
    </Container>
  );
};

export default Dropdown;
