import React from 'react';
import { FileText, UserCog, AlertTriangle } from 'lucide-react';

const TermsOfUse = () => {
    const effectiveDate = "August 1, 2025";

    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 min-h-[80vh]">
            <header className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-base-content flex items-center justify-center gap-3">
                    <FileText className="size-8 text-primary" /> Terms of Use
                </h1>
                <p className="text-sm text-base-content/60 mt-2 flex items-center justify-center gap-2">
                    Effective Date: {effectiveDate}
                </p>
            </header>

            <div className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-200 space-y-6">
                
                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
                        1. Acceptance of Terms
                    </h2>
                    <p className="text-base-content/80">
                        By registering and using the **NYDev Course Chat System**, you agree to be bound by these Terms of Use, the Community Guidelines, and the academic policies outlined in the Course Syllabus. Access is limited exclusively to currently registered students and course staff.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300">
                        2. User Responsibilities
                    </h2>
                    <p className="text-base-content/80">
                        You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You must notify the instructor immediately of any unauthorized use or breach of security.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="text-2xl font-semibold text-base-content border-b pb-2 border-base-300 flex items-center gap-2">
                        <AlertTriangle className="size-5 text-warning" /> 3. Termination
                    </h2>
                    <p className="text-base-content/80">
                        We reserve the right to suspend or terminate your account access immediately, without prior notice, if you violate these Terms or the course's Academic Honesty policy. Access will automatically expire upon the conclusion of the course period.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default TermsOfUse;