import { Grid, Icon, Segment } from 'semantic-ui-react';
import { OperationType } from '../types';

interface HistoryRowProps {
  description: string;
  value: string;
  type: OperationType;
}

function HistoryRow({ description, value, type }: HistoryRowProps) {
  return (
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
            <Icon name="edit" />
            <Icon name="trash" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default HistoryRow;
