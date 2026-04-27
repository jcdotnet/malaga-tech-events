import { CATEGORY, formatDate } from "../../utils/formatters";
import type { FullEvent } from "../../../types";

interface CardProps {
  event: FullEvent;
  onCardSelect: (id: string) => void;
}

export const Card = ({ event, onCardSelect }: CardProps) => {

  const date = formatDate(event.date, 'short');

  return (
    <article onClick={() => onCardSelect(event.id)} className={`
      bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col
      hover:shadow-md hover:border-accent transition-all duration-300 cursor-pointer`
    }>
      <div className="relative h-48 overflow-hidden">
        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4">
          <span
            className="bg-white px-2 py-1 rounded text-[10px] font-black text-accent-dark uppercase">
            {CATEGORY[event.category]}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-accent-dark mb-2 leading-tight">
          {event.title}
        </h2>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {event.description}
        </p>

        <div className="mt-auto pt-4 border-t border-slate-100 space-y-2">
          <div className="flex items-center text-sm text-slate-500">
            <span className="mr-2">📍</span>
            <span className="truncate">{event.venue.name}</span>
          </div>
          <div className="flex items-center text-sm text-slate-500">
            <span className="mr-2">🗓️</span>
            {date}
          </div>
        </div>
      </div>
    </article>
  );
};