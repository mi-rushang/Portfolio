
import { Calendar, Award, Users, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "First Year Engineering Student",
      organization: "Zeal College of Engineering and Research, Narhe, Pune",
      period: "2024 - Present",
      type: "Education",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />,
      achievements: [
        "Maintained Dean's List status with GPA above 3.8",
        "Active member of Computer Science Club",
        "Completed coursework in Programming Fundamentals, Calculus, and Physics"
      ]
    },
    {
      title: "Coding Club Member",
      organization: "University Tech Society",
      period: "Sep 2024 - Present",
      type: "Extracurricular",
      icon: <Users className="h-6 w-6 text-purple-400" />,
      achievements: [
        "Participate in weekly coding challenges and workshops",
        "Collaborate on group projects with senior students",
        "Attend guest lectures from industry professionals"
      ]
    },
    {
      title: "Hackathon Participant",
      organization: "University Tech Fest 2024",
      period: "Oct 2024",
      type: "Competition",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      achievements: [
        "Built a web application in 24 hours with a team of 4",
        "Learned new technologies under pressure",
        "Presented project to industry judges"
      ]
    },
    {
      title: "Volunteer Math Tutor",
      organization: "Local High School",
      period: "Jun 2024 - Aug 2024",
      type: "Volunteer",
      icon: <Users className="h-6 w-6 text-green-400" />,
      achievements: [
        "Helped 15+ students improve their math grades",
        "Developed teaching and communication skills",
        "Created study materials and practice problems"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Education': return 'bg-blue-600/20 text-blue-300 border-blue-400/30';
      case 'Extracurricular': return 'bg-purple-600/20 text-purple-300 border-purple-400/30';
      case 'Competition': return 'bg-yellow-600/20 text-yellow-300 border-yellow-400/30';
      case 'Volunteer': return 'bg-green-600/20 text-green-300 border-green-400/30';
      default: return 'bg-gray-600/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            Experience & Activities
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While I'm just starting my engineering journey, I've been actively engaging in 
            various activities to build my skills and gain practical experience.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-20">
                {/* Timeline dot */}
                <div className="absolute -left-[3.25rem] top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-background"></div>
                
                <div className="glass-card p-6 hover:glow-effect transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-center mb-2 md:mb-0">
                      {exp.icon}
                      <div className="ml-3">
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-purple-300 font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:items-end">
                      <div className="flex items-center text-gray-400 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(exp.type)}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-purple-300 mb-3">Looking Forward</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm excited to gain more hands-on experience through internships, advanced projects, 
              and continued involvement in tech communities. Every opportunity is a chance to learn and grow!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
