import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import useEntryDetails from '../hooks/useEntryDetails';
import { closeEditModal } from '../slices/modals.slice';
import TransactionFormFields from './TransactionFormFields';

interface EditModalProps {
  isOpen: boolean;

  id: string;
}

function EditModal({ isOpen, id }: EditModalProps) {
  const dispatch = useDispatch();

  const { description, value, isExpense, setDescription, setValue, setIsExpense, onUpdateEntry, loadData } =
    useEntryDetails(id);

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

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
        <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
        <Button
          onClick={() => {
            onUpdateEntry(id);
            dispatch(closeEditModal());
          }}
          primary
        >
          Update
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditModal;
