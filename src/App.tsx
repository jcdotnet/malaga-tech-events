import { useState } from 'react';

import { useEvents } from './hooks/useEvents';
import { List } from './components/ui/List';
import { Details } from './components/ui/Details';

function App() {

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { events } = useEvents();
  const selectedEvent = events.find(e => e.id === selectedId);

  return (
    <div className="main-content">
      
      {selectedEvent ? <Details event={selectedEvent} onBackClick={() => setSelectedId(null)} />
        : ( <List events={events} onEventSelect={setSelectedId} /> )}
        
    </div>
  );
}

export default App;