import React from 'react';
import { ArrowLeft, MapPin, FileText, AlertCircle, Shield } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: 'landing' | 'about' | 'privacy' | 'terms') => void;
}

const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onNavigate('landing')}
              className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CongestionTracker</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before using CongestionTracker.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2025
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Notice</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  CongestionTracker is an independent tracking application and is not affiliated with 
                  Transport for London (TfL) or any government agency. While we strive for accuracy, 
                  <strong> you remain solely responsible for paying your congestion charges on time</strong>. 
                  Always verify charges with official TfL sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  By downloading, installing, or using CongestionTracker, you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, please do not use our app.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of the app 
                  after changes constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Service Description</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>CongestionTracker provides:</p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Location tracking to detect congestion zone entries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Trip history and payment status tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Alerts and notifications for zone entries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Payment management and reference tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Payment Responsibility</h3>
                  <p className="text-red-800">
                    <strong>You are solely responsible for paying your congestion charges on time.</strong> 
                    Our app is a tracking tool only and does not guarantee payment of charges. 
                    Always verify with official TfL sources.
                  </p>
                </div>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p><strong>Accurate Information:</strong> Provide accurate information when using the app</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p><strong>Device Security:</strong> Keep your device and app access secure</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p><strong>Legal Compliance:</strong> Use the app in compliance with all applicable laws</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p><strong>Prohibited Use:</strong> Do not use the app for illegal activities or to circumvent legitimate charges</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Limitations of Liability</h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-900 mb-3">No Warranty</h3>
                      <p className="text-yellow-800">
                        The app is provided "as is" without warranties of any kind. We do not guarantee 
                        100% accuracy in location detection or charge calculations.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    <strong>CongestionTracker and its creators will not be liable for:</strong>
                  </p>
                  <div className="pl-6 space-y-2">
                    <p>• Penalties, fines, or charges resulting from missed payments</p>
                    <p>• Inaccuracies in location detection or zone identification</p>
                    <p>• Technical failures, downtime, or app malfunctions</p>
                    <p>• Loss of data or inability to access trip history</p>
                    <p>• Any direct, indirect, incidental, or consequential damages</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data and Privacy</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Your use of the app is also governed by our Privacy Policy, which explains how we 
                  collect, use, and protect your personal information.
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Privacy Commitment</h3>
                      <p className="text-blue-800 text-sm">
                        We are committed to protecting your privacy and using your data responsibly. 
                        Read our full Privacy Policy for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  All content, features, and functionality of CongestionTracker, including but not limited 
                  to text, graphics, logos, and software, are owned by us and protected by copyright, 
                  trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, or create derivative works from any part 
                  of our app without explicit written permission.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Termination</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We reserve the right to terminate or suspend your access to the app at any time, 
                  with or without cause or notice, including for violations of these terms.
                </p>
                <p>
                  You may discontinue using the app at any time by deleting it from your device. 
                  Upon termination, all rights granted to you will cease immediately.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Governing Law</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  These terms are governed by the laws of England and Wales. Any disputes arising 
                  from these terms or your use of the app will be subject to the exclusive jurisdiction 
                  of the courts of England and Wales.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:legal@congestiontracker.com" className="text-blue-600 hover:text-blue-700">legal@congestiontracker.com</a></p>
                  <p><strong>Support:</strong> <a href="mailto:support@congestiontracker.com" className="text-blue-600 hover:text-blue-700">support@congestiontracker.com</a></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CongestionTracker</span>
          </div>
          <p className="text-gray-400">&copy; 2025 CongestionTracker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TermsPage;