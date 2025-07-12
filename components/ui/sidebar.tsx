"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  BookOpen,
  Users,
  MessageSquare,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SidebarProps {
  isMobile?: boolean;
  closeSidebar?: () => void;
}

export function Sidebar({ isMobile = false, closeSidebar }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/dashboard/courses", icon: BookOpen, label: "Courses" },
    { href: "/dashboard/tutors", icon: Users, label: "Tutors" },
    { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
  ];

  const handleItemClick = () => {
    if (isMobile && closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <aside 
      className={cn(
        "flex flex-col bg-slate-900 text-white",
        isMobile 
          ? "h-full w-full" 
          : "fixed inset-y-0 left-0 z-20 w-16 border-r"
      )}
    >
      {/* User profile at top for mobile */}
      {isMobile && (
        <div className="p-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/avatars/user-avatar.png" alt="User" />
              <AvatarFallback className="bg-purple-100 text-purple-600">AL</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Alex</p>
              <p className="text-xs text-slate-400">alex@example.com</p>
            </div>
          </div>
        </div>
      )}

      <TooltipProvider delayDuration={0}>
        <nav className={cn(
          "flex flex-col items-center gap-5 px-2 py-5",
          isMobile && "items-start px-4"
        )}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return isMobile ? (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleItemClick}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md w-full",
                  isActive 
                    ? "bg-purple-700 text-white" 
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ) : (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-md",
                      isActive
                        ? "bg-purple-700 text-white"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{item.label}</TooltipContent>
              </Tooltip>
            )}
          })}
        </nav>
      </TooltipProvider>

      {/* Logout at bottom */}
      <div className={cn("mt-auto", isMobile ? "p-4 border-t border-slate-800" : "pb-5")}>
        {isMobile ? (
          <Link 
            href="/login" 
            onClick={handleItemClick}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
          >
            <LogOut className="h-5 w-5" />
            <span>Log out</span>
          </Link>
        ) : (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/login"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-slate-300 hover:text-white hover:bg-slate-800"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Log out</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Log out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </aside>
  );
}