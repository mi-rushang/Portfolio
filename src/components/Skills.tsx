
import { Code, Database, Globe, Wrench, BookOpen, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 75 },
        { name: "C++", level: 60 },
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 80 }
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      title: "Web Technologies",
      skills: [
        { name: "React", level: 65 },
        { name: "Tailwind CSS", level: 75 },
        { name: "TypeScript", level: 50 },
        { name: "Git", level: 70 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-green-400" />,
      title: "Tools & Platforms",
      skills: [
        { name: "VS Code", level: 85 },
        { name: "GitHub", level: 70 },
        { name: "MySQL", level: 40 },
        { name: "Arduino IDE", level: 55 }
      ]
    },
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-400" />,
      title: "Academic Skills",
      skills: [
        { name: "Data Structures", level: 60 },
        { name: "Algorithms", level: 55 },
        { name: "Mathematics", level: 80 },
        { name: "Problem Solving", level: 75 }
      ]
    }
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: <Users className="h-5 w-5" /> },
    { name: "Quick Learning", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Creative Thinking", icon: <Wrench className="h-5 w-5" /> },
    { name: "Time Management", icon: <Code className="h-5 w-5" /> }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a first-year student, I'm continuously building my technical foundation. 
            Here are the skills I've been developing and the technologies I'm learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card p-6 hover:glow-effect transition-all duration-300">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                <div className="text-purple-400">
                  {skill.icon}
                </div>
                <span className="text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 italic">
            "Learning is a continuous journey. These percentages reflect my current understanding 
            and confidence level, which I'm working to improve every day!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
