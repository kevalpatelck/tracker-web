import React from 'react';
import { ArrowLeft, MapPin, Users, Shield, Award } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: 'landing' | 'about' | 'privacy' | 'terms') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About CongestionTracker</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're on a mission to make London's congestion charge management simple, 
            transparent, and stress-free for every driver in the city.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Born from the frustration of unexpected congestion charge penalties, 
                  CongestionTracker was created by a team of London drivers who understood 
                  the daily challenges of navigating the city's complex charging zones.
                </p>
                <p>
                  After countless conversations with fellow drivers who had missed payments 
                  or forgotten to pay on time, we realized there had to be a better way. 
                  That's when we set out to build the ultimate congestion charge companion.
                </p>
                <p>
                  Today, we're proud to help thousands of London drivers stay on top of 
                  their congestion charges with real-time tracking, smart alerts, and 
                  seamless payment management.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">Founded in London</div>
                <div className="text-gray-600">Built by drivers, for drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Privacy First</h3>
              <p className="text-gray-600">
                Your location data is yours. We use minimal data collection and prioritize 
                your privacy in everything we build.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">User-Focused</h3>
              <p className="text-gray-600">
                Every feature is designed with real drivers in mind. We listen to your 
                feedback and continuously improve based on your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering a reliable, accurate, and intuitive experience 
                that you can depend on every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Built by Londoners</h2>
          <p className="text-xl text-gray-600 mb-12">
            Our team consists of London residents, daily commuters, and technology enthusiasts 
            who understand the unique challenges of driving in our great city.
          </p>
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">10,000+</div>
            <div className="text-xl text-gray-900 font-semibold mb-2">Happy Users</div>
            <div className="text-gray-600">
              Drivers across London trust CongestionTracker to manage their daily charges
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions, feedback, or suggestions? We'd love to hear from you.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-2xl font-semibold text-gray-900 mb-2">Contact Support</div>
            <a 
              href="mailto:support@congestiontracker.com" 
              className="text-blue-600 hover:text-blue-700 text-lg font-medium"
            >
              support@congestiontracker.com
            </a>
            <p className="text-gray-600 mt-4">
              We typically respond within 24 hours during business days.
            </p>
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

export default AboutPage;