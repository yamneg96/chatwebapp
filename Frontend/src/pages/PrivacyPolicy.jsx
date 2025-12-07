import React from 'react';
import { Lock, FileText, Calendar } from 'lucide-react';

const PrivacyPolicy = () => {
    const lastUpdated = "December 8, 2025";

    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[80vh]">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
                    <Lock className="size-8 text-primary" /> Privacy Policy
                </h1>
                <p className="text-sm text-base-content/60 mt-2 flex items-center justify-center gap-2">
                    <Calendar className="size-4" /> Last Updated: {lastUpdated}
                </p>
            </header>

            <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 space-y-6">
                
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
                        1. Data Collection
                    </h2>
                    <p className="text-base-content/80">
                        We collect minimal personal data necessary for course administration, including your full name, student email, and authentication credentials. We track messages and interactions within the chat for moderation, academic integrity, and enhancing the learning experience.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
                        2. Use of Data
                    </h2>
                    <p className="text-base-content/80">
                        Your data is used solely for course-related functions: facilitating communication, verifying student identity, grading assignments, and ensuring compliance with university policies. We do not sell or share your data with third-party advertisers.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
                        3. Message Privacy
                    </h2>
                    <p className="text-base-content/80">
                        While the chat is a private course environment, messages are not end-to-end encrypted and are accessible by course administrators and instructors for moderation and academic review purposes. Do not share highly sensitive personal information in public channels.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default PrivacyPolicy;