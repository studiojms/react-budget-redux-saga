import { Container, Header, Statistic } from 'semantic-ui-react';

function App() {
  return (
    <Container>
      <Header as="h1">My Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>123.50</Statistic.Value>
      </Statistic>
    </Container>
  );
}

export default App;
