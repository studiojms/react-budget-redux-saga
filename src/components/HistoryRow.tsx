import { useDispatch } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { removeEntry } from '../slices/entries.slice';
import { openEditModal } from '../slices/modals.slice';
import { OperationType } from '../types';

interface HistoryRowProps {
  id: string;
  description: string;
  value: number;
  type: OperationType;
}

function HistoryRow({ id, description, value, type }: HistoryRowProps) {
  const dispatch = useDispatch();

  return (
    <>
      <Segment color={type == 'income' ? 'green' : 'red'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $ {value?.toFixed(2)}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => dispatch(openEditModal(id))} />
              <Icon name="trash" onClick={() => dispatch(removeEntry(id))} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default HistoryRow;
