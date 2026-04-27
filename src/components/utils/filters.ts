import type { FullEvent } from '../../types';

export const filterEvents = (events: FullEvent[], category: string, query: string): FullEvent[] => {

  return events.filter(event => (
    (category === 'all' || event.category === category) &&
    `${event.title} ${event.description}`.toLowerCase().includes(query.toLowerCase())
  ));
}

export const getByAvailability = (events: FullEvent[]): { past: FullEvent[], upcoming: FullEvent[] } => {

  const currentDate = new Date();

  return {
    past: events
      .filter(e => e.date < currentDate)
      .sort((a, b) => b.date.getTime() - a.date.getTime()),
    upcoming: events
      .filter(e => e.date >= currentDate)
      .sort((a, b) => a.date.getTime() - b.date.getTime()),
  };
}