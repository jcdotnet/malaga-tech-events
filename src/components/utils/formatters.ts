import type { EventCategory } from '../../types';

export const CATEGORIES: Record<EventCategory | 'all', string> = {
  all: 'Todos',
  conference: 'Conferencias',
  workshop: 'Talleres',
  meetup: 'Meetups',
  expo: 'Exposiciones'
};

export const CATEGORY: Record<EventCategory, string> = {
  conference: 'Conferencia',
  workshop: 'Taller',
  meetup: 'Meetup',
  expo: 'Exposición'
};

export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'short' 
  });
};
