import React from 'react';

const TodaySchedule = () => {
  const schedule = [
    { time: '9:00 AM', task: 'Meeting with clients' },
    { time: '11:00 AM', task: 'Design review' },
    { time: '1:00 PM', task: 'Lunch break' },
    { time: '3:00 PM', task: 'Team brainstorming' },
    { time: '5:00 PM', task: 'Project presentation' },
  ];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Today's Schedule</h2>
      <div>
        {schedule.map((item, index) => (
          <div key={index} className="flex mb-2">
            <div className="w-1/4">{item.time}</div>
            <div className="w-3/4">{item.task}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;
