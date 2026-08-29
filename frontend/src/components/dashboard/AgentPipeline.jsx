import { motion } from 'framer-motion';
import Card from '../common/Card';
import AgentNode from './AgentNode';

const AgentPipeline = ({ pipeline }) => {
  return (
    <Card title="Live Agent Pipeline" subtitle="User request → planner → knowledge → vision → analysis → recommendation" className="h-full">
      <div className="mt-2 space-y-3">
        {pipeline.map((item, index) => (
          <motion.div
            key={`${item.name}-${index}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: index * 0.08 }}
          >
            <AgentNode item={item} isLast={index === pipeline.length - 1} />
          </motion.div>
        ))}
      </div>
    </Card>
  );
};

export default AgentPipeline;
