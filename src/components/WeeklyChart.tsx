import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 6 },
  { name: 'Wed', tasks: 3 },
  { name: 'Thu', tasks: 8 },
  { name: 'Fri', tasks: 5 },
  { name: 'Sat', tasks: 2 },
  { name: 'Sun', tasks: 4 },
];

export const WeeklyChart = () => {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            dy={10}
          />
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ 
              backgroundColor: '#FFF', 
              borderRadius: '12px', 
              border: 'none', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' 
            }}
          />
          <Bar dataKey="tasks" radius={[6, 6, 6, 6]}>
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.tasks >= 6 ? '#FFB5D6' : '#E5E7EB'} 
                className="transition-all duration-300 hover:opacity-80"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
