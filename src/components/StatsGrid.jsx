import { motion } from 'framer-motion';
import { DollarSign, ShoppingBag, Users, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '$128,430', icon: DollarSign, color: 'text-emerald-600' },
  { label: 'Total Orders', value: '4,321', icon: ShoppingBag, color: 'text-blue-600' },
  { label: 'New Customers', value: '892', icon: Users, color: 'text-indigo-600' },
  { label: 'Growth', value: '+12.5%', icon: TrendingUp, color: 'text-orange-600' },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold mt-1 text-slate-900">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}