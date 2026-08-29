const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400/70 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60';

  const variants = {
    primary: 'bg-sky-500 text-slate-950 hover:bg-sky-400 shadow-lg shadow-sky-500/20',
    secondary: 'bg-slate-800 text-slate-100 border border-slate-700 hover:bg-slate-700',
    ghost: 'bg-transparent border border-slate-700 text-slate-200 hover:bg-slate-800/80',
    danger: 'bg-rose-500/15 text-rose-200 border border-rose-500/30 hover:bg-rose-500/20',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
