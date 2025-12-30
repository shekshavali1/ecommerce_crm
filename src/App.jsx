import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Users, 
  Settings, 
  DollarSign, 
  ArrowUpRight 
} from 'lucide-react';

// --- SUB-COMPONENT: SIDEBAR ---
const Sidebar = () => (
  <div className="w-64 h-screen bg-slate-900 text-slate-400 p-6 flex flex-col fixed left-0 top-0">
    <div className="text-white font-bold text-2xl mb-10 px-4 flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-500 rounded-lg"></div>
      LuxCRM
    </div>
    <nav className="flex-1 space-y-2">
      {[
        { icon: LayoutDashboard, label: 'Overview', active: true },
        { icon: ShoppingCart, label: 'Orders' },
        { icon: Users, label: 'Customers' },
        { icon: Settings, label: 'Settings' },
      ].map((item) => (
        <div key={item.label} className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${item.active ? 'bg-indigo-600 text-white' : 'hover:bg-white/5 hover:text-white'}`}>
          <item.icon size={20} />
          <span className="font-medium">{item.label}</span>
        </div>
      ))}
    </nav>
  </div>
);

// --- MAIN DASHBOARD PAGE ---
export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Enterprise Dashboard</h1>
            <p className="text-slate-500">Welcome back, admin. Here is your e-commerce overview.</p>
          </div>
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm font-medium hover:bg-slate-50 transition">
            Download Report
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Revenue", value: "$42,500", growth: "+12%", icon: DollarSign },
            { label: "Active Orders", value: "156", growth: "+5%", icon: ShoppingCart },
            { label: "New Customers", value: "42", growth: "+18%", icon: Users },
          ].map((stat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <stat.icon size={24} />
                </div>
                <span className="text-emerald-500 text-sm font-bold flex items-center">
                  {stat.growth} <ArrowUpRight size={14} />
                </span>
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for Data Table */}
        <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm min-h-[400px] flex items-center justify-center">
            <div className="text-center">
                <div className="text-slate-300 mb-4 flex justify-center">
                    <ShoppingCart size={48} />
                </div>
                <p className="text-slate-400 font-medium">No recent orders to display.</p>
                <p className="text-slate-300 text-sm">Once your Django backend is connected, data will appear here.</p>
            </div>
        </div>
      </main>
    </div>
  );
}