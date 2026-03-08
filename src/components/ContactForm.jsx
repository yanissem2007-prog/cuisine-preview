import { motion } from 'framer-motion';

export default function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="grid gap-4 rounded-[2rem] border border-graphite/10 bg-cream/70 p-7 shadow-luxury md:p-10"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input className="rounded-xl border border-graphite/20 bg-ivory px-4 py-3 outline-none transition focus:border-gold" placeholder="Nom complet" />
        <input className="rounded-xl border border-graphite/20 bg-ivory px-4 py-3 outline-none transition focus:border-gold" placeholder="Téléphone" />
      </div>
      <input className="rounded-xl border border-graphite/20 bg-ivory px-4 py-3 outline-none transition focus:border-gold" placeholder="Email" />
      <textarea rows="5" className="rounded-xl border border-graphite/20 bg-ivory px-4 py-3 outline-none transition focus:border-gold" placeholder="Décrivez votre projet (cuisine, dressing, dimensions, style...)" />
      <button type="button" className="mt-2 w-fit rounded-full bg-graphite px-6 py-3 text-sm uppercase tracking-[0.2em] text-cream transition duration-500 hover:bg-gold hover:text-ivory">
        Demander un devis premium
      </button>
    </motion.form>
  );
}

