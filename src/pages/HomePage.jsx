import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PreviewSection from '../components/PreviewSection';
import CustomizationSection from '../components/CustomizationSection';
import SectionTitle from '../components/SectionTitle';
import PremiumImage from '../components/PremiumImage';

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-24 md:py-28">
        <div className="mx-auto w-[min(1280px,92%)]">
          <SectionTitle
            eyebrow="Avant-gout de l'univers Zodiac"
            title="Des creations editoriales pour des interieurs signatures."
            description="Chaque projet nait d'un dialogue entre vos usages, l'architecture de votre espace et nos standards de fabrication haut de gamme."
            align="center"
          />
        </div>
      </section>

      <PreviewSection
        title="Nos Cuisines"
        description="Des compositions architecturales ou le bois, la pierre et la lumiere construisent un espace culinaire d'exception."
        to="/nos-cuisines"
        image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1400&q=80"
      />

      <PreviewSection
        reverse
        title="Nos Dressings"
        description="Des dressings concus comme des salons prives: organisation intelligente, finitions couture, ambiance feutree."
        to="/nos-dressings"
        image="https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?auto=format&fit=crop&w=1400&q=80"
      />

      <CustomizationSection />

      <section className="py-24 md:py-28">
        <div className="mx-auto grid w-[min(1280px,92%)] gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-graphite px-8 py-10 text-cream shadow-luxury"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cream/70">Notre savoir-faire</p>
            <h3 className="mt-4 font-serif text-4xl">L'exigence atelier, du premier croquis a la pose finale.</h3>
            <p className="mt-6 text-cream/80">Conception 3D, selection matiere, prototypage des details, fabrication sur mesure et accompagnement chantier: un parcours complet, precis et personnalise.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="overflow-hidden rounded-[2rem] shadow-luxury"
          >
            <PremiumImage
              src="https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1400&q=80"
              alt="Atelier de conception premium"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto w-[min(1280px,92%)] rounded-[2rem] border border-graphite/10 bg-cream/60 px-8 py-14 text-center shadow-luxury md:px-12">
          <p className="text-xs uppercase tracking-[0.3em] text-ember/70">Atmosphere Zodiac Cuisine</p>
          <h3 className="mt-4 font-serif text-4xl md:text-5xl">Un univers chaleureux, architectural et profondement sur-mesure.</h3>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-ember/80">Nous dessinons des lieux qui racontent votre style, votre rythme et vos priorites, avec une maitrise artisanale et une esthetique premium.</p>
          <Link to="/contactez-nous" className="mt-9 inline-block rounded-full bg-graphite px-8 py-3 text-sm uppercase tracking-[0.2em] text-cream transition hover:bg-gold">
            Reserver une rencontre
          </Link>
        </div>
      </section>
    </>
  );
}
