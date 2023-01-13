import { Container } from 'semantic-ui-react';
import Balance from './components/Balance';
import BalanceList from './components/BalanceList';
import HistoryRow from './components/HistoryRow';
import MainHeader from './components/MainHeader';
import TransactionForm from './components/TransactionForm';

function App() {
  return (
    <Container>
      <MainHeader>My Budget</MainHeader>
      <Balance title="Your Balance" value="123.70" size="small" />
      <BalanceList />

      <MainHeader type="h3">History</MainHeader>
      <HistoryRow description="Detail" value="10.00" type="expense" />
      <HistoryRow description="Detail" value="100.00" type="income" />

      <MainHeader type="h3">Add new transaction</MainHeader>
      <TransactionForm />
    </Container>
  );
}

export default App;
