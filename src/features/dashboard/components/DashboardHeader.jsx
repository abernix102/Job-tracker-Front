import React from 'react'
import { Briefcase} from 'lucide-react';
import ModeToggle from './ModeToggle';
export default function DashboardHeader() {
  return (
    <header className='flex items-center justify-between p-4'>
        <div className="flex items-center gap-2"> 
            <Briefcase className='h-6'/>
            <span className='text-bold text-xl'>Job Tracker</span>
        </div>
        <ModeToggle/>
    </header>
  )
}
