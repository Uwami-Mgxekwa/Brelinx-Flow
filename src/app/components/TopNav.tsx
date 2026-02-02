import React from 'react';
import { Search, Bell, HelpCircle, ChevronDown, Plus } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export const TopNav = () => {
  return (
    <header className="h-20 bg-white border-b border-neutral-100 px-8 flex items-center justify-between sticky top-0 z-40">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-[#10B981] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search transactions, reports or help..." 
            className="w-full bg-neutral-50 border-none rounded-xl py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#10B981]/20 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-[#10B981] transition-all duration-300 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform duration-300" />
          <span className="text-sm font-semibold">New Entry</span>
        </button>

        <div className="flex items-center gap-4 px-4 border-l border-r border-neutral-100">
          <button className="p-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#10B981] rounded-full border-2 border-white" />
          </button>
          <button className="p-2 text-neutral-500 hover:bg-neutral-50 rounded-lg transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>

        <button className="flex items-center gap-3 p-1 pl-3 hover:bg-neutral-50 rounded-xl transition-colors">
          <div className="text-right">
            <p className="text-sm font-bold text-black leading-none">Alex Sterling</p>
            <p className="text-[10px] text-neutral-400 font-medium mt-1">Administrator</p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neutral-100">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1621388839414-edc733461ebf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhY2NvdW50YW50JTIwaGVhZHNob3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAwNTk5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <ChevronDown size={16} className="text-neutral-400" />
        </button>
      </div>
    </header>
  );
};
