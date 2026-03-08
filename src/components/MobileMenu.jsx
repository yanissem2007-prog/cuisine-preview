import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const item = {
  hidden: { opacity: 0, x: 20 },
  show: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.08 } }),
};

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Cuisines', to: '/nos-cuisines' },
  { label: 'Nos Dressings', to: '/nos-dressings' },
  { label: 'Contactez-nous', to: '/contactez-nous' },
];

export default function MobileMenu({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-graphite/95 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col justify-between px-8 pb-12 pt-28"
          >
            <nav className="space-y-5">
              {links.map((link, i) => (
                <motion.div key={link.to} variants={item} initial="hidden" animate="show" custom={i}>
                  <NavLink
                    to={link.to}
                    onClick={onClose}
                    className="block font-serif text-4xl text-cream transition-colors duration-300 hover:text-gold"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.25em] text-cream/60">Réseaux sociaux</p>
              <SocialIcons />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

