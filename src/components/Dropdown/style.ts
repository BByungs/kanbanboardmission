import styled from 'styled-components';

export const Container = styled.div`
  z-index: 20;
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
    padding: 5px 7px 4px 7px;
    color: #000000;
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
