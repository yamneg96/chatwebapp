import {useState} from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Loader, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import img from '../assets/auth/5.png';

const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {
    if(!formData.fullName.trim()) return toast.error("Full Name is required.");
    if(!formData.email.trim()) return toast.error("Email is required.");
    if(!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format.");
    if(!formData.password) return toast.error("Password is required.");
    if(formData.password.length < 6) return toast.error("Password must be at least 6 characters.");

    return true;
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if(success === true) signup(formData);
  }

  // --- START: Full-Screen Background Implementation ---
  const BACKGROUND_IMAGE_URL = img;
  // --- END: Full-Screen Background Implementation ---

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
      <div className='relative z-10 w-full max-w-md mx-auto p-6 sm:p-8'>
        <div className='bg-base-100/10 backdrop-blur-lg border border-base-100/20 rounded-3xl p-8 shadow-2xl transition-all duration-300'>
          
          <div className='w-full space-y-8'>
            {/* Logo Box */}
            <div className='text-center mb-8'>
              <div className='flex flex-col items-center gap-2 group'>
                <div className='w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3'>
                  <MessageSquare className='w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110' />
                </div>
                <h1 className='text-3xl font-bold mt-4 tracking-tight text-white drop-shadow-sm'>Create Account</h1>
                <p className='text-base-content/70 font-medium text-gray-300'>Get started with your free account</p>
              </div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className='space-y-6'>
              
              {/* Full Name Field */}
              <div className='form-control'>
                <label className='label pl-1'>
                  <span className='label-text font-semibold text-gray-300'>Full Name</span>
                </label>
                <div className='relative group'>
                  <div className='absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <User className='size-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300'/>
                  </div>
                  <input 
                  type="text"
                  // Modified input classes for glass card background
                  className="input input-bordered w-full pl-11 h-12 rounded-xl bg-base-100/50 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder='Enter your full name'
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value})} />
                </div>
              </div>

              {/* Email Field */}
              <div className='form-control'>
                <label className='label pl-1'>
                  <span className='label-text font-semibold text-gray-300'>Email Address</span>
                </label>
                <div className='relative group'>
                  <div className='absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <Mail className='size-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300'/>
                  </div>
                  <input 
                  type="text"
                  // Modified input classes for glass card background
                  className="input input-bordered w-full pl-11 h-12 rounded-xl bg-base-100/50 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value})} />
                </div>
              </div>

              {/* Password Field */}
              <div className='form-control'>
                <label className='label pl-1'>
                  <span className='label-text font-semibold text-gray-300'>Password</span>
                </label>
                <div className='relative group'>
                  <div className='absolute z-10 inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                    <Lock className='size-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300'/>
                  </div>
                  <input 
                  type={showPassword ? "text" : "password"}
                  // Modified input classes for glass card background
                  className="input input-bordered w-full pl-11 h-12 rounded-xl bg-base-100/50 border-white/20 text-white placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder='Enter your password'
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value})} />
                  <div 
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute z-10 inset-y-0 right-0 pr-4 flex items-center cursor-pointer hover:text-white transition-colors'>
                    {showPassword ? <EyeOff className='size-5 text-gray-400' /> : <Eye 
                    className='size-5 text-gray-400'/>}
                  </div>
                </div>
              </div> 
              
              {/* Submit Button */}
              <button 
              type='submit'
              disabled={isSigningUp}
              className='btn btn-primary w-full h-12 rounded-xl text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200'>
                {isSigningUp ? (
                  <>
                  <Loader className='size-5 animate-spin' />
                    Creating...
                  </>
                ): (
                  "Create Account"
                )} 	
              </button> 	 	 	
            </form>
            
            {/* If user have an account */}
            <div className='text-center pt-2'>
              <p className='text-gray-300'>
                Already have an account?{" "}
                <Link to="/login" className="link link-primary font-semibold hover:text-primary-focus transition-colors">
                Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage