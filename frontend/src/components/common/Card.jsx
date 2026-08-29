import { motion } from 'framer-motion';
import { CardSkeleton, PipelineSkeleton } from './Skeleton';

const Card = ({ title, subtitle, children, className = '', hover = true, loading = false, skeletonVariant = 'default', ...props }) => {
  if (loading) {
    return skeletonVariant === 'pipeline' ? <PipelineSkeleton /> : <CardSkeleton />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      whileHover={hover ? { y: -2, scale: 1.005 } : undefined}
      className={`glass-panel p-5 ${className}`}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            {title && <h3 className="card-title">{title}</h3>}
            {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
          </div>
        </div>
      )}
      {children}
    </motion.div>
  );
};

export default Card;
