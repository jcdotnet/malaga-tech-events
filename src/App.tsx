import { useState } from 'react';

import { useEvents } from './hooks/useEvents';
import { Card } from './components/events/Card';
import { Header } from './components/ui/Header';
import { Filters } from './components/events/Filters';
import { Search } from './components/events/Search';

import { filterEvents, getByAvailability } from './components/utils/filters';

function App() {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { events } = useEvents();

  const filteredEvents = filterEvents(events, activeCategory, searchQuery);
  const { upcoming, past } = getByAvailability(filteredEvents);

  return (
    <div className="container">

      <section className="section">
        <div className="row">
          <Header title="Málaga Tech Events" description="Eventos tecnológicos en Málaga" />
        </div>
      </section>

      <section className="pb-10">
        <div className="row">
          <Search
            value={searchQuery}
            onSearchChange={setSearchQuery} // passing setler directly instead of OnChange
          />
          <Filters
            active={activeCategory}
            onCategoryChange={setActiveCategory} // same as above
          />
        </div>
      </section>

      <section className="section bg-white/50 border-y border-slate-200/50">
        <div className="row">
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcoming.map((event) => (
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

            {past.length > 0 && (
              <div className="pt-10 border-t border-slate-200">
                <h2 className="text-[11px] font-black uppercase text-slate-500 mb-10">
                  Eventos pasados
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-40">
                  {past.map((event) => (
                    <Card key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

          </main>
        </div>
      </section>

    </div>
  );
}

export default App;