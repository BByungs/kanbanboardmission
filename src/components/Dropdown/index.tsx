import styled from 'styled-components';

interface DropdownProps {
  setDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <Container>
      <div id="edit" className="dropdown">
        Edit
      </div>
      <div id="delete" className="dropdown">
        Delete
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 60px;
  position: absolute;
  right: 0px;
  top: 0;
  margin-top: 30px;
  right: 10px;
  border-radius: 5px;
  border: 1px solid gray;
  & > div {
    font-size: 12px;
    padding: 4px 7px 4px 7px;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #218bff;
      color: white;
    }
  }
  & > #edit {
    margin-bottom: 3px;
  }
`;

export default Dropdown;
