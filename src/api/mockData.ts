import type { Event, Venue, Host } from '../types';

export const VENUES: Venue[] = [
  {
    id: 'v1',
    name: 'FYCMA',
    description: 'Palacio de Ferias y Congresos de Málaga.',
    address: 'Av. de José Ortega y Gasset, 201, 29006 Málaga',
    coordinates: { lat: 36.7016, lng: -4.4572 },
    website: 'https://fycma.com'
  },
  {
    id: 'v2',
    name: 'Polo de Contenidos Digitales',
    description: 'Espacio de innovación y videojuegos.',
    address: 'Av. de Sor Teresa Prat, 15, 29003 Málaga',
    coordinates: { lat: 36.7038, lng: -4.4373 },
    website: 'https://polodigital.eu'
  },
  {
    id: 'v3',
    name: 'E.T.S. Ingeniería Informática UMA',
    description: 'Facultad de Informática en el Campus de Teatinos.',
    address: 'Bulevar Louis Pasteur, 35, 29071 Málaga',
    coordinates: { lat: 36.7157, lng: -4.4777 },
    website: 'https://www.uma.es/etsi-informatica/'
  }
];

export const HOSTS: Host[] = [
  { id: 'h1', name: 'Ayuntamiento de Málaga', website: 'https://malaga.eu' },
  { id: 'h2', name: 'DES Show', website: 'https://des-show.com' },
  { id: 'h3', name: 'WordPress Málaga', website: 'https://www.meetup.com/es-ES/wordpress-malaga/' },
  { id: 'h4', name: 'FYCMA', website: 'https://fycma.com' },
  { id: 'h5', name: 'Comic Con España', website: 'https://comicconmalaga.com ' }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'DES - Digital Enterprise Show 2026',
    description: "The world's leading event on Digital Transformation. Explore the most advanced technologies and innovative solutions..",
    date: new Date('2026-06-09T09:00:00'),
    category: 'conference',
    isFree: false,
    price: 350,
    link: 'https://des-show.com',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000',
    venueId: 'v1',
    hostId: 'h2'
  },
  {
    id: 'e2',
    title: 'Workshop: React 19 y el futuro del Frontend',
    description: 'Creación de bloques para Gutenberg y módulos personalizados para Divi.',
    date: new Date('2026-05-20T18:30:00'),
    category: 'workshop',
    isFree: true,
    link: 'https://meetup.com /es-ES/wordpress-malaga',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000',
    venueId: 'v2',
    hostId: 'h3'
  },
  {
    id: 'e3',
    title: 'CM Málaga 2026',
    description: 'Culture & Museums International Tech Forum. Promoting the technological transformation of the cultural sector.',
    date: new Date('2026-06-22T09:00:00'),
    category: 'conference',
    isFree: false,
    price: 50,
    link: 'https://fycma.com',
    imageUrl: 'https://images.unsplash.com/photo-1554941068-a252680d25d9?q=80&w=1000',
    venueId: 'v1',
    hostId: 'h4'
  },
  {
    id: 'e4',
    title: 'Comic Con Málaga 2026',
    description: 'Cultura pop, ilustración digital y zona gaming.',
    date: new Date('2026-10-01T10:00:00'),
    category: 'expo',
    isFree: false,
    price: 12,
    link: 'https://comicconmalaga.com',
    imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=1000',
    venueId: 'v1',
    hostId: 'h5'
  },
  {
    id: 'e5',
    title: 'Charla para startups',
    description: 'Un café en Tabacalera para compartir errores, aciertos y ver cómo el estado de los proyectos ahora mismo.',
    date: new Date('2026-05-13T17:00:00'),
    category: 'workshop',
    isFree: true,
    link: 'https://polodigital.eu',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000',
    venueId: 'v2',
    hostId: 'h1'
  },
  {
    id: 'e6',
    title: 'Afterwork Málaga Tech',
    description: 'Networking informal en el Muelle Uno para conectar con desarrolladores y emprendedores locales mientras cae el sol.',
    date: new Date('2026-03-30T18:30:00'),
    category: 'meetup',
    isFree: true,
    link: 'https://muelleuno.com ',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000',
    venueId: 'v2',
    hostId: 'h3'
  },
  {
    id: 'e7',
    title: 'El Museo de Informática',
    description: 'Visita guiada por la colección histórica de la Facultad de Informática. De los supercomputadores a la computación personal y la IA',
    date: new Date('2026-05-20T10:00:00'),
    category: 'expo',
    isFree: true,
    link: 'https://www.uma.es/etsi-informatica/',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000',
    venueId: 'v3',
    hostId: 'h1'
  },
  {
    id: 'e8',
    title: 'AI & Big Data Málaga Forum',
    description: 'Encuentro de expertos en análisis de datos aplicada a la industria malagueña.',
    date: new Date('2026-05-15T09:30:00'),
    category: 'conference',
    isFree: false,
    price: 25,
    link: 'https://fycma.com ',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
    venueId: 'v1',
    hostId: 'h4'
  }
];
