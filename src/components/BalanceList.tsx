import { Grid, Segment } from 'semantic-ui-react';
import Balance from './Balance';

interface BalanceListProps {
  incomeValue: number;
  expenseValue: number;
}

function BalanceList({ incomeValue, expenseValue }: BalanceListProps) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Balance title="Income" value={incomeValue} type="income" />
          </Grid.Column>
          <Grid.Column>
            <Balance title="Expenses" value={expenseValue} type="expense" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default BalanceList;
