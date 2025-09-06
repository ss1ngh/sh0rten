import { Link } from "react-router-dom";
import { Link as LinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Navbar({ onFeaturesClick }) {
  return (
    <nav className="sticky top-4 z-50">
      <div className="flex items-center justify-between bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-full w-[90%] max-w-4xl mx-auto px-6 h-16">
        
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-black p-2 rounded-lg">
            <LinkIcon className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-black">sh0rten</span>
        </Link>

        
        <a
          href="https://github.com/ss1ngh/sh0rten"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-gray-700 transition-colors"
        >
          <FaGithub className="h-6 w-6" />
        </a>
      </div>
    </nav>
  );
}
