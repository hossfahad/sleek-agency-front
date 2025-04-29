import React, { useState } from 'react';
import { Slider } from '../components/ui/slider';
import { Input } from '../components/ui/input';
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip';
import { Button } from '../components/ui/button';
import { calculateSavings } from '../lib/utils';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';

const SavingsCalculator = () => {
  const [employees, setEmployees] = useState(0);
  const [hourlyWage, setHourlyWage] = useState(25);
  const [tasksPerDay, setTasksPerDay] = useState(0);
  const [timePerTask, setTimePerTask] = useState(0);

  const { hoursSaved, monthlySavings, workdaysSaved } = calculateSavings(employees, tasksPerDay, timePerTask, hourlyWage);

  return (
    <div className="min-h-screen bg-[#0F3D3E] text-white p-6">
      <AnnouncementBanner />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-4">Input Your Details</h2>
          <div className="mb-4">
            <label className="block mb-2">How many employees?</label>
            <Tooltip>
              <TooltipTrigger>
                <Slider value={[employees]} onChange={(value) => setEmployees(value[0])} min={0} max={100} />
              </TooltipTrigger>
              <TooltipContent>
                This helps us understand how big your team is. More people = more repetitive tasks.
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Average hourly wage ($)</label>
            <Tooltip>
              <TooltipTrigger>
                <Input type="number" value={hourlyWage} onChange={(e) => setHourlyWage(Number(e.target.value))} />
              </TooltipTrigger>
              <TooltipContent>
                How much do you pay per hour on average? We'll use $25/hr if you’re not sure.
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Number of repetitive tasks per day</label>
            <Tooltip>
              <TooltipTrigger>
                <Input type="number" value={tasksPerDay} onChange={(e) => setTasksPerDay(Number(e.target.value))} />
              </TooltipTrigger>
              <TooltipContent>
                Think about the repeating stuff you or your team does — like answering calls, emails, scheduling, etc.
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Average time per task (minutes)</label>
            <Tooltip>
              <TooltipTrigger>
                <Input type="number" value={timePerTask} onChange={(e) => setTimePerTask(Number(e.target.value))} />
              </TooltipTrigger>
              <TooltipContent>
                Roughly how long does each task take? Like one phone call or email — 2, 5, maybe 10 minutes?
              </TooltipContent>
            </Tooltip>
          </div>
          <Button className="mt-4">Talk to Us</Button>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Your Savings</h2>
          <div className="mb-4">
            <p>You could save <strong>{hoursSaved.toFixed(1)} hours/month</strong></p>
            <p>Worth about <strong>${monthlySavings.toFixed(2)}/month</strong></p>
            <p>That’s like getting back <strong>{workdaysSaved.toFixed(1)} full workdays</strong></p>
          </div>
          <div className="bg-gray-700 p-4 rounded">
            <h3 className="text-lg font-bold">Without Enhanced Points</h3>
            <p>0 saved</p>
            <p>{hoursSaved.toFixed(1)} hours lost to manual work</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;