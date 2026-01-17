
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Goals from './components/Goals.tsx';
import Ambition from './components/Ambition.tsx';
import StudioShowcase from './components/StudioShowcase.tsx';
import IdeaPlanting from './components/IdeaPlanting.tsx';
import Footer from './components/Footer.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import BackgroundEffects from './components/BackgroundEffects.tsx';
import MotionGraphicsPage from './pages/MotionGraphicsPage.tsx';
import MontagePage from './pages/MontagePage.tsx';
import PhotographyPage from './pages/PhotographyPage.tsx';
import StudioRentalPage from './pages/StudioRentalPage.tsx';
import WebDesignPage from './pages/WebDesignPage.tsx';
import ContentWritingPage from './pages/ContentWritingPage.tsx';
import MarketingPage from './pages/MarketingPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import SocialSidebar from './components/SocialSidebar.tsx';
import CursorEffect from './components/CursorEffect.tsx';

const Home: React.FC = () => (
  <>
    <Hero />
    <Goals />
    <Ambition />
    <StudioShowcase />
    <IdeaPlanting />
  </>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white relative bg-[#080911] overflow-x-hidden">
      <BackgroundEffects />
      <CursorEffect />
      <ScrollToTop />
      <Navbar />
      <SocialSidebar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/motion-graphics" element={<MotionGraphicsPage />} />
          <Route path="/services/montage" element={<MontagePage />} />
          <Route path="/services/photography" element={<PhotographyPage />} />
          <Route path="/services/studio-rental" element={<StudioRentalPage />} />
          <Route path="/services/web-design" element={<WebDesignPage />} />
          <Route path="/services/content-writing" element={<ContentWritingPage />} />
          <Route path="/services/marketing" element={<MarketingPage />} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
};

export default App;
