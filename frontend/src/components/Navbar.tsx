import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link as LinkIcon, User, LogOut, Home } from "lucide-react";

interface NavbarProps {
  isAuthenticated?: boolean;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

export function Navbar({ isAuthenticated = false, user }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <nav className="bg-background/40 backdrop-blur-lg border border-background/30 rounded-xl border-b sticky top-4 mx-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <Link to="/" className=" flex items-center space-x-2">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl">sh0rten</span>
          </Link>

          {/* Navigation Links */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            <Link
              to="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}