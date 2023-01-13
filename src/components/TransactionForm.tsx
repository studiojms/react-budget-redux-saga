import { Form } from 'semantic-ui-react';
import SaveOrCancelButton from './SaveOrCancelButton';

interface FormProps {}

function TransactionForm(params: FormProps) {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input icon="tags" width={12} label="Description" placeholder="New item" />
        <Form.Input icon="dollar" iconPosition="left" width={4} label="Value" placeholder="100.00" />
      </Form.Group>
      <SaveOrCancelButton />
    </Form>
  );
}

export default TransactionForm;
