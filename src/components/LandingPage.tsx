import React from "react";
import {
  Smartphone,
  MapPin,
  Clock,
  Bell,
  CreditCard,
  Shield,
  Navigation,
  AlertTriangle,
  CheckCircle,
  Star,
  Download,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC<any> = () => {
  const navigate = useNavigate();

  const onNavigate = (route: any) => {
    navigate(`/${route}`);
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to{" "}
                <span className="text-yellow-300">Map Alert & Pay</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Your Essential London Congestion Charging Companion!
              </p>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Map Alert & Pay is a convenient and user-friendly iPhone
                application designed to keep you informed and in control when
                driving in London’s Congestion Charging Zone. With this app,
                you’ll receive free, real-time alerts the moment you enter the
                charging area, helping you avoid unexpected fees and stay
                compliant with city regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors"
                  onClick={() =>
                    (window.location.href =
                      "https://apps.apple.com/us/app/map-alert-and-pay/id6590636558")
                  }
                >
                  <Download className="w-6 h-6" />
                  Download on App Store
                </button>
                <button
                  className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
                  onClick={() =>
                    (window.location.href =
                      "https://play.google.com/store/apps/details?id=uk.co.mapalertpay.app")
                  }
                >
                  <Download className="w-6 h-6" />
                  Download on Google play
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                {/* Phone Mockup */}
                <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl max-w-sm mx-auto">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="p-4 bg-white">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-gray-900 font-bold text-lg">
                            Map Alert & Pay
                          </h3>
                          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                            Zone Detected
                          </div>
                        </div>
                        <div className="bg-gray-100 rounded-xl h-24 flex items-center justify-center">
                          <div className="text-center">
                            <MapPin className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                            <div className="text-xs text-gray-600">
                              Live Congestion Zone Map
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how Map Alert & Pay simplifies your driving experience in
              London
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Instant Alerts
              </h3>
              <p className="text-gray-600">
                Get notified immediately upon entering the London Congestion
                Charging Zone.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Live Map Updates
              </h3>
              <p className="text-gray-600">
                Access a live, interactive map to track your location and
                monitor congestion zones in real time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <CreditCard className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Easy Payment
              </h3>
              <p className="text-gray-600">
                Pay your congestion charge directly through the app, making the
                process quick and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Stay Informed, Stay Compliant
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Real-time Tracking
                    </h3>
                    <p className="text-gray-600">
                      Monitor your location with precise GPS to stay aware of
                      your surroundings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Zone Alerts
                    </h3>
                    <p className="text-gray-600">
                      Instant notifications when you enter a chargeable
                      congestion zone.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Interactive Map
                    </h3>
                    <p className="text-gray-600">
                      Navigate congestion zones with a live, user-friendly map
                      interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Live Congestion Zone Map
                </div>
                <div className="text-gray-600">
                  Real-time tracking and alerts
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free to Use Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free to Use
            </h2>
            <p className="text-xl text-gray-600">
              All these features are available in the free version of the app,
              ensuring you get value without any cost.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free Alerts
              </h3>
              <p className="text-gray-600">
                Receive instant notifications when entering congestion zones,
                completely free.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Free Map Access
              </h3>
              <p className="text-gray-600">
                Explore live congestion zone maps without any subscription or
                payment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                No Hidden Fees
              </h3>
              <p className="text-gray-600">
                All essential features are available in the free version of the
                app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Drive Smarter with Map Alert & Pay
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you’re a daily commuter or an occasional visitor, Map Alert
            & Pay is your trusted partner for navigating London’s congestion
            charges with ease and confidence. Download now and drive smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              className="bg-black text-white px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-lg"
              onClick={() =>
                (window.location.href =
                  "https://apps.apple.com/us/app/map-alert-and-pay/id6590636558")
              }
            >
              <Download className="w-6 h-6" />
              App Store
            </button>
            <button
              className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors text-lg"
              onClick={() =>
                (window.location.href =
                  "https://play.google.com/store/apps/details?id=uk.co.mapalertpay.app")
              }
            >
              <Download className="w-6 h-6" />
              Google Play
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-current text-yellow-400"
                />
              ))}
            </div>
            <span className="text-sm">Trusted by drivers across London</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Map Alert & Pay</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The smart way to manage London's congestion charges. Stay
                informed, stay compliant.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate("about")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => onNavigate("terms")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a
                  href="mailto:support@outboundbpo.com"
                  className="text-gray-400 hover:text-white transition-colors block"
                >
                  support@outboundbpo.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Outbound BPO Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
