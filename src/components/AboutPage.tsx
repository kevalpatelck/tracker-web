import React from "react";
import { ArrowLeft, MapPin, Users, Shield, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage: React.FC<any> = () => {
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About Outbound BPO Ltd
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We’re dedicated to simplifying urban mobility with innovative
            solutions like Map Alert & Pay.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  At Outbound BPO Ltd, we are committed to developing innovative
                  mobile solutions that simplify everyday challenges. Our
                  flagship product, Map Alert & Pay, reflects our dedication to
                  creating user-friendly technology that enhances convenience
                  and compliance for drivers navigating London’s Congestion
                  Charging Zone.
                </p>
                <p>
                  Founded with a vision to leverage technology for smarter urban
                  mobility, Outbound BPO Ltd combines expertise in software
                  development, customer service, and urban transport needs. We
                  understand the complexities of city driving and strive to
                  provide tools that empower users with timely information and
                  seamless payment options.
                </p>
                <p>
                  Our mission is to deliver reliable, accessible, and efficient
                  applications that improve the driving experience while helping
                  users avoid unnecessary charges. With Map Alert & Pay, we aim
                  to make London’s congestion charging system transparent and
                  easy to manage for everyone.
                </p>
                <p>
                  Thank you for choosing Outbound BPO Ltd. We are dedicated to
                  supporting you on the road with innovative solutions designed
                  for today’s fast-paced world.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-white" />
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  Founded for Urban Mobility
                </div>
                <div className="text-gray-600">Empowering London drivers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles driving our innovative solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600">
                We build dependable tools that drivers can trust for accurate
                congestion charge management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                User-Centric Design
              </h3>
              <p className="text-gray-600">
                Our apps are crafted to be intuitive, accessible, and tailored
                to real-world driving needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We leverage cutting-edge technology to simplify complex urban
                transport challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            A passionate group of software developers, customer service experts,
            and urban mobility specialists dedicated to enhancing your driving
            experience.
          </p>
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="text-6xl font-bold text-blue-600 mb-4">10,000+</div>
            <div className="text-xl text-gray-900 font-semibold mb-2">
              Happy Users
            </div>
            <div className="text-gray-600">
              Drivers across London rely on Map Alert & Pay for seamless
              congestion charge management.
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Questions, feedback, or suggestions? We’re here to help you navigate
            with ease.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              Contact Support
            </div>
            <a
              href="mailto:support@mapalertpay.com"
              className="text-blue-600 hover:text-blue-700 text-lg font-medium"
            >
              support@mapalertpay.com
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

export default AboutPage;
