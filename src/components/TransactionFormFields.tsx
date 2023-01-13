import { Checkbox, Form, Segment } from 'semantic-ui-react';

interface TransactionFormFieldsProps {
  description: string;
  value: string;
  isExpense: boolean;
  setDescription: (val: string) => void;
  setValue: (val: string) => void;
  setIsExpense: (val: boolean) => void;
}

function TransactionFormFields({
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
}: TransactionFormFieldsProps) {
  return (
    <>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Segment compact>
        <Checkbox toggle label="Expense?" checked={isExpense} onChange={() => setIsExpense(!isExpense)} />
      </Segment>
    </>
  );
}

export default TransactionFormFields;
