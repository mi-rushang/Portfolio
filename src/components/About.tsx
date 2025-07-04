
import { Code, BookOpen, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-purple-400" />,
      title: "Coding Enthusiast",
      description: "Learning programming languages and building projects to solve real-world problems."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-cyan-400" />,
      title: "Quick Learner",
      description: "Always exploring new technologies and concepts with curiosity and dedication."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-400" />,
      title: "Problem Solver",
      description: "Enjoy breaking down complex problems into manageable solutions."
    },
    {
      icon: <Target className="h-8 w-8 text-green-400" />,
      title: "Goal Oriented",
      description: "Focused on building a strong foundation in engineering and technology."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text font-poppins">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a first-year engineering student with a passion for technology and innovation. 
            Currently building my foundation in computer science while exploring various domains 
            of engineering and software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">My Journey So Far</h3>
            <p className="text-gray-300 leading-relaxed">
              As a first-year engineering student, I'm at the exciting beginning of my technical journey. 
              I've been diving deep into programming fundamentals, exploring web development, and 
              working on small projects that challenge me to think creatively.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My curiosity drives me to learn beyond the classroom. I spend time understanding 
              how technology works, practicing coding problems, and staying updated with 
              industry trends. Every day brings new learning opportunities!
            </p>
          </div>
          
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold text-purple-300 mb-6">Academic Focus</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Data Structures & Algorithms</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Web Development</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span className="text-gray-300">Mathematics & Engineering Fundamentals</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Problem Solving</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index} 
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 hover:glow-effect"
            >
              <div className="mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
