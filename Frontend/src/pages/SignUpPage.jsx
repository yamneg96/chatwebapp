import {useState} from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { Eye, EyeOff, Loader, Lock, Mail, MessageSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuthImagePattern from '../components/AuthImagePattern';

const SignUpPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () => {}
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='min-h-screen grid lg:grid-cols-2'>
      {/* Left side */}
      <div className='flex flex-col justify-center items-center p-6 sm:p-12'>
        <div className='w-full max-w-md space-y-8'>
          {/* Logo Box */}
          <div className='text-center mb-8'>
            <div className='flex flex-col items-center gap-2 group'>
              <div className='size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <MessageSquare className='size-6 text-primary' />
              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className='text-base-content/60'>Get started with your free account</p>
            </div>
          </div>
          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Full Name</span>
              </label>
              <div className='relative'>
                <div className='absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <User className='size-5 text-base-content/40'/>
                </div>
                <input 
                type="text"
                className={`input input-bordered w-full pl-10 text-gray-500`}
                placeholder='Enter your full name'
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value})} />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Email</span>
              </label>
              <div className='relative'>
                <div className='absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Mail className='size-5 text-base-content/40'/>
                </div>
                <input 
                type="text"
                className={`input input-bordered w-full pl-10 text-gray-500`}
                placeholder='Enter your email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value})} />
              </div>
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text font-medium'>Password</span>
              </label>
              <div className='relative'>
                <div className='absolute z-10 inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Lock className='size-5 text-base-content/40'/>
                </div>
                <input 
                type={showPassword ? "text" : "password"}
                className={`input input-bordered w-full pl-10 pr-10 text-gray-500`}
                placeholder='Enter your password'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value})} />
                <div 
                onClick={(e) => setShowPassword(!showPassword)}
                className='absolute z-10 inset-y-0 right-0 pr-3 flex items-center cursor-pointer'>
                  {showPassword ? <EyeOff className='size-5 text-base-content/40' /> : <Eye 
                  className='size-5 text-base-content/40'/>}
                </div>
              </div>
            </div> 
            <button 
            type='submit'
            disabled={isSigningUp}
            className='btn btn-primary w-full'>
              {isSigningUp ? (
                <>
                <Loader className='size-5 animate-spin' />
                  Loading...
                </>
              ): (
                "Create Account"
              )}  
            </button>              
          </form>
          
          {/* If user have an account */}
          <div className='text-center'>
            <p className='text-base-content/60'>
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
              Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <AuthImagePattern 
        title="Join NYDev Community"
        subtitle="Connect with our learners, share moments, and stay in touch with your friends."
      />
    </div>
  )
}

export default SignUpPage