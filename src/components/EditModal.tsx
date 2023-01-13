import { Dispatch, SetStateAction } from 'react';
import { Button, Modal } from 'semantic-ui-react';
import { OperationType } from '../types';
import TransactionFormFields from './TransactionFormFields';

interface EditModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
  description: string;
  value: string;
  isExpense: boolean;
  setDescription: (val: string) => void;
  setValue: (val: string) => void;
  setIsExpense: (val: boolean) => void;
  onEdit: (id: string, description: string, value: string, isExpense: boolean) => void;
}

function EditModal({
  isOpen,
  setIsOpen,
  id,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense,
  onEdit,
}: EditModalProps) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit Transaction</Modal.Header>
      <Modal.Content>
        <TransactionFormFields
          description={description}
          value={value}
          isExpense={isExpense}
          setDescription={setDescription}
          setValue={setValue}
          setIsExpense={setIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={() => onEdit(id, description, value, isExpense)} primary>
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditModal;
