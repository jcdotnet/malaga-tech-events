import { useState } from 'react';

import { useEvents } from './hooks/useEvents';
import { Card } from './components/events/Card';
import { Header } from './components/ui/Header';
import { Filters } from './components/events/Filters';
import { Search } from './components/events/Search';

function App() {

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { events } = useEvents();

  const filteredEvents = events.filter(event => (
    (activeCategory === 'all' || event.category === activeCategory) &&
    `${event.title} ${event.description}`.toLowerCase().includes(searchQuery.toLowerCase())
  ));

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