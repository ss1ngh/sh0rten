import { Link as LinkIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-4 sm:py-12 bg-white/20 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <div className="bg-black p-2 rounded-lg">
            <LinkIcon className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl text-black">sh0rten</span>
        </div>
        <p className="text-sm text-black/70">
          © 2025 sh0rten. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
