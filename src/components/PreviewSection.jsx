import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PremiumImage from './PremiumImage';

export default function PreviewSection({ title, description, image, to, reverse = false }) {
  return (
    <section className="py-20 md:py-28">
      <div className={`mx-auto grid w-[min(1280px,92%)] items-center gap-10 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-4xl text-graphite md:text-5xl">{title}</h3>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ember/80">{description}</p>
          <Link to={to} className="mt-8 inline-block text-sm uppercase tracking-[0.2em] text-gold transition hover:tracking-[0.24em]">
            Explorer l'univers
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[460px] overflow-hidden rounded-[2rem] shadow-luxury"
        >
          <PremiumImage src={image} alt={title} className="h-full w-full scale-105 object-cover transition duration-700 hover:scale-110" />
        </motion.div>
      </div>
    </section>
  );
}
