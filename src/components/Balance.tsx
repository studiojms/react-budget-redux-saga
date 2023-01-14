import { SemanticCOLORS, Statistic } from 'semantic-ui-react';
import { StatisticSizeProp } from 'semantic-ui-react/dist/commonjs/views/Statistic/Statistic';
import { OperationType } from '../types';

interface BalanceProps {
  title: string;
  value: number;
  type?: OperationType;
  size?: StatisticSizeProp;
}

function Balance({ title, value, type, size = 'tiny' }: BalanceProps) {
  let typeColor: SemanticCOLORS = 'black';

  if (type) {
    typeColor = type == 'income' ? 'green' : 'red';
  }

  return (
    <Statistic size={size} color={typeColor}>
      <Statistic.Label style={{ textAlign: 'left' }}>{title}:</Statistic.Label>
      <Statistic.Value>$ {value.toFixed(2)}</Statistic.Value>
    </Statistic>
  );
}

export default Balance;
