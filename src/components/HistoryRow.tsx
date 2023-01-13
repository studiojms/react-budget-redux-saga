import { Dispatch, SetStateAction, useState } from 'react';
import { Container, Grid, Icon, Segment } from 'semantic-ui-react';
import { OperationType } from '../types';
import EditModal from './EditModal';

interface HistoryRowProps {
  id: string;
  description: string;
  value: string;
  type: OperationType;
  onRemoveEntry: (id: string) => void;
  onEditEntry: (id: string) => void;
}

function HistoryRow({ id, description, value, type, onRemoveEntry, onEditEntry }: HistoryRowProps) {
  return (
    <>
      <Segment color={type == 'income' ? 'green' : 'red'}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" onClick={() => onEditEntry(id)} />
              <Icon name="trash" onClick={() => onRemoveEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}

export default HistoryRow;
