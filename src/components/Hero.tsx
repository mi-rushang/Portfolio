
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a dummy resume file for demonstration
    const resumeText = `
JOHN DOE
First Year AI-ML Engineering Student
Email: rushanghajare2005@gmail.com | Phone: +91 9699515644
LinkedIn: linkedin.in/rushang-hajare | GitHub: github.com/mi-rushang/

EDUCATION
Bachelor in Technology (AI-ML) -  2028
Zeal College of Engineering and Research, Narhe, Pune - Current GPA: 9.40/10.00

TECHNICAL SKILLS
• Programming Languages: Python,Html, CSS

PROJECTS
1. AI Study Buddy Bot (2025)
   - Built with Python 
   - Answer user questions integrated to Telegram

2. AI Gita Bot (2025)
   - Developed using Python 
   - Answer user questions integrated to Telegram

EXPERIENCE
• Active participant in university coding club
• Completed online courses in Generative AI

ACHIEVEMENTS
• Dean's List - First Semester
• Hackathon participant - University Tech Fest 2024
    `;
    
    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'John_Doe_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
            Hi, I'm <span className="gradient-text">John Doe</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 font-medium">
            First Year Engineering Student
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate about technology and innovation. Currently exploring the world of 
            Artificial Inteligence, Machine Learning, and engineering principles. 
            Always eager to learn and create something amazing!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 glow-effect"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              View My Work
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/mi-rushang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://linkedin.com/rushang-hajare/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:rushanghajare2005@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
