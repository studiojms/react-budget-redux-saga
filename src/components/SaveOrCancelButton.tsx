import { Button } from 'semantic-ui-react';

interface ButtonProps {
  onSave: () => void;
  onCancel: () => void;
}

function SaveOrCancelButton({ onSave, onCancel }: ButtonProps) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button onClick={onCancel}>Cancel</Button>
      <Button.Or />
      <Button primary onClick={onSave}>
        Ok
      </Button>
    </Button.Group>
  );
}

export default SaveOrCancelButton;
