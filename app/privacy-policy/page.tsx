import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              subscribe to our newsletter, or contact us for support.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and personalize your experience.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Amazon Associates Program</h2>
            <p className="text-gray-700 mb-4">
              RV-Pro Max is a participant in the Amazon Services LLC Associates Program, an affiliate 
              advertising program designed to provide a means for sites to earn advertising fees by 
              advertising and linking to Amazon.com.
            </p>
            <p className="text-gray-700 mb-4">
              As an Amazon Associate, we earn from qualifying purchases. This means that if you click 
              on an Amazon link on our site and make a purchase, we may receive a small commission 
              at no extra cost to you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to collect and use personal information 
              about you. You can control cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services such as Google Analytics to analyze how our site is used. 
              These services may collect information about your use of our site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new privacy policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: info@shonexxa.com<br />
              Website: https://www.rv-promax.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

