import React, { useState } from "react";
import { Logo } from "@/components/logo";
import {
  Home,
  FileText,
  BarChart3,
  User,
  Settings,
  HelpCircle,
  Target,
} from "lucide-react";

const NavItem = ({
  icon,
  children,
  active = false,
  isCollapsed = false,
}: {
  icon: React.ReactElement;
  children: React.ReactNode;
  active?: boolean;
  isCollapsed?: boolean;
}) => (
  <a
    href="#"
    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      active
        ? "bg-gray-200 text-black"
        : "text-gray-300 hover:bg-gray-800 hover:text-white"
    } ${isCollapsed ? "justify-center" : ""}`}
    title={isCollapsed ? children?.toString() : undefined}
  >
    <div
      className={`p-1.5 ${isCollapsed ? "" : "mr-3"} rounded-lg ${
        active ? "bg-black" : "bg-gray-700"
      }`}
    >
      {React.cloneElement(icon, {
        className: `h-5 w-5 ${active ? "text-white" : "text-white"}`,
      } as React.HTMLAttributes<SVGElement>)}
    </div>
    {!isCollapsed && children}
  </a>
);

export default function Sidebar({
  onToggle,
}: {
  onToggle?: (collapsed: boolean) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    onToggle?.(newState);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen flex-shrink-0 bg-white/5 backdrop-blur-lg border-r border-white/10 p-4 flex flex-col justify-between z-40 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div>
        {/* Header with hamburger menu */}
        <div className="flex items-center justify-center mb-8 relative">
          {!isCollapsed && (
            <h1 className="text-2xl font-bold text-white tracking-wider transition-opacity duration-300">
              <Logo className="mr-2 inline-block" />
              DARZI AI
            </h1>
          )}
          <button
            onClick={toggleSidebar}
            className={`${
              isCollapsed
                ? "absolute top-0 left-1/2 transform -translate-x-1/2"
                : "absolute right-0"
            } p-2 text-white hover:bg-white/10 rounded-lg transition-all duration-200`}
            aria-label="Toggle sidebar"
          >
            <div className="flex flex-col space-y-1">
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isCollapsed ? "" : "rotate-0"
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isCollapsed ? "" : "opacity-100"
                }`}
              ></div>
              <div
                className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                  isCollapsed ? "" : "rotate-0"
                }`}
              ></div>
            </div>
          </button>
        </div>
        <nav className="space-y-2">
          <NavItem icon={<Home />} active isCollapsed={isCollapsed}>
            Dashboard
          </NavItem>
          <NavItem icon={<FileText />} isCollapsed={isCollapsed}>
            Resume Editor
          </NavItem>
          <NavItem icon={<Target />} isCollapsed={isCollapsed}>
            ATS Checker
          </NavItem>
          <NavItem icon={<BarChart3 />} isCollapsed={isCollapsed}>
            Templates
          </NavItem>
          {!isCollapsed && (
            <p className="text-xs font-bold uppercase text-gray-500 mt-6 mb-2 px-4 transition-opacity duration-300">
              Account
            </p>
          )}
          <NavItem icon={<User />} isCollapsed={isCollapsed}>
            Profile
          </NavItem>
          <NavItem icon={<Settings />} isCollapsed={isCollapsed}>
            Settings
          </NavItem>
        </nav>
      </div>
      {!isCollapsed && (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-white text-center relative overflow-hidden transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="relative z-10">
            <HelpCircle className="mx-auto h-10 w-10 mb-3" />
            <h3 className="font-bold">Need help?</h3>
            <p className="text-xs mt-1 mb-3">Please check our docs</p>
            <button className="bg-white hover:bg-gray-200 text-black font-bold text-xs py-2 px-4 rounded-lg w-full transition-colors">
              DOCUMENTATION
            </button>
          </div>
        </div>
      )}
    </aside>
  );
}
