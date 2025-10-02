import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using RV-Pro Max, you accept and agree to be bound by the terms and 
              provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on RV-Pro Max 
              for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The materials on RV-Pro Max are provided on an 'as is' basis. RV-Pro Max makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, 
              fitness for a particular purpose, or non-infringement of intellectual property or 
              other violation of rights.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Amazon Associates Program</h2>
            <p className="text-gray-700 mb-4">
              RV-Pro Max is a participant in the Amazon Services LLC Associates Program, an affiliate 
              advertising program designed to provide a means for sites to earn advertising fees by 
              advertising and linking to Amazon.com.
            </p>
            <p className="text-gray-700 mb-4">
              We may receive compensation for products purchased through affiliate links on our site. 
              This does not affect the price you pay for products.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitations</h2>
            <p className="text-gray-700 mb-4">
              In no event shall RV-Pro Max or its suppliers be liable for any damages (including, 
              without limitation, damages for loss of data or profit, or due to business interruption) 
              arising out of the use or inability to use the materials on RV-Pro Max, even if RV-Pro Max 
              or an authorized representative has been notified orally or in writing of the possibility 
              of such damage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy of Materials</h2>
            <p className="text-gray-700 mb-4">
              The materials appearing on RV-Pro Max could include technical, typographical, or 
              photographic errors. RV-Pro Max does not warrant that any of the materials on its 
              website are accurate, complete, or current.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links</h2>
            <p className="text-gray-700 mb-4">
              RV-Pro Max has not reviewed all of the sites linked to our website and is not responsible 
              for the contents of any such linked site. The inclusion of any link does not imply 
              endorsement by RV-Pro Max of the site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Modifications</h2>
            <p className="text-gray-700 mb-4">
              RV-Pro Max may revise these terms of service for its website at any time without notice. 
              By using this website, you are agreeing to be bound by the then current version of 
              these terms of service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
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

