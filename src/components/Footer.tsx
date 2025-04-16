
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <h3 className="font-display text-lg font-medium text-gray-900 mb-4">Fashion Sense Explorer</h3>
            <p className="text-gray-600 text-sm">
              An interactive visualization of different machine learning models trained on the Fashion MNIST dataset.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-primary">Fashion MNIST Dataset</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Scikit-Learn Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">PyTorch Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Source Code</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <GitHubLogoIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <TwitterLogoIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <LinkedInLogoIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Fashion Sense Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
