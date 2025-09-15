import React from "react";
import { ArrowLeft, MapPin, Shield, Eye, Lock, Database } from "lucide-react";

interface PrivacyPageProps {
  onNavigate: (
    page: "landing" | "about" | "privacy" | "terms" | "contact"
  ) => void;
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onNavigate("landing")}
              className="flex items-center gap-3 text-blue-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Map Alert & Pay</span>
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            At Outbound BPO Ltd, your privacy is our priority. Learn how we
            protect your data with Map Alert & Pay.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Data
              </h3>
              <p className="text-gray-600 text-sm">
                Industry-standard measures protect your information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Data Sharing
              </h3>
              <p className="text-gray-600 text-sm">
                We don’t sell or share your personal information.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Minimal Collection
              </h3>
              <p className="text-gray-600 text-sm">
                We only collect what’s needed for app functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Information We Collect
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Location Data
                  </h3>
                  <p>
                    To provide accurate alerts and live map updates, the app
                    collects your device’s location information. This data is
                    used solely to determine when you enter or exit the London
                    Congestion Charging Zone.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Payment Information
                  </h3>
                  <p>
                    If you choose to pay congestion charges via the app, payment
                    details are processed securely through trusted third-party
                    payment providers. We do not store your payment card
                    information on our servers.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Usage Data
                  </h3>
                  <p>
                    We may collect anonymous usage statistics to improve app
                    performance and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p>
                      <strong>Alerts:</strong> To send timely notifications when
                      you enter congestion charging zones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p>
                      <strong>Map Updates:</strong> To display live maps and
                      location updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p>
                      <strong>Payments:</strong> To facilitate secure payment of
                      congestion charges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <p>
                      <strong>App Improvement:</strong> To analyze usage and
                      enhance app features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Data Sharing and Security
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We do not sell or share your personal information with third
                  parties except as necessary to provide payment processing
                  services or comply with legal obligations. We implement
                  industry-standard security measures to protect your data from
                  unauthorized access.
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Secure payment processing via trusted third-party
                      providers
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Data encryption using industry-standard protocols
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Regular security audits to ensure data protection
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      Strict access controls for internal data handling
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Choices
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>You have control over how your data is used:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">
                      Location Permissions
                    </h3>
                    <p className="text-green-800 text-sm">
                      Control location access via your device settings (note:
                      disabling may limit app functionality)
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">
                      Notifications
                    </h3>
                    <p className="text-blue-800 text-sm">
                      Opt out of receiving alerts at any time through app
                      settings
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Changes to This Policy
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We may update this Privacy Policy periodically. Any changes
                  will be posted within the app and on our website.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">
                  If you have questions or concerns about your privacy, please
                  contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:privacy@outboundbpo.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      privacy@outboundbpo.com
                    </a>
                  </p>
                  <p>
                    <strong>Response Time:</strong> We aim to respond to all
                    privacy requests within 30 days
                  </p>
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
            <span className="text-xl font-bold">Map Alert & Pay</span>
          </div>
          <p className="text-gray-400">
            &copy; 2025 Outbound BPO Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
