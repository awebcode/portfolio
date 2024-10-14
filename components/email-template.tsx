import * as React from "react";
import Footer from "./Footer";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
  subject: string;
  footerText?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
  subject,
  footerText = "Looking forward to your response!",
}) => (
  <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
    <header className="mb-6">
      <h1 className="text-xl font-semibold text-gray-800">
        New Message from {name} 
      </h1>
      <p className="text-sm text-gray-500 mt-1">Subject: {subject}</p>
    </header>

    <div className="bg-gray-50 p-4 rounded-md mb-6">
      <h2 className="text-lg font-medium text-gray-700 mb-2">Client Details</h2>
      <p className="text-sm text-gray-600">
        <strong>Email:</strong> {email}
      </p>
    </div>

    <div className="bg-white p-4 rounded-md shadow-inner">
      <h2 className="text-lg font-medium text-gray-700 mb-2">Message</h2>
      <p className="text-gray-800 whitespace-pre-line">{message}</p>
    </div>

    <div className="border-t border-gray-300 my-6" />

    <footer className="text-center">
      <p className="text-sm text-gray-500">{footerText}</p>
      <Footer />
    </footer>
  </div>
);
