import { Link } from "react-router-dom";
import { MessageSquare, ArrowRight, Zap, Shield, Users } from "lucide-react";
import img from "../assets/auth/5.png"

const Home = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-base-300">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={img} 
          alt="Team collaboration" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-base-300/90 via-base-300/80 to-primary/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center">
        
        {/* Glassmorphism Hero Card */}
        <div className="max-w-4xl w-full bg-base-100/10 backdrop-blur-md border border-base-100/20 rounded-3xl p-8 md:p-12 shadow-2xl text-center animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NYDev Platform v1.0
          </div>

          {/* Headlines */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 drop-shadow-md">
            Turning Problems <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Into Products
            </span>
          </h1>

          <p className="text-lg md:text-xl text-base-content/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light text-gray-200">
            Welcome to the ultimate developer collaboration hub. Connect with your team instantly, 
            share code snippets securely, and streamline your workflow from bug report to deployment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              to="/signup" 
              className="btn btn-primary btn-lg h-14 px-8 rounded-xl text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/25"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            
            <Link 
              to="/login" 
              className="btn btn-ghost text-white hover:bg-white/10 btn-lg h-14 px-8 rounded-xl text-lg border border-white/20 hover:border-white/40 transition-all"
            >
              Sign In
            </Link>
          </div>

          {/* Feature Grid (Mini) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8 pt-8 border-t border-white/10">
            <FeatureItem 
              icon={<Zap className="w-5 h-5 text-yellow-400" />}
              title="Real-time Chat"
              desc="Instant messaging optimized for dev teams."
            />
            <FeatureItem 
              icon={<Shield className="w-5 h-5 text-emerald-400" />}
              title="Secure Environment"
              desc="End-to-end encryption for your project data."
            />
            <FeatureItem 
              icon={<Users className="w-5 h-5 text-blue-400" />}
              title="Collaborative"
              desc="Built to bridge the gap between problems and solutions."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Component for Features
const FeatureItem = ({ icon, title, desc }) => (
  <div className="flex items-start gap-3 group p-2 rounded-lg hover:bg-white/5 transition-colors">
    <div className="mt-1 p-2 bg-base-100/20 rounded-lg group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  </div>
);

export default Home;