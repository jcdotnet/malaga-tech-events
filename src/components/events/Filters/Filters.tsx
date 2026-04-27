import { CATEGORIES } from '../../utils/formatters';
import type { EventCategory } from '../../../types';

interface FiltersProps {
  active: string;
  onCategoryChange: (category: EventCategory | 'all') => void;
}

export const Filters = ({ active, onCategoryChange }: FiltersProps) => {

  const categories = Object.keys(CATEGORIES) as (EventCategory | 'all')[];

  return (
    <div className="flex flex-wrap gap-2">

      {categories.map((cat) => {

        let buttonClass = 'px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all';
        buttonClass += active === cat ? ' bg-accent-dark text-white order-accent-dark shadow-md' :
          ' bg-white text-slate-500 border border-slate-200 hover:border-accent hover:text-accent';

        return (
          <button key={cat} onClick={() => onCategoryChange(cat)} className={buttonClass}>
            {CATEGORIES[cat]}
          </button>
        );
      })}

    </div >
  );
};