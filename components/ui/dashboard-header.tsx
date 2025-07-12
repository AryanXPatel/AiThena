"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Search, User, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function DashboardHeader() {
  const pathname = usePathname();

  // Determine if we're on a tool page (any path deeper than /dashboard)
  const pathSegments = pathname?.split("/").filter(Boolean) || [];
  const isToolPage = pathSegments.length > 1 && pathSegments[0] === "dashboard";
  const toolName = isToolPage
    ? pathSegments[1].charAt(0).toUpperCase() + pathSegments[1].slice(1)
    : "";

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white/60 backdrop-blur-sm px-4 md:px-6">
      {/* Dynamic breadcrumb navigation - hidden on smallest screens */}
      <div className="hidden sm:block">
        <Breadcrumb className="text-muted-foreground">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Aithena
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {/* Conditionally show tool name in breadcrumb if on a tool page */}
            {isToolPage && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-sm font-medium">
                    {toolName}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Page title for mobile */}
      <div className="sm:hidden">
        <h1 className="text-lg font-semibold">
          {isToolPage ? toolName : "Dashboard"}
        </h1>
      </div>

      {/* Right side with search and user profile */}
      <div className="ml-auto flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
          />
        </div>

        {/* Search button for mobile */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="h-5 w-5" />
        </Button>

        {/* User profile dropdown - visible on all screens */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/user-avatar.png" alt="User" />
                <AvatarFallback className="bg-purple-100 text-purple-600">
                  AL
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Alex</p>
                <p className="text-xs leading-none text-muted-foreground">
                  alex@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
