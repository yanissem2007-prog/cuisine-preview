import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PremiumImage from './PremiumImage';

export default function ProductShowcaseSection({ product }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section ref={ref} className="py-20 md:py-28">
      <div className="mx-auto grid w-[min(1280px,92%)] items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-ember/70">{product.name}</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">{product.heading}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ember/80">{product.description}</p>

          <div className="mt-8 space-y-2 text-sm leading-relaxed text-graphite/85 md:text-base">
            <p><strong>Inspiration:</strong> {product.inspiration}</p>
            <p><strong>Bois & materiaux:</strong> {product.materials}</p>
            <p><strong>Finitions:</strong> {product.finishes}</p>
            <p><strong>Plan de travail / agencement:</strong> {product.worktop}</p>
            <p><strong>Rangements:</strong> {product.storage}</p>
            <p><strong>Ambiance:</strong> {product.mood}</p>
            <p><strong>Profil ideal:</strong> {product.profile}</p>
            <p><strong>Personnalisation:</strong> {product.customization}</p>
          </div>
        </motion.div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-[560px] overflow-hidden rounded-[2rem] shadow-luxury"
        >
          <PremiumImage src={product.image} alt={product.name} className="h-full w-full object-cover object-center transition duration-700 hover:scale-105" />
        </motion.div>
      </div>
    </section>
  );
}
