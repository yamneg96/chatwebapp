import React from 'react';
import { Shield, MessageCircle, Gavel, Users } from 'lucide-react';

const CommunityGuidelines = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[80vh]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
          <Users className="size-8 text-primary" /> Community Guidelines
        </h1>
        <p className="text-lg text-base-content/70 mt-2">Rules for collaboration and ensuring a positive learning environment.</p>
      </header>

      <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 space-y-8">
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-base-content flex items-center gap-2">
            <MessageCircle className="size-6 text-accent" /> 1. Respectful Communication
          </h2>
          <p className="text-base-content/80">
            Treat all members, including students, TAs, and instructors, with **professionalism and courtesy**. Harassment, bullying, or hate speech will result in immediate removal from the platform. Remember that tone can be lost in text; be clear and assume positive intent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-base-content flex items-center gap-2">
            <Shield className="size-6 text-accent" /> 2. Academic Honesty
          </h2>
          <p className="text-base-content/80">
            While debugging and conceptual discussions are encouraged, **sharing direct assignment code or complete solutions** is strictly prohibited. Use the chat to guide, not to give answers. Violations will be handled according to the course syllabus policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-base-content flex items-center gap-2">
            <Gavel className="size-6 text-accent" /> 3. Appropriate Channels
          </h2>
          <p className="text-base-content/80">
            Post questions in the relevant channels (e.g., `#backend-help`, `#react-state`). This keeps discussions organized and helps everyone find information quickly. General course questions should go to `#course-announcements`.
          </p>
        </section>

        <div className="mt-8 p-4 bg-error/10 border-l-4 border-error rounded-r-lg">
          <p className="font-medium text-error">
            Reporting Issues: If you encounter any violation of these guidelines, please report it immediately to the instructor via private email.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CommunityGuidelines;