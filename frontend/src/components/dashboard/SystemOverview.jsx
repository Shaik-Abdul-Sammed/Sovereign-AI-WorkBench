import { dashboardData } from '../../data/mockDashboardData';
import StatusCard from './StatusCard';

const SystemOverview = () => {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardData.systemOverview.map((item) => (
        <StatusCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default SystemOverview;
