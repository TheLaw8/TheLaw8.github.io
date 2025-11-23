import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { BlogPost } from '../types';
import { getPostsByMonth } from '../services/blogData';

interface CalendarProps {
  onSelectDate: (postId: string) => void;
  posts: BlogPost[]; // Pass all posts to mark dates
}

export const Calendar: React.FC<CalendarProps> = ({ onSelectDate, posts }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  // Create a map of date string -> postId for O(1) lookup
  const postMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    posts.forEach(p => {
      map[p.date] = p.id;
    });
    return map;
  }, [posts]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0 is Sunday

  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
  }

  // Days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const postId = postMap[dateStr];
    const hasPost = !!postId;

    days.push(
      <button
        key={d}
        onClick={() => hasPost && postId && onSelectDate(postId)}
        disabled={!hasPost}
        className={`
          h-10 w-10 flex items-center justify-center rounded-full transition-all duration-300
          ${hasPost 
            ? 'bg-nature-500 text-white hover:bg-nature-600 cursor-pointer shadow-sm font-bold' 
            : 'text-nature-300 cursor-default font-light'
          }
        `}
      >
        {d}
      </button>
    );
  }

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-nature-100 w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="p-1 hover:bg-nature-50 rounded-full text-nature-600">
          <ChevronLeft size={20} />
        </button>
        <h3 className="font-serif text-lg font-bold text-nature-800">
          {monthNames[month]} {year}
        </h3>
        <button onClick={nextMonth} className="p-1 hover:bg-nature-50 rounded-full text-nature-600">
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {['S','M','T','W','T','F','S'].map((day, i) => (
          <div key={i} className="text-xs font-bold text-nature-400">{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 place-items-center">
        {days}
      </div>
      <div className="mt-4 text-center">
        <span className="text-xs text-nature-500 italic flex items-center justify-center gap-2">
           <span className="block w-2 h-2 rounded-full bg-nature-500"></span>
           Days with entries
        </span>
      </div>
    </div>
  );
};