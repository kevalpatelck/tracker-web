import React from 'react';
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
  Download
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'about' | 'privacy' | 'terms') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Stay Ahead of London's{' '}
                <span className="text-yellow-300">Congestion Charges</span>
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed">
                Track your trips, receive real-time alerts, and manage congestion charge payments—all in one app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors">
                  <Download className="w-6 h-6" />
                  Download on App Store
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors">
                  <Download className="w-6 h-6" />
                  Get it on Google Play
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-gray-900 font-bold text-lg">Today's Summary</h3>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        All Paid
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">3</div>
                        <div className="text-sm text-gray-600">Trips Today</div>
                      </div>
                      <div className="bg-red-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-red-600">£15</div>
                        <div className="text-sm text-gray-600">Charges</div>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-xl h-32 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-sm text-gray-600">Live Map View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Summary Panel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Day at a Glance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get instant insights into your daily travel with our comprehensive summary dashboard
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Today's Trips & Charges</h3>
              <p className="text-gray-600">See all your trips and associated charges instantly, with clear payment status indicators.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Zone Check</h3>
              <p className="text-gray-600">Instantly know if you've entered the congestion zone with our smart detection system.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Bell className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Stay Informed</h3>
              <p className="text-gray-600">Receive timely alerts and warnings to help you manage your charges proactively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Location Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Know Where You Stand</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Location</h3>
                    <p className="text-gray-600">See your exact position on the map with precise GPS tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Zone Detection</h3>
                    <p className="text-gray-600">Instantly know if you're inside a chargeable congestion zone</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Navigation</h3>
                    <p className="text-gray-600">Zoom and navigate the map with smooth, intuitive controls</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">Interactive Map</div>
                <div className="text-gray-600">Live congestion zone tracking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Trips Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Keep Track of Every Trip</h2>
            <p className="text-xl text-gray-600">Comprehensive trip history with payment status and detailed insights</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((trip) => (
              <div key={trip} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-medium text-gray-500">Trip #{trip}</div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    Paid
                  </div>
                </div>
                <div className="bg-gray-100 rounded-xl h-32 mb-4 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-gray-400" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Zone Entry:</span>
                    <span className="font-medium">09:3{trip} AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Charge:</span>
                    <span className="font-medium">£15.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Alerts Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gray-100 rounded-3xl p-8">
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                    <div>
                      <div className="font-semibold text-red-900">Congestion Zone Entry!</div>
                      <div className="text-sm text-red-700">Today at 9:34 AM</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <Bell className="w-6 h-6 text-yellow-600" />
                    <div>
                      <div className="font-semibold text-yellow-900">Payment Reminder</div>
                      <div className="text-sm text-yellow-700">Pay by midnight to avoid penalty</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-green-900">Payment Confirmed</div>
                      <div className="text-sm text-green-700">Reference: CC123456789</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Never Miss an Alert</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Notifications</h3>
                    <p className="text-gray-600">Get immediate alerts when entering congestion zones</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Timestamped Records</h3>
                    <p className="text-gray-600">Complete log with precise timestamps and sender information</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Alert History</h3>
                    <p className="text-gray-600">Access your complete alert history anytime in the All Alerts screen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Trip Insights</h2>
            <p className="text-xl text-gray-600">Comprehensive information for every journey you take</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                      <div className="text-lg font-semibold text-gray-900">Detailed Route Map</div>
                      <div className="text-gray-600">Entry and exit points marked</div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-b pb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Trip Details</h3>
                      <p className="text-gray-600">Complete journey information</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entry Time:</span>
                        <span className="font-semibold">09:34:22 AM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entry Location:</span>
                        <span className="font-semibold">London Bridge</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Zone Confirmed:</span>
                        <span className="font-semibold text-green-600">Central London</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment Ref:</span>
                        <span className="font-semibold">CC123456789</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Status:</span>
                        <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Paid
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payments Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pay Your Charges Your Way</h2>
            <p className="text-xl text-gray-600">Multiple convenient payment options to suit your preferences</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pay by Phone</h3>
              <p className="text-gray-600">UK & international phone payment options available 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Online Payments</h3>
              <p className="text-gray-600">Quick and secure payments directly via the TfL website</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In-App Payment</h3>
              <p className="text-gray-600">Future integrated payment system for seamless transactions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manual Tracking</h3>
              <p className="text-gray-600">Mark charges as paid manually with payment reference numbers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Simplify Your Congestion Zone Experience Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of London drivers who trust our app to manage their congestion charges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-black text-white px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-800 transition-colors text-lg">
              <Download className="w-6 h-6" />
              App Store
            </button>
            <button className="bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors text-lg">
              <Download className="w-6 h-6" />
              Google Play
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 text-blue-200">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current text-yellow-400" />
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
                <span className="text-xl font-bold">CongestionTracker</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The smart way to manage London's congestion charges. Stay informed, stay ahead.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => onNavigate('about')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="mailto:support@congestiontracker.com" className="text-gray-400 hover:text-white transition-colors block">
                  support@congestiontracker.com
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CongestionTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;