import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ContactPage from './components/ContactPage';

type Page = 'landing' | 'about' | 'privacy' | 'terms' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPage onNavigate={setCurrentPage} />;
      case 'terms':
        return <TermsPage onNavigate={setCurrentPage} />;
      case 'contact':
        return <ContactPage onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return <div className="min-h-screen">{renderPage()}</div>;
}

export default App;