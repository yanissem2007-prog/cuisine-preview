import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="mx-auto grid w-[min(1280px,92%)] gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Contactez-nous"
              title="Concevons votre projet sur-mesure avec notre atelier."
              description="Partagez vos envies de cuisine ou dressing premium. Notre équipe vous accompagne de la première intention au projet finalisé."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-8 space-y-3 rounded-2xl border border-graphite/10 bg-cream/50 p-6"
            >
              <p><strong>Email:</strong> contact@zodiaccuisine.fr</p>
              <p><strong>Téléphone:</strong> +33 1 84 00 00 00</p>
              <p><strong>Adresse:</strong> 18 Avenue du Design, 75008 Paris</p>
              <p><strong>Showroom:</strong> Espace map / visite privée sur rendez-vous</p>
            </motion.div>

            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-ember/70">
              Demandez votre devis ou votre consultation design premium.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}

