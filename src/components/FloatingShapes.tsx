
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="floating-shape top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-float"></div>
      <div className="floating-shape top-40 right-20 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rotate-45" style={{ animationDelay: '1s' }}></div>
      <div className="floating-shape bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="floating-shape bottom-20 right-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export { FloatingShapes };
