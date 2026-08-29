const Skeleton = ({ className = '', variant = 'rect' }) => {
  const base = 'animate-pulse bg-slate-800';
  const shapes = {
    rect: 'rounded-xl',
    circle: 'rounded-full',
    text: 'rounded-lg h-3',
  };

  return <div className={`${base} ${shapes[variant]} ${className}`} />;
};

export const CardSkeleton = () => (
  <div className="glass-panel p-5">
    <div className="flex items-start justify-between gap-3">
      <Skeleton className="h-4 w-24" />
      <Skeleton variant="circle" className="h-11 w-11" />
    </div>
    <div className="mt-4">
      <Skeleton className="h-7 w-32" />
      <Skeleton className="mt-2 h-4 w-40" />
    </div>
    <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-3">
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-4 w-24" />
    </div>
  </div>
);

export const PipelineSkeleton = () => (
  <div className="space-y-3">
    {[0, 1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-3">
        <Skeleton variant="circle" className="h-10 w-10 shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-48" />
        </div>
      </div>
    ))}
  </div>
);

export default Skeleton;
