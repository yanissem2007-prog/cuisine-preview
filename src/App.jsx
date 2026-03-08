import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import ScrollToTop from './components/ScrollToTop';
import IntroLoader from './components/IntroLoader';
import HomePage from './pages/HomePage';
import KitchensPage from './pages/KitchensPage';
import DressingsPage from './pages/DressingsPage';
import ContactPage from './pages/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-graphite antialiased">
      <IntroLoader visible={showIntro} />
      <ScrollToTop />
      {!showIntro && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/nos-cuisines" element={<KitchensPage />} />
                <Route path="/nos-dressings" element={<DressingsPage />} />
                <Route path="/contactez-nous" element={<ContactPage />} />
              </Routes>
            </motion.main>
          </AnimatePresence>
          <Footer />
          <BackToTopButton />
        </>
      )}
    </div>
  );
}

