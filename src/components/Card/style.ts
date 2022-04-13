import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* Card Component style */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  background-color: white;
  margin-bottom: 15px;
  border-radius: 8px;
  padding: 17px 12px 38px 15px;
  position: relative;

  /* content style */
  & div {
    font-size: 10px;
    color: #999999;
    white-space: normal;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;

  /* title style */
  & > h1 {
    font-size: 12px;
    color: black;
    text-align: center;
  }
`;

export const EllipsisIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: black;
  font-size: 12px;
`;

export const OutSideOfDropdown = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
`;
