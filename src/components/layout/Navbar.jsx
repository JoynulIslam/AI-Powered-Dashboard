/**
 * components/layout/Navbar.jsx.jsx
 * Top navigation bar with page title , dark mode toggle , and mobile menu .
 */

import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import useAppStore from "../../store/useAppStore";

const TITLES = {
  "/dashboard": "Dashboard",
  "/tasks": "Task Planer",
  "/notes": "Notes & Summaries",
  "/reminders": "Smart Reminders",
  "/analytics": "Analytics",
};

export const Navbar = ({ onMenuClick }) => {
  const { pathname } = useLocation();
  return (
    <>
      <header className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-900">
        {/* Left  */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden btn-ghost p-2"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-bold text-slate-800 dark:text-white">
            {TITLES[pathname] || "FlowDesk"}
          </h1>
        </div>
      </header>
    </>
  );
};
