import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="relative mt-20 min-h-[88vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <PremiumImage
          src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1800&q=80"
          alt="Cuisine de luxe en bois"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-graphite/70 via-graphite/45 to-transparent" />

      <div className="relative mx-auto flex min-h-[88vh] w-[min(1280px,92%)] items-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-6 font-sans text-xs uppercase tracking-[0.4em] text-cream/75">Atelier d'exception</p>
          <h1 className="font-serif text-5xl leading-tight text-cream md:text-7xl">
            L'art du sur-mesure, pense pour sublimer votre interieur.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
            Zodiac Cuisine compose des cuisines et dressings personnalises, entre architecture interieure, nobles essences de bois et finitions haute couture.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/nos-cuisines" className="rounded-full bg-cream px-7 py-3 text-sm uppercase tracking-[0.16em] text-graphite transition duration-500 hover:bg-gold hover:text-ivory">
              Decouvrir nos cuisines
            </Link>
            <Link to="/contactez-nous" className="rounded-full border border-cream/60 px-7 py-3 text-sm uppercase tracking-[0.16em] text-cream transition duration-500 hover:border-gold hover:bg-gold/20">
              Demander une consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
