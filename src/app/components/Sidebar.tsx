import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  FileText, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  PieChart,
  Wallet,
  Building2,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
}

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Receipt, label: 'Transactions', active: false },
  { icon: Users, label: 'Customers', active: false },
  { icon: Building2, label: 'Suppliers', active: false },
  { icon: FileText, label: 'Reports', active: false },
  { icon: Wallet, label: 'Payments', active: false },
  { icon: TrendingUp, label: 'Budgets', active: false },
  { icon: PieChart, label: 'Tax Center', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  return (
    <Motion.div
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className="h-screen bg-black text-white flex flex-col sticky top-0 left-0 z-50 transition-all duration-300 ease-in-out border-r border-neutral-800"
    >
      <div className="p-6 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <Motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="font-bold text-xl tracking-tight">SAGE <span className="text-[#10B981]">X</span></span>
            </Motion.div>
          )}
        </AnimatePresence>
        {isCollapsed && (
          <div className="w-8 h-8 bg-[#10B981] rounded-lg flex items-center justify-center mx-auto">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
        )}
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-200 group relative",
              item.active 
                ? "bg-white text-black" 
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            )}
          >
            <item.icon size={20} className={cn(
              "shrink-0",
              item.active ? "text-[#10B981]" : "group-hover:text-[#10B981]"
            )} />
            {!isCollapsed && (
              <span className="font-medium">{item.label}</span>
            )}
            {isCollapsed && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-neutral-800">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-neutral-900 transition-colors text-neutral-400"
        >
          {isCollapsed ? <ChevronRight size={20} /> : (
            <div className="flex items-center gap-2">
              <ChevronLeft size={20} />
              <span className="text-sm font-medium">Collapse Sidebar</span>
            </div>
          )}
        </button>
      </div>
    </Motion.div>
  );
};
