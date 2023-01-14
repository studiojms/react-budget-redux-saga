import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import Balance from './components/Balance';
import BalanceList from './components/BalanceList';
import EditModal from './components/EditModal';
import History from './components/History';
import MainHeader from './components/MainHeader';
import TransactionForm from './components/TransactionForm';
import { RootState } from './types';

function App() {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [balance, setBalance] = useState(0);

  const entries = useSelector((state: RootState) => state.entries);
  const { isOpen, id } = useSelector((state: RootState) => state.modals);

  useEffect(() => {
    const totalIncome = entries
      .filter((e) => e.type == 'income')
      .map((e) => Number(e.value))
      .reduce((prev, curr) => prev + curr, 0);
    const totalExpenses = entries
      .filter((e) => e.type == 'expense')
      .map((e) => Number(e.value) * -1)
      .reduce((prev, curr) => prev + curr, 0);

    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    setBalance(totalIncome + totalExpenses);
  }, [entries]);

  return (
    <Container>
      <MainHeader>My Budget</MainHeader>
      <Balance title="Your Balance" value={balance} size="small" />
      <BalanceList incomeValue={totalIncome} expenseValue={totalExpenses} />

      <MainHeader type="h3">History</MainHeader>
      <History entries={entries} />

      <MainHeader type="h3">Add new transaction</MainHeader>
      <TransactionForm />
      <EditModal isOpen={isOpen} id={id} />
    </Container>
  );
}

export default App;
