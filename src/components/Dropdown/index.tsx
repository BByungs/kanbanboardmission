import styled from 'styled-components';
import { Container } from './style';

interface DropdownProps {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <Container>
      <div id="edit">Edit</div>
      <div>Delete</div>
    </Container>
  );
};

export default Dropdown;
