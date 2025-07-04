
import { ExternalLink, Github, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive 3D portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth animations and modern design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "3D Animations"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://portfolio-demo.com",
      category: "Web Development"
    },
    {
      title: "Python Calculator",
      description: "A feature-rich calculator application with GUI built using Python and Tkinter, supporting advanced mathematical operations.",
      tech: ["Python", "Tkinter", "Math Libraries"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "#",
      category: "Desktop Application"
    },
    {
      title: "Student Grade Tracker",
      description: "A simple web application to track student grades and calculate GPA, built as a learning project for web development.",
      tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      github: "https://github.com",
      demo: "https://grade-tracker-demo.com",
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            My Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here are some projects I've worked on during my first year. Each project represents 
            a learning milestone and showcases different skills I've been developing.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 overflow-hidden hover:glow-effect"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo !== "#" && (
                    <Button 
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">More projects coming soon as I continue learning!</p>
          <Button 
            variant="outline"
            className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white"
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
