import { Link, useLocation } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";

export function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white/40 backdrop-blur-lg border border-white/30 rounded-xl sticky top-2 mx-4 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-black p-2 rounded-lg">
              <LinkIcon className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl text-black">sh0rten</span>
          </Link>

          {/* Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === "/"
                  ? "text-black underline"
                  : "text-black/70 hover:text-black"
              }`}
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-sm font-medium text-black/70 hover:text-black transition-colors"
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
