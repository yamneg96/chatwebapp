import React from 'react';
import { Globe, Lightbulb, Monitor } from 'lucide-react';

const Accessibility = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[80vh]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
          <Globe className="size-8 text-primary" /> Accessibility Statement
        </h1>
        <p className="text-lg text-base-content/70 mt-2">Ensuring the chat system is usable by all students.</p>
      </header>

      <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 space-y-6">
        
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
            Commitment to Standards
          </h2>
          <p className="text-base-content/80">
            We strive to make the NYDev Course Chat System accessible to all users, adhering as closely as possible to the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA**.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300 flex items-center gap-2">
            <Lightbulb className="size-6 text-accent" /> Key Features
          </h2>
          <ul className="list-disc list-inside space-y-2 text-base-content/70 ml-4">
            <li>**Keyboard Navigation:** All interactive elements are reachable and operable using only the keyboard.</li>
            <li>**High Contrast:** The color palette ensures sufficient contrast between text and background.</li>
            <li>**Screen Reader Compatibility:** Elements utilize proper ARIA labels and semantic HTML for effective interpretation by screen readers.</li>
            <li>**Resizable Text:** Users can adjust font size up to 200% without loss of content or functionality.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300 flex items-center gap-2">
            <Monitor className="size-6 text-accent" /> Feedback
          </h2>
          <p className="text-base-content/80">
            If you encounter any accessibility barrier or require assistance, please contact the instructor immediately via the 'Instructor Contact' email link. We are committed to addressing issues promptly to ensure equitable access.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Accessibility;