import { Button } from 'semantic-ui-react';

interface ButtonProps {}

function SaveOrCancelButton(params: ButtonProps) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button primary>Ok</Button>
    </Button.Group>
  );
}

export default SaveOrCancelButton;
