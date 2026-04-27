import type { FullEvent } from '../../../types';
import { Map } from './../../events/Map';
import { formatDate, formatTime } from '../../utils/formatters';

interface DetailsProps {
  event: FullEvent;
  onBackClick: () => void;
}

export const Details = ({ event, onBackClick }: DetailsProps) => {

  const date = formatDate(event.date, 'long');
  const time = formatTime(event.date);

  return (
    <article className="bg-white">
      <div className="relative h-[60vh] w-full overflow-hidden bg-slate-100">
        <img src={event.imageUrl} className="w-full h-full object-cover" alt="Imagen del evento" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-10 left-0 w-full">
          <div className="row">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">{event.title}</h1>
          </div>
        </div>
      </div>

      <section className="section !pt-8">
        <div className="row">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-sm font-bold text-accent hover:underline mb-8">
            Volver al listado
          </button>

          {/* grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {event.description}
              </p>
              <div className="flex flex-wrap gap-8 py-8 border-y border-slate-100">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Organiza</h4>
                  <p className="font-bold text-accent-dark">{event.host.name}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Precio</h4>
                  <p className="font-bold text-accent-dark">{event.isFree ? 'Gratis' : `${event.price}€`}</p>
                </div>
              </div>
            </div>

            {/* sidebar */}
            <aside className="space-y-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="space-y-6">

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">🗓️</span>
                    <div>
                      <p className="font-bold text-accent-dark capitalize">
                        {date}
                      </p>
                      <p className="text-sm text-slate-500">A las {time}h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-2xl">📍</span>
                    <div className="w-full">
                      <p className="font-bold text-accent-dark">{event.venue.name}</p>
                      <p className="text-sm text-slate-500 mb-4">{event.venue.address}</p>

                      <div className="w-full h-48 rounded-xl overflow-hidden">
                        <Map
                          lat={event.venue.coordinates.lat}
                          lng={event.venue.coordinates.lng}
                          venue={event.venue.name}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </article>
  );

}