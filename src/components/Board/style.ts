import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 950px;
  max-height: 950px;
  background-color: #e8e9ed;
  padding: 23px 19px 20px 19px;
  margin: auto;
  border-radius: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  justify-content: space-between;
`;

export const PlusIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const CardListContainer = styled.div``;
