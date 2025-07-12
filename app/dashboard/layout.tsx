"use client";

import { useState } from "react";
import { DashboardHeader } from "@/components/ui/dashboard-header";
import { Sidebar } from "@/components/ui/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar with Sheet component */}
      <div className="md:hidden">
        <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="fixed left-4 top-4 z-40"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64">
            <Sidebar
              isMobile={true}
              closeSidebar={() => setIsSidebarOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main content area - takes remaining width */}
      <div className="flex-1 md:ml-16">
        <DashboardHeader />
        <main className="container mx-auto p-4 sm:p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
