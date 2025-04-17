
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Shirt className="h-6 w-6 text-primary" />
          <span className="font-display text-xl font-medium">Maison De Parure</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Documentation
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <GitHubLogoIcon className="h-4 w-4" />
            <span className="hidden sm:inline">View on GitHub</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
