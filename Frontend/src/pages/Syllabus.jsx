import React from 'react';
import { BookOpen, Calendar, ScrollText } from 'lucide-react';

const Syllabus = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[80vh]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
          <BookOpen className="size-8 text-primary" /> NYDev Course Syllabus
        </h1>
        <p className="text-lg text-base-content/70 mt-2">Your roadmap to mastery: topics, grading, and policies.</p>
      </header>

      {/* Main Content Sections */}
      <div className="space-y-10">
        
        <section className="p-6 bg-base-100 rounded-xl shadow-lg border border-base-200">
          <h2 className="text-2xl font-semibold text-base-content mb-4 flex items-center gap-2">
            <Calendar className="size-5 text-accent" /> Course Schedule & Objectives
          </h2>
          <p className="mb-4 text-base-content/80">
            This course is designed to take you from problem identification to product launch over 12 intensive weeks.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
            <li>Week 1-3: Foundations & Architecture Design</li>
            <li>Week 4-6: Backend Development & API Integration</li>
            <li>Week 7-9: Frontend UI/UX and State Management</li>
            <li>Week 10-12: Testing, Deployment, and Final Project Review</li>
          </ul>
        </section>

        <section className="p-6 bg-base-100 rounded-xl shadow-lg border border-base-200">
          <h2 className="text-2xl font-semibold text-base-content mb-4 flex items-center gap-2">
            <ScrollText className="size-5 text-accent" /> Grading Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="table w-full text-base-content/80">
              <thead>
                <tr className="border-b border-base-300">
                  <th className="font-medium text-base-content/80">Component</th>
                  <th className="font-medium text-base-content/80">Weight</th>
                  <th className="font-medium text-base-content/80">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Weekly Quizzes/Labs</td>
                  <td>20%</td>
                  <td>Lowest two grades dropped.</td>
                </tr>
                <tr>
                  <td>Midterm Project</td>
                  <td>30%</td>
                  <td>Focus on architectural design and planning.</td>
                </tr>
                <tr>
                  <td>Final Product/Project</td>
                  <td>50%</td>
                  <td>Full-stack application deployment.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Syllabus;