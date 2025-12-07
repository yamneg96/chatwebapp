import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import img from '../assets/auth/5.png'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  const BACKGROUND_IMAGE_URL = img;

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={BACKGROUND_IMAGE_URL} 
          alt="Abstract tech background" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for Mood and Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-base-300/90 via-base-300/80 to-primary/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Centered Form Card (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-md mx-auto p-6 sm:p-8">
        <div className="bg-base-100/10 backdrop-blur-lg border border-base-100/20 rounded-3xl p-8 shadow-2xl transition-all duration-300">
          
          <div className="w-full space-y-8">
            
            {/* Logo & Header */}
            <div className="text-center mb-8">
              <div className="flex flex-col items-center gap-2 group">
                <div
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center 
                  group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3"
                >
                  <MessageSquare className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h1 className="text-3xl font-bold mt-4 tracking-tight text-white drop-shadow-sm">Welcome Back</h1>
                <p className="text-base-content/70 font-medium text-gray-300">Sign in to your account</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Email Field */}
              <div className="form-control">
                <label className="label pl-1">
                  <span className="label-text font-semibold text-gray-300">Email Address</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                  </div>
                  <input
                    type="email"
                    // Modified input classes for glass card background
                    className="input input-bordered w-full pl-11 h-12 rounded-xl bg-base-100/50 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="form-control">
                <label className="label pl-1">
                  <span className="label-text font-semibold text-gray-300">Password</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    // Modified input classes for glass card background
                    className="input input-bordered w-full pl-11 h-12 rounded-xl bg-base-100/50 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-primary transition-colors cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn btn-primary w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200" 
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Footer */}
            <div className="text-center pt-2">
              <p className="text-gray-300">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="link link-primary font-semibold hover:text-primary-focus transition-colors">
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;