import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import ProfilePage from "./pages/ProfilePage"
import SettingPage from "./pages/SettingPage"
import { axiosInstance } from './lib/axios';
import { useAuthStore } from './store/useAuthStore';
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"
import Home from './pages/Home';
import Syllabus from './pages/Syllabus';
import Assignments from './pages/Assignments';
import StudentFAQ from './pages/StudentFAQ';
import InstructorContact from './pages/InstructorContact';
import CommunityGuidelines from './pages/CommunityGuidelines';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Accessibility from './pages/Accessibility';

const App = () => {

  const {authUser, checkAuth, isCheckingAuth} = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  if(isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin"/>
    </div>
  )

  return (
    <div>
      <Navbar />
      <div className='mt-10'>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Home />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />        <Route path="/setting" element={<SettingPage />} />
        <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path='/syllabus' element={<Syllabus />} />
        <Route path='/assignments' element={<Assignments />} />
        <Route path='/faq' element={<StudentFAQ />} />
        <Route path='/instructor' element={<InstructorContact />} />
        <Route path='/community-guidelines' element={<CommunityGuidelines />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/accessibility' element={<Accessibility />} />
      </Routes>
      </div>
      <Footer />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  )
}

export default App