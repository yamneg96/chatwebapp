import React from 'react';
import { ClipboardList, Clock, CheckCircle } from 'lucide-react';

const Assignments = () => {
  const assignments = [
    { title: "Project Alpha: Frontend Mockup", due: "Next Monday, 11:59 PM", status: "Due", color: "text-error" },
    { title: "Lab 3: Authentication Flow", due: "Completed", status: "Done", color: "text-success" },
    { title: "Midterm: Database Schema Design", due: "In 2 Weeks", status: "Pending", color: "text-warning" },
    { title: "Final Product Documentation", due: "Last Day of Course", status: "Pending", color: "text-info" },
  ];

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 min-h-[80vh]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
          <ClipboardList className="size-8 text-primary" /> Course Assignments
        </h1>
        <p className="text-lg text-base-content/70 mt-2">Track all your required deliverables and due dates.</p>
      </header>

      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div 
            key={index} 
            className="p-5 bg-base-100 rounded-xl shadow-md flex justify-between items-center transition-transform hover:scale-[1.01] border border-base-200"
          >
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-base-content">{assignment.title}</h2>
              <p className="text-sm text-base-content/60 mt-1 flex items-center gap-1">
                <Clock className="size-4" /> Due: {assignment.due}
              </p>
            </div>
            <div className={`badge badge-lg font-bold ${assignment.status === 'Done' ? 'badge-success' : assignment.status === 'Due' ? 'badge-error' : 'badge-warning'} text-white`}>
              {assignment.status}
            </div>
          </div>
        ))}
        
        <div className="pt-6 text-center">
            <button className="btn btn-primary btn-outline">
                View Past Submissions
            </button>
        </div>
      </div>
    </div>
  );
};

export default Assignments;