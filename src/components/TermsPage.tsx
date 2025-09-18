import React from "react";
import { ArrowLeft, MapPin, FileText, AlertCircle, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsPage: React.FC<any> = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate("/")}
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
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to Map Alert & Pay, developed and provided by Outbound BPO
            Ltd. By downloading, accessing, or using this application, you agree
            to comply with and be bound by the following Terms of Use. Please
            read them carefully.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Important Notice
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Map Alert & Pay is an independent application developed by
                  Outbound BPO Ltd and is not affiliated with Transport for
                  London (TfL) or any government agency. While we strive for
                  accuracy,
                  <strong>
                    {" "}
                    you remain solely responsible for paying your congestion
                    charges on time
                  </strong>
                  . Always verify charges with official TfL sources.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  By using Map Alert & Pay, you acknowledge that you have read,
                  understood, and agree to these Terms of Use and our Privacy
                  Policy. If you do not agree, please do not use the app.
                </p>
                <p>
                  We reserve the right to modify these Terms of Use at any time.
                  Changes will be effective upon posting within the app or on
                  our website. Continued use of the app constitutes acceptance
                  of the updated terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                2. Use of the Application
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Map Alert & Pay is designed to provide alerts and live map
                  updates related to the London Congestion Charging Zone and to
                  facilitate payment of congestion charges. You agree to use the
                  app only for lawful purposes and in accordance with all
                  applicable laws and regulations.
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Real-time alerts for congestion zone entries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>Live map updates for navigation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <span>
                        Secure payment processing for congestion charges
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                3. User Responsibilities
              </h2>
              <div className="space-y-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">
                    Payment Responsibility
                  </h3>
                  <p className="text-red-800">
                    <strong>
                      You are solely responsible for ensuring timely payment of
                      congestion charges.
                    </strong>
                    Our app provides alerts and payment facilitation as a
                    convenience, but you must verify charges with official TfL
                    sources.
                  </p>
                </div>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p>
                      <strong>Location Services:</strong> You are responsible
                      for ensuring your device’s location services are enabled
                      for the app to function correctly.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p>
                      <strong>Proper Use:</strong> You agree not to misuse the
                      app or interfere with its operation.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    </div>
                    <p>
                      <strong>Judgment:</strong> AYou acknowledge that alerts
                      are provided as a convenience and should not replace your
                      own judgment or official signage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                4. Payment Processing
              </h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-yellow-900 mb-3">
                        Third-Party Payments
                      </h3>
                      <p className="text-yellow-800">
                        Payments made through the app are processed securely via
                        third-party payment providers. Outbound BPO Ltd is not
                        responsible for any issues arising from payment
                        processing or third-party services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                5. Intellectual Property
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  All content, features, and functionality of Map Alert & Pay
                  are the exclusive property of Outbound BPO Ltd and are
                  protected by intellectual property laws. You may not copy,
                  modify, distribute, or create derivative works without prior
                  written consent.
                </p>
                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        Protected Content
                      </h3>
                      <p className="text-blue-800 text-sm">
                        All app content, including text, graphics, logos, and
                        software, is owned by Outbound BPO Ltd.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                6. Disclaimer of Warranties
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The app is provided “as is” without warranties of any kind,
                  either express or implied. Outbound BPO Ltd does not guarantee
                  the accuracy, completeness, or reliability of alerts or map
                  data.
                </p>
                <p>
                  We do not warrant that the app will be error-free,
                  uninterrupted, or free of viruses or other harmful components.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                7. Limitation of Liability
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  To the maximum extent permitted by law, Outbound BPO Ltd shall
                  not be liable for any damages arising from your use or
                  inability to use the app, including but not limited to direct,
                  indirect, incidental, or consequential damages.
                </p>
                <div className="pl-6 space-y-2">
                  <p>
                    • Fines or penalties resulting from missed congestion charge
                    payments
                  </p>
                  <p>
                    • Inaccuracies in location detection or zone identification
                  </p>
                  <p>• Technical failures or app downtime</p>
                  <p>• Loss of data or trip history</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                8. Changes to Terms
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  We reserve the right to modify these Terms of Use at any time.
                  Changes will be effective upon posting within the app or on
                  our website. Continued use of the app constitutes acceptance
                  of the updated terms.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                9. Governing Law
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  These Terms of Use are governed by and construed in accordance
                  with the laws of the United Kingdom.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                10. Contact Information
              </h2>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">
                  For questions or concerns regarding these Terms of Use, please
                  contact us at support@outboundbpo.com.
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@outboundbpo.com"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      support@outboundbpo.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 rounded-xl p-8">
                <p className="text-gray-700 text-lg mb-4">
                  Thank you for choosing Map Alert & Pay. We appreciate your
                  trust and are committed to providing you with a reliable and
                  helpful service.
                </p>
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

export default TermsPage;
