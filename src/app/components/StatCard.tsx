import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  delay?: number;
}

export const StatCard = ({ title, value, change, isPositive, icon, delay = 0 }: StatCardProps) => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-2xl border border-neutral-100 hover:border-[#10B981]/30 transition-all duration-300 group cursor-default"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-neutral-50 rounded-xl group-hover:bg-[#10B981]/10 transition-colors">
          <div className="text-black group-hover:text-[#10B981] transition-colors">
            {icon}
          </div>
        </div>
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold transition-all",
          isPositive ? "bg-emerald-50 text-[#10B981]" : "bg-rose-50 text-rose-500"
        )}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-black tracking-tight">{value}</h3>
        <div className="mt-4 w-full h-1 bg-neutral-50 rounded-full overflow-hidden">
          <Motion.div 
            initial={{ width: 0 }}
            animate={{ width: isPositive ? '75%' : '40%' }}
            transition={{ duration: 1, delay: delay + 0.3 }}
            className={cn(
              "h-full rounded-full",
              isPositive ? "bg-[#10B981]" : "bg-rose-500"
            )}
          />
        </div>
      </div>
    </Motion.div>
  );
};
