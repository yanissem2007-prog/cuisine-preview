import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

export default function CustomizationSection() {
  const points = [
    'Dimensions entièrement ajustées à votre pièce',
    'Sélection d’essences de bois et de matériaux nobles',
    'Adaptation des couleurs, textures et finitions premium',
    'Ajout ou retrait de modules selon vos usages',
    'Organisation intérieure optimisée: tiroirs, compartiments, accessoires',
    'Intégration d’éclairages décoratifs et fonctionnels',
    'Conception centrée sur votre style de vie et votre confort',
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-[min(1280px,92%)] rounded-[2rem] border border-graphite/10 bg-cream/70 p-8 shadow-luxury md:p-14">
        <SectionTitle
          eyebrow="Philosophie Sur-Mesure"
          title="Chaque création Zodiac Cuisine est pensée autour de vous."
          description="Nous ne proposons pas un simple catalogue figé: nous composons un projet unique, de la structure jusqu’aux détails décoratifs."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-2xl border border-graphite/10 bg-ivory/90 p-5 text-ember/85"
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

