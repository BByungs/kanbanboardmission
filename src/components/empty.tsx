import styled from 'styled-components';

const Empty = (): JSX.Element => {
  return <Container>텅 비었습니다!</Container>;
};

const Container = styled.div`
  margin: auto;
`;

export default Empty;
