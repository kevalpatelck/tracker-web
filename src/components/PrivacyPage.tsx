import React from 'react';
import { ArrowLeft, MapPin, Shield, Eye, Lock, Database } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: 'landing' | 'about' | 'privacy' | 'terms') => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
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
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600">
            Your privacy is our priority. Learn how we collect, use, and protect your data.
          </p>
          <div className="text-sm text-gray-500 mt-4">
            Last updated: January 15, 2025
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">All your data is encrypted in transit and at rest</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Selling</h3>
              <p className="text-gray-600 text-sm">We never sell your personal data to third parties</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Minimal Data</h3>
              <p className="text-gray-600 text-sm">We only collect data necessary for app functionality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What Information We Collect</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Location Data</h3>
                  <p>
                    We collect your precise location data only when you use the app to track your 
                    trips and determine if you've entered congestion zones. This data is essential 
                    for the core functionality of our service.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Trip Information</h3>
                  <p>
                    We store details about your trips including entry and exit times from congestion 
                    zones, route information, and payment status. This helps provide you with accurate 
                    trip history and payment tracking.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Device Information</h3>
                  <p>
                    We collect basic device information such as your device type, operating system, 
                    and app version to ensure optimal performance and provide technical support.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p><strong>Trip Tracking:</strong> To detect when you enter and exit congestion zones and provide accurate trip records.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p><strong>Alerts & Notifications:</strong> To send you timely alerts about congestion zone entries and payment reminders.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p><strong>App Improvement:</strong> To analyze usage patterns and improve our app's performance and features.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p><strong>Customer Support:</strong> To provide technical support and respond to your inquiries.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      All data is encrypted in transit using TLS 1.3
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Data at rest is encrypted using AES-256 encryption
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Regular security audits and vulnerability assessments
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Access controls and employee security training
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Under UK GDPR, you have the following rights regarding your personal data:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Access & Portability</h3>
                    <p className="text-green-800 text-sm">
                      Request a copy of your personal data and have it transferred to another service
                    </p>
                  </div>
                  <div className="bg-red-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Deletion</h3>
                    <p className="text-red-800 text-sm">
                      Request deletion of your personal data (subject to legal requirements)
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Correction</h3>
                    <p className="text-blue-800 text-sm">
                      Request correction of inaccurate or incomplete personal data
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Objection</h3>
                    <p className="text-purple-800 text-sm">
                      Object to the processing of your personal data under certain circumstances
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We retain your personal data only for as long as necessary to provide our services 
                  and comply with legal obligations:
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <p><strong>Trip Data:</strong> 3 years from the date of travel (to support payment disputes and tax records)</p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6">
                    <p><strong>Location Data:</strong> 30 days (used only for trip calculation, then anonymized)</p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6">
                    <p><strong>Account Data:</strong> Until account deletion is requested</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">
                  If you have any questions about this Privacy Policy or want to exercise your rights, 
                  please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href="mailto:privacy@congestiontracker.com" className="text-blue-600 hover:text-blue-700">privacy@congestiontracker.com</a></p>
                  <p><strong>Response Time:</strong> We aim to respond to all privacy requests within 30 days</p>
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

export default PrivacyPage;