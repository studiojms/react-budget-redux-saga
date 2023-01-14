import { Form } from 'semantic-ui-react';
import useEntryDetails from '../hooks/useEntryDetails';
import SaveOrCancelButton from './SaveOrCancelButton';
import TransactionFormFields from './TransactionFormFields';

interface FormProps {}

function TransactionForm(params: FormProps) {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    onAddEntry: onSave,
    clearFields,
  } = useEntryDetails();

  return (
    <Form unstackable>
      <TransactionFormFields
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <SaveOrCancelButton onSave={onSave} onCancel={() => clearFields()} />
    </Form>
  );
}

export default TransactionForm;
