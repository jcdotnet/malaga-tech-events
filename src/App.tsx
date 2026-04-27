import { useState } from 'react';

import { useEvents } from './hooks/useEvents';
import { Card } from './components/events/Card';
import { Header } from './components/ui/Header';
import { Filters } from './components/events/Filters';

function App() {

  const [activeCategory, setActiveCategory] = useState('all');
  const { events } = useEvents();

  const filteredEvents = events.filter(event => {
    return activeCategory === 'all' || event.category === activeCategory;
  });

  return (
    <div className="container">

      <section className="section">
        <div className="row">
          <Header title="Málaga Tech Events" description="Eventos tecnológicos en Málaga" />
        </div>
      </section>

      <section className="pb-10">
        <div className="row">
          <Filters
            active={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      <section className="section bg-white/50 border-y border-slate-200/50">
        <div className="row">
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <Card key={event.id} event={event} />
              ))}
            </div>
            {filteredEvents.length === 0 && (
              <div className="text-center py-20">
                <p className="text-slate-400 font-medium">
                  No hay actualmente eventos para esta categoría
                </p>
              </div>
            )}
          </main>
        </div>
      </section>

    </div>
  );
}

export default App;