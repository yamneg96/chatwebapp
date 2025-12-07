import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

const faqData = [
    {
        q: "How do I ask the instructor a technical question?",
        a: "Please use the 'General Questions' channel in the chat system for quick queries. For private matters or grading issues, use the 'Instructor Contact' link in the footer to send an email."
    },
    {
        q: "What is the policy on collaborating with other students?",
        a: "Collaboration on concepts and debugging is highly encouraged! However, all code submitted for graded assignments must be your own work. See the Syllabus for detailed academic honesty policies."
    },
    {
        q: "Which programming language/framework are we using?",
        a: "The core stack for this course is MERN (MongoDB, Express, React, Node.js). All lab assignments and the final project should adhere to this stack unless otherwise specified."
    },
    {
        q: "Where can I find the recorded lectures?",
        a: "All recorded sessions are linked directly on the course LMS platform, usually within 24 hours of the live session. Check the 'Syllabus' page for the external LMS link."
    },
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-base-300 py-3">
            <button 
                className="flex justify-between items-center w-full text-left p-2 rounded-lg hover:bg-base-200/50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-base-content flex items-center gap-2">
                    <HelpCircle className="size-5 text-primary" /> {question}
                </span>
                <ChevronDown className={`size-5 text-base-content/60 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            {isOpen && (
                <div className="px-4 pt-2 pb-4 text-base-content/80">
                    {answer}
                </div>
            )}
        </div>
    );
};

const StudentFAQ = () => {
    return (
        <div className="container mx-auto max-w-3xl py-12 px-4 min-h-[80vh]">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
                    <HelpCircle className="size-8 text-primary" /> Student FAQ
                </h1>
                <p className="text-lg text-base-content/70 mt-2">Quick answers to the most common course and platform questions.</p>
            </header>

            <div className="bg-base-100 p-6 rounded-xl shadow-lg border border-base-200">
                {faqData.map((item, index) => (
                    <FAQItem key={index} question={item.q} answer={item.a} />
                ))}
            </div>
            
            <div className="pt-10 text-center">
                <p className="text-base-content/70 mb-4">
                    Still have questions? Chat with your peers or instructor!
                </p>
                <button className="btn btn-primary">
                    <MessageSquare className="size-5" /> Go to Course Chat
                </button>
            </div>
        </div>
    );
};

export default StudentFAQ;