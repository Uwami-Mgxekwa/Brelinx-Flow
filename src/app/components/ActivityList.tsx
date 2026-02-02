import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownLeft, 
  MoreHorizontal, 
  CreditCard, 
  ShoppingBag, 
  Briefcase,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';

const activities = [
  {
    id: 1,
    title: 'Payment from Global Tech Solutions',
    category: 'Income',
    amount: '+$12,450.00',
    date: '2 hours ago',
    type: 'incoming',
    icon: Briefcase,
    color: 'bg-emerald-50 text-[#10B981]'
  },
  {
    id: 2,
    title: 'Cloud Services Subscription',
    category: 'Software',
    amount: '-$499.00',
    date: '5 hours ago',
    type: 'outgoing',
    icon: CreditCard,
    color: 'bg-neutral-50 text-black'
  },
  {
    id: 3,
    title: 'New Office Equipment',
    category: 'Assets',
    amount: '-$2,100.00',
    date: 'Yesterday',
    type: 'outgoing',
    icon: ShoppingBag,
    color: 'bg-neutral-50 text-black'
  },
  {
    id: 4,
    title: 'Monthly Payroll - Marketing Team',
    category: 'Payroll',
    amount: '-$18,000.00',
    date: 'Yesterday',
    type: 'outgoing',
    icon: Briefcase,
    color: 'bg-neutral-50 text-black'
  },
  {
    id: 5,
    title: 'Retainer Fee - Client Project #42',
    category: 'Income',
    amount: '+$5,000.00',
    date: '2 days ago',
    type: 'incoming',
    icon: Briefcase,
    color: 'bg-emerald-50 text-[#10B981]'
  },
];

export const ActivityList = () => {
  return (
    <div className="bg-white rounded-2xl border border-neutral-100 overflow-hidden">
      <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-black">Recent Activity</h3>
          <p className="text-sm text-neutral-400 font-medium">Your latest transactions and updates</p>
        </div>
        <button className="text-sm font-bold text-[#10B981] hover:underline flex items-center gap-1">
          View all <ExternalLink size={14} />
        </button>
      </div>
      <div className="divide-y divide-neutral-50">
        {activities.map((item) => (
          <div key={item.id} className="p-4 hover:bg-neutral-50 transition-colors group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={cn("p-3 rounded-xl transition-transform group-hover:scale-110", item.color)}>
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-black">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-neutral-400 font-medium">{item.category}</span>
                    <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                    <span className="text-xs text-neutral-400 font-medium">{item.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={cn(
                    "text-sm font-bold",
                    item.type === 'incoming' ? "text-[#10B981]" : "text-black"
                  )}>
                    {item.amount}
                  </p>
                  <p className="text-[10px] text-neutral-400 font-medium">Completed</p>
                </div>
                <button className="p-2 text-neutral-300 hover:text-black hover:bg-neutral-100 rounded-lg transition-all">
                  <MoreHorizontal size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
