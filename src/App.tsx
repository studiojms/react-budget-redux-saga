import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import Balance from './components/Balance';
import BalanceList from './components/BalanceList';
import EditModal from './components/EditModal';
import History from './components/History';
import MainHeader from './components/MainHeader';
import TransactionForm from './components/TransactionForm';
import { Entry, OperationType } from './types';

function App() {
  const initialEntries: Entry[] = [
    {
      id: '1',
      description: 'Work income',
      value: '1000.00',
      type: 'income',
    },
    {
      id: '2',
      description: 'Water bill',
      value: '90.00',
      type: 'expense',
    },
    {
      id: '3',
      description: 'Rent',
      value: '700.00',
      type: 'expense',
    },
    {
      id: '4',
      description: 'Power bill',
      value: '50.00',
      type: 'expense',
    },
  ];

  const [entries, setEntries] = useState<Entry[]>(initialEntries);
  const [entryId, setEntryId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [isExpense, setIsExpense] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      clearFields();
    }
  }, [isOpen]);

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

  const clearFields = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  };

  const removeEntry = (id: string) => {
    const result = entries.filter((e) => e.id != id);
    setEntries(result);
  };

  const openEntryToEdit = (id: string) => {
    const entryToEdit = entries.find((e) => e.id == id);
    if (entryToEdit) {
      setEntryId(id);
      setDescription(entryToEdit.description);
      setValue(entryToEdit.value);
      setIsExpense(entryToEdit.type == 'expense');
      setIsOpen(true);
    } else {
      throw new Error('Entry not found for the given id');
    }
  };

  const editEntry = (id: string, description: string, value: string, isExpense: boolean) => {
    const entryIdx = entries.findIndex((e) => e.id == id);

    const entriesCopy = [...entries];
    if (entryIdx) {
      entriesCopy[entryIdx].description = description;
      entriesCopy[entryIdx].value = value;
      entriesCopy[entryIdx].type = isExpense ? 'expense' : 'income';
    }

    setEntries(entriesCopy);
    setIsOpen(false);
  };

  const addEntry = (description: string, value: string, type: OperationType) => {
    const newEntry: Entry = {
      id: `${entries.length + 1}`,
      description,
      value,
      type,
    };
    const newEntries: Entry[] = [...entries, newEntry];

    setEntries(newEntries);
  };

  return (
    <Container>
      <MainHeader>My Budget</MainHeader>
      <Balance title="Your Balance" value={balance.toString()} size="small" />
      <BalanceList incomeValue={totalIncome} expenseValue={totalExpenses} />

      <MainHeader type="h3">History</MainHeader>
      <History entries={entries} onRemoveEntry={removeEntry} onEditEntry={openEntryToEdit} />

      <MainHeader type="h3">Add new transaction</MainHeader>
      <TransactionForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        onAddEntry={addEntry}
      />
      <EditModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        id={entryId}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        onEdit={editEntry}
      />
    </Container>
  );
}

export default App;
