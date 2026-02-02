import React, { useState } from 'react';
import { Sidebar } from '@/app/components/Sidebar';
import { TopNav } from '@/app/components/TopNav';
import { StatCard } from '@/app/components/StatCard';
import { DashboardCharts } from '@/app/components/DashboardCharts';
import { ActivityList } from '@/app/components/ActivityList';
import { 
  TrendingUp, 
  CreditCard, 
  BarChart3, 
  Wallet,
  ArrowUpRight,
  Filter,
  Calendar,
  Download,
  Plus,
  Users
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';

const App = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex font-sans">
      <Sidebar isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-y-auto p-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <Motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-black tracking-tight"
              >
                Dashboard Overview
              </Motion.h1>
              <Motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="text-neutral-500 font-medium mt-1"
              >
                Welcome back, Alex. Here's what's happening with your accounts today.
              </Motion.p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-xl text-sm font-bold text-black hover:bg-neutral-50 transition-all cursor-pointer shadow-sm">
                <Calendar size={18} className="text-neutral-400" />
                <span>Feb 2, 2026 - Feb 9, 2026</span>
              </button>
              <button className="flex items-center gap-2 bg-white border border-neutral-200 px-4 py-2 rounded-xl text-sm font-bold text-black hover:bg-neutral-50 transition-all cursor-pointer shadow-sm">
                <Filter size={18} className="text-neutral-400" />
                <span>Filters</span>
              </button>
              <button className="flex items-center gap-2 bg-[#10B981] px-4 py-2 rounded-xl text-sm font-bold text-white hover:bg-black transition-all cursor-pointer shadow-sm shadow-[#10B981]/20">
                <Download size={18} />
                <span>Export PDF</span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Total Revenue" 
              value="R1,284,300.00" 
              change="+12.5%" 
              isPositive={true}
              icon={<TrendingUp size={24} />}
              delay={0.1}
            />
            <StatCard 
              title="Total Expenses" 
              value="R643,200.00" 
              change="-2.4%" 
              isPositive={true}
              icon={<CreditCard size={24} />}
              delay={0.2}
            />
            <StatCard 
              title="Net Profit" 
              value="R641,100.00" 
              change="+18.2%" 
              isPositive={true}
              icon={<BarChart3 size={24} />}
              delay={0.3}
            />
            <StatCard 
              title="Cash Flow" 
              value="R428,900.00" 
              change="-5.1%" 
              isPositive={false}
              icon={<Wallet size={24} />}
              delay={0.4}
            />
          </div>

          {/* Charts Section */}
          <div className="mb-8">
            <DashboardCharts />
          </div>

          {/* Bottom Grid: Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <ActivityList />
            </div>
            
            <div className="space-y-6">
              {/* Quick Actions Card */}
              <div className="bg-black rounded-2xl p-6 text-white overflow-hidden relative group">
                <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#10B981] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  <button className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col gap-2 hover:bg-[#10B981] hover:border-[#10B981] transition-all group/btn">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center group-hover/btn:bg-white/20">
                      <Plus className="text-[#10B981] group-hover/btn:text-white" size={20} />
                    </div>
                    <span className="text-xs font-bold">Add Invoice</span>
                  </button>
                  <button className="bg-neutral-900 border border-neutral-800 p-4 rounded-xl flex flex-col gap-2 hover:bg-[#10B981] hover:border-[#10B981] transition-all group/btn">
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center group-hover/btn:bg-white/20">
                      <Users className="text-[#10B981] group-hover/btn:text-white" size={20} />
                    </div>
                    <span className="text-xs font-bold">Add Client</span>
                  </button>
                </div>
              </div>

              {/* Tips/Insight Card */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <TrendingUp className="text-[#10B981]" size={20} />
                  </div>
                  <h3 className="font-bold text-black">Smart Insight</h3>
                </div>
                <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                  Your expenses are 12% lower than last month. Consider allocating the surplus to your <span className="text-[#10B981] font-bold">Marketing budget</span> for Q2 growth.
                </p>
                <button className="w-full mt-6 py-3 rounded-xl border border-neutral-100 text-sm font-bold text-black hover:bg-neutral-50 transition-all flex items-center justify-center gap-2">
                  View Detail Report
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
