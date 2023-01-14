import { Container } from 'semantic-ui-react';
import { Entry } from '../types';

import HistoryRow from './HistoryRow';

interface HistoryProps {
  entries: Entry[];
}

function History({ entries }: HistoryProps) {
  return (
    <Container>
      {entries.map((entry) => (
        <HistoryRow
          key={entry.id}
          id={entry.id}
          description={entry.description}
          value={entry.value}
          type={entry.type}
        />
      ))}
    </Container>
  );
}

export default History;
