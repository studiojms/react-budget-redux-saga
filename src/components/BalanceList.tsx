import { Grid, Segment } from 'semantic-ui-react';
import Balance from './Balance';

interface BalanceListProps {}

function BalanceList(params: BalanceListProps) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Balance title="Income" value="120.00" type="income" />
          </Grid.Column>
          <Grid.Column>
            <Balance title="Expenses" value="70.15" type="expense" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BalanceList;
