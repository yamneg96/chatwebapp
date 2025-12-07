import React from 'react';
import { Mail, Phone, MapPin, UserCheck } from 'lucide-react';

const InstructorContact = () => {
  const instructor = {
    name: "Dr. Evelyn Reed (Lead Instructor)",
    email: "e.reed@nydevcourse.edu",
    officeHours: "Tuesdays & Thursdays, 2:00 PM - 3:30 PM (Virtual via Zoom link provided in chat)",
    note: "Please allow up to 24 hours for email responses during the week. Use chat for urgent peer-to-peer questions.",
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 min-h-[80vh]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
          <UserCheck className="size-8 text-primary" /> Instructor Contact
        </h1>
        <p className="text-lg text-base-content/70 mt-2">Information to connect with your course instructor(s).</p>
      </header>

      <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 space-y-6">
        
        <h2 className="text-3xl font-semibold text-base-content border-b pb-3 border-base-300">
          {instructor.name}
        </h2>
        
        {/* Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
            <Mail className="size-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-base-content/60">Primary Email</p>
              <a href={`mailto:${instructor.email}`} className="text-base font-medium text-base-content hover:text-primary transition-colors">
                {instructor.email}
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
            <Phone className="size-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-base-content/60">Office Hours</p>
              <p className="text-base font-medium text-base-content">{instructor.officeHours}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
            <MapPin className="size-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-base-content/60">Location</p>
              <p className="text-base font-medium text-base-content">Zoom Link (See Chat Announcements)</p>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="mt-6 p-4 border-l-4 border-accent bg-accent/10 rounded-r-lg">
          <p className="font-medium text-base-content/80">{instructor.note}</p>
        </div>

      </div>
    </div>
  );
};

export default InstructorContact;