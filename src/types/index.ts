// conferencia, meetup, taller, exposición
export type EventCategory = 'conference' | 'meetup' | 'workshop' | 'expo'; 

export interface Venue {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  website: string;
  address: string;
}

export interface Host {
  id: string;
  name: string;
  website: string;
  logoUrl?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  category: EventCategory;
  isFree: boolean;
  price?: number;
  link: string;
  imageUrl: string;
  venueId: string; // FK
  hostId: string; // FK
}

export interface FullEvent extends Omit<Event, 'venueId' | 'hostId'> {
  venue: Venue;
  host: Host;
}