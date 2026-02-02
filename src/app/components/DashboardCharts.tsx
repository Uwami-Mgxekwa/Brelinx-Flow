import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';

const areaData = [
  { name: 'Jan', revenue: 45000, expenses: 32000 },
  { name: 'Feb', revenue: 52000, expenses: 31000 },
  { name: 'Mar', revenue: 48000, expenses: 34000 },
  { name: 'Apr', revenue: 61000, expenses: 38000 },
  { name: 'May', revenue: 55000, expenses: 35000 },
  { name: 'Jun', revenue: 67000, expenses: 40000 },
  { name: 'Jul', revenue: 72000, expenses: 42000 },
];

const pieData = [
  { name: 'Operations', value: 400, color: '#000000' },
  { name: 'Marketing', value: 300, color: '#10B981' },
  { name: 'Payroll', value: 300, color: '#4ADE80' },
  { name: 'Software', value: 200, color: '#E5E7EB' },
];

export const DashboardCharts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-neutral-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-black">Revenue vs Expenses</h3>
            <p className="text-sm text-neutral-400 font-medium">Monthly performance overview</p>
          </div>
          <select className="bg-neutral-50 border-none rounded-lg px-3 py-1.5 text-xs font-semibold focus:ring-2 focus:ring-[#10B981]/20 outline-none">
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F5F5F5" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#9CA3AF', fontSize: 12}} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#9CA3AF', fontSize: 12}}
                tickFormatter={(value) => `$${value/1000}k`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                cursor={{ stroke: '#10B981', strokeWidth: 2 }}
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
              <Area 
                type="monotone" 
                dataKey="expenses" 
                stroke="#000000" 
                strokeWidth={3}
                fillOpacity={0}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-neutral-100">
        <div className="mb-8">
          <h3 className="text-lg font-bold text-black">Expense Breakdown</h3>
          <p className="text-sm text-neutral-400 font-medium">By category this month</p>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={8}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 space-y-3">
          {pieData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm font-medium text-neutral-600">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-black">${item.value}k</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
