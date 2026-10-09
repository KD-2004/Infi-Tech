import React, { useState, useEffect } from 'react';
import { StartupAnimation } from './components/startup/StartupAnimation';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { SolutionsSection } from './components/sections/SolutionsSection';
import { AffordableWebSection } from './components/sections/AffordableWebSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { TechEcosystem } from './components/sections/TechEcosystem';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { WhyInfiTechSection } from './components/sections/WhyInfiTechSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { MemberPage } from './components/team/MemberPage';
import { Footer } from './components/layout/Footer';
import { soundFx } from './utils/soundEffects';

export function App() {
  const [introCompleted, setIntroCompleted] = useState<boolean>(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('Business Website');
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string, hash?: string) => {
    if (typeof window !== 'undefined') {
      if (path !== currentPath) {
        window.history.pushState({}, '', hash ? `${path}${hash}` : path);
        setCurrentPath(path);
      } else if (hash) {
        window.history.pushState({}, '', `${path}${hash}`);
      }

      if (hash) {
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          const elem = document.getElementById(targetId) || document.querySelector(hash);
          if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleStartProject = (context?: string) => {
    if (context) {
      setSelectedServiceForContact(context);
    }
    if (currentPath !== '/') {
      handleNavigate('/', '#contact-section');
    } else {
      const contactElem = document.getElementById('contact-section');
      contactElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    if (currentPath !== '/') {
      handleNavigate('/', '#projects-section');
    } else {
      const workElem = document.getElementById('projects-section');
      workElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isMemberRoute = currentPath === '/member' || currentPath === '/team' || currentPath === '/members';

  return (
    <div className="min-h-screen bg-[#05070b] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      {!introCompleted && !isMemberRoute && (
        <StartupAnimation onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Main Corporate Application Stage */}
      <div className="opacity-100">
        {/* Top Sticky Modern Navigation Bar */}
        <Navbar
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />

        {/* Primary Page Content */}
        <main>
          {isMemberRoute ? (
            <MemberPage
              onNavigateHome={() => handleNavigate('/')}
              onNavigateToSection={(sectionId) => handleNavigate('/', `#${sectionId}`)}
            />
          ) : (
            <>
              <HeroSection
                onStartProject={() => handleStartProject('Business Website')}
                onExploreWork={handleExploreWork}
              />

              <AboutSection
                onStartProject={() => handleStartProject('Systems & Software')}
              />

              <ServicesSection
                onStartProjectForService={(serviceTitle) => handleStartProject(serviceTitle)}
              />

              <SolutionsSection
                onStartProject={() => handleStartProject('Operational Transformation')}
              />

              <AffordableWebSection
                onStartProject={(context) => handleStartProject(context || 'Custom Website Quote')}
              />

              <ProductsSection
                onStartProject={(productName) => handleStartProject(productName || 'Proprietary Products')}
              />

              <TechEcosystem />

              <ProjectsSection
                onStartProject={(projectContext) => handleStartProject(projectContext || 'Enterprise Solution')}
              />

              <WhyInfiTechSection />

              <ProcessSection />

              <FAQSection />

              <ContactSection
                initialProjectType={selectedServiceForContact}
              />
            </>
          )}
        </main>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}

export default App;

