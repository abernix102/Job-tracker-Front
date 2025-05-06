// import React, { useState } from 'react';
import { Sun } from 'lucide-react';

export default function ModeToggle() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [theme , setTheme] = useState()
  return (
    <button className="p-2 rounded dark:bg-black cursor-pointer bg-white/20 hover:bg-gray-200 border-2 border-gray-200">
      <Sun className="h-6 " />
    </button>
  );
}