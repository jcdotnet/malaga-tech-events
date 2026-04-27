import { useState } from 'react';

import { useEvents } from './hooks/useEvents';
import { List } from './components/ui/List';
import { Details } from './components/ui/Details';

import 'leaflet/dist/leaflet.css';
import { Footer } from './components/ui/Footer';

function App() {

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const { events } = useEvents();
  const selectedEvent = events.find(e => e.id === selectedId);

  return (
    <>
      <div className="main-content">
        {selectedEvent ? <Details event={selectedEvent} onBackClick={() => setSelectedId(null)} />
          : ( <List events={events} onEventSelect={setSelectedId} /> )}
      </div>
      <Footer />
    </>
  );
}

export default App;