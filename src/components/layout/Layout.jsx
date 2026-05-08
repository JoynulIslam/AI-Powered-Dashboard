/**
 * components/layout/Layout.jsx
 * Shell: responsive sidebar + top navbar + main content outlet
 */

import { useState } from "react";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Mobile Overlay  */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Area  */}
        <div className="flex flex-1 flex-col min-w-0 overflow-hidden">
          <Navbar onMenuClick={() => setSidebarOpen(true)} />
        </div>
      </div>
    </>
  );
}
