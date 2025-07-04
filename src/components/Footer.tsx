
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold gradient-text font-poppins mb-2">
              John Doe
            </div>
            <p className="text-gray-400 text-sm">
              First Year Engineering Student
            </p>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Building the future, one line of code at a time
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:john.doe@email.com"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end">
              Made with <Heart className="h-4 w-4 text-red-400 mx-1" /> and lots of coffee
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © {currentYear} John Doe. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-xs">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
