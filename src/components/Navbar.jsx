import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialIcons from './SocialIcons';
import MobileMenu from './MobileMenu';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Cuisines', to: '/nos-cuisines' },
  { label: 'Nos Dressings', to: '/nos-dressings' },
  { label: 'Contactez-nous', to: '/contactez-nous' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite/10 bg-ivory/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-[min(1280px,92%)] items-center justify-between">
        <Link to="/" className="font-serif text-2xl tracking-wide text-graphite">Zodiac Cuisine</Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `luxury-link text-sm uppercase tracking-[0.2em] transition-colors ${
                  isActive ? 'text-gold' : 'text-graphite/80 hover:text-graphite'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <SocialIcons />
        </div>

        <button
          className="relative h-11 w-11 rounded-full border border-graphite/30 lg:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.span animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="absolute left-3 top-4 h-px w-5 bg-graphite" />
          <motion.span animate={open ? { opacity: 0 } : { opacity: 1 }} className="absolute left-3 top-[22px] h-px w-5 bg-graphite" />
          <motion.span animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="absolute left-3 top-7 h-px w-5 bg-graphite" />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

