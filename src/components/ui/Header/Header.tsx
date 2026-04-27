interface HeaderProps {
  title: string;
  description: string;
}

export const Header = ({ title, description }: HeaderProps) => (
  <header className="max-w-6xl mx-auto mb-12">
    <h1 className="text-5xl font-black text-accent-dark tracking-tighter leading-none mb-3">
      
      {title}
    </h1>
    <p className="text-slate-600 mt-2 text-lg">
      {description}
    </p>
  </header>
);
interface HeaderProps {
  title: string;
  description: string;
}
