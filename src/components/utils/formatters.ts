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

export const formatDate = (date: Date, style: 'long' | 'short'): string => {
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: style,
  });
};

export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
