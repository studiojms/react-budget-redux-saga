import { Grid, Segment } from 'semantic-ui-react';
import Balance from './Balance';

interface BalanceListProps {
  incomeValue: number | string;
  expenseValue: number | string;
}

function BalanceList({ incomeValue, expenseValue }: BalanceListProps) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Balance title="Income" value={incomeValue.toString()} type="income" />
          </Grid.Column>
          <Grid.Column>
            <Balance title="Expenses" value={expenseValue.toString()} type="expense" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BalanceList;
