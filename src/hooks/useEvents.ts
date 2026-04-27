import { MOCK_EVENTS, VENUES, HOSTS } from '../api/mockData';
import type { FullEvent } from '../types';

export const useEvents = () => {

  const fullEvents = MOCK_EVENTS.map(event => {
    const venue = VENUES.find(v => v.id === event.venueId) || {
      id: 'unknown',
      name: 'Ubicación por confirmar',
      address: 'Málaga',
      description: '',
      coordinates: { lat: 36.7212, lng: -4.4214 },
      website: ''
    };
    
    const host = HOSTS.find(h => h.id === event.hostId) || {
      id: 'unknown',
      name: 'Host por confirmar',
      website: ''
    };
    
    return {
      ...event,
      venue,
      host
    };
  });

  const events = fullEvents.sort((a, b) =>
    a.date.getTime() - b.date.getTime()
  );

  return {
    events: events as FullEvent[],
  };
};