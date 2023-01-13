import { Container } from 'semantic-ui-react';
import { Entry } from '../types';

import HistoryRow from './HistoryRow';

interface HistoryProps {
  entries: Entry[];
  onRemoveEntry: (id: string) => void;
  onEditEntry: (id: string) => void;
}

function History({ entries, onRemoveEntry, onEditEntry }: HistoryProps) {
  return (
    <Container>
      {entries.map((entry) => (
        <HistoryRow
          key={entry.id}
          id={entry.id}
          description={entry.description}
          value={entry.value}
          type={entry.type}
          onRemoveEntry={onRemoveEntry}
          onEditEntry={onEditEntry}
        />
      ))}
    </Container>
  );
}

export default History;
