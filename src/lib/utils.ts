import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateSavings = (employees: number, tasksPerDay: number, totalTimePerDay: number, hourlyWage: number) => {
  const workdaysPerMonth = 20; // Standard business days in a month
  
  // Calculate total minutes saved per month
  // totalTimePerDay is the time spent per employee per day
  // Multiply by number of employees to get total team time
  const totalTeamTimePerDay = totalTimePerDay * employees;
  const minutesSavedPerMonth = totalTeamTimePerDay * workdaysPerMonth;
  
  // Convert to hours
  const hoursSaved = minutesSavedPerMonth / 60;
  
  // Calculate financial savings
  const monthlySavings = hoursSaved * hourlyWage;
  
  // Convert hours saved to equivalent workdays (standard 8-hour workday)
  const workdaysSaved = hoursSaved / 8;
  
  return { hoursSaved, monthlySavings, workdaysSaved };
};
