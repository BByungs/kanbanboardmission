import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Board from './components/Board';
import { StoreState } from './types/store';

const App = (): JSX.Element => {
  const cardListState = useSelector((state: StoreState) => state.cardList);

  return (
    <Container>
      <Board progress="To do" list={cardListState.todo} />
      <Board progress="In progress" list={cardListState.inProgress} />
      <Board progress="Done" list={cardListState.done} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 1040px;
  padding: 20px;
`;

export default App;
