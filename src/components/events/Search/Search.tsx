interface SearchProps {
  value: string;
  onSearchChange: (value: string) => void;
}

export const Search = ({value, onSearchChange } : SearchProps )=> (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Busca eventos..."
      value={value}
      onChange={(e) => onSearchChange(e.target.value)}
      className={`w-full bg-white border border-slate-200 rounded-2xl 
        py-3 px-6 text-sm focus:border-accent outline-none transition-colors`}
    />
  </div>
);