
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a dummy resume file for demonstration
    const resumeText = `
JOHN DOE
First Year Engineering Student
Email: john.doe@email.com | Phone: (123) 456-7890
LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe

EDUCATION
Bachelor of Engineering (Computer Science) - Expected 2028
University Name - Current GPA: 3.8/4.0

TECHNICAL SKILLS
• Programming Languages: Python, C++, JavaScript
• Web Technologies: HTML, CSS, React
• Tools: Git, VS Code, Arduino IDE
• Databases: MySQL basics

PROJECTS
1. Personal Portfolio Website (2024)
   - Built responsive portfolio using React and Tailwind CSS
   - Implemented 3D animations and modern UI/UX design

2. Simple Calculator App (2024)
   - Developed using Python with GUI interface
   - Implemented basic arithmetic operations

EXPERIENCE
• Active participant in university coding club
• Completed online courses in web development
• Volunteer tutor for high school students in mathematics

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
            software development, web technologies, and engineering principles. 
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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="mailto:john.doe@email.com"
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
