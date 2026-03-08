import { useState } from 'react';
import { motion } from 'framer-motion';
import PremiumImage from './PremiumImage';

const woodTones = ['Chene naturel', 'Noyer fume', 'Frêne sable', 'Ebene', 'Teinte personnalisée'];
const finishes = ['Ultra mat', 'Satiné', 'Texturé', 'Bois huilé'];
const palettes = ['Ivoire', 'Taupe', 'Sable', 'Graphite', 'Greige'];

export default function ProductCustomizer({ title, models, typeLabel }) {
  const [selected, setSelected] = useState(models[0]);
  const [size, setSize] = useState('Standard');
  const [wood, setWood] = useState(woodTones[0]);
  const [finish, setFinish] = useState(finishes[0]);
  const [palette, setPalette] = useState(palettes[0]);
  const [lighting, setLighting] = useState(true);
  const [modules, setModules] = useState(true);

  return (
    <section className="py-16 md:py-22">
      <div className="mx-auto grid w-[min(1280px,92%)] gap-8 rounded-[2rem] border border-graphite/10 bg-cream/55 p-6 shadow-luxury md:grid-cols-2 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-ember/70">Configurateur {typeLabel}</p>
          <h3 className="mt-4 font-serif text-4xl leading-tight">{title}</h3>
          <p className="mt-4 text-ember/80">Modifiez votre {typeLabel.toLowerCase()}: modules, dimensions, finitions, tons de bois, organisation et ambiance lumineuse.</p>

          <div className="mt-8 grid gap-3 text-sm">
            <label className="space-y-1">
              <span>Modele</span>
              <select
                value={selected.name}
                onChange={(e) => setSelected(models.find((m) => m.name === e.target.value) || models[0])}
                className="w-full rounded-xl border border-graphite/20 bg-ivory px-3 py-2"
              >
                {models.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
            </label>

            <label className="space-y-1">
              <span>Dimensions</span>
              <select value={size} onChange={(e) => setSize(e.target.value)} className="w-full rounded-xl border border-graphite/20 bg-ivory px-3 py-2">
                <option>Compact</option>
                <option>Standard</option>
                <option>Grand format</option>
                <option>100% sur-mesure</option>
              </select>
            </label>

            <label className="space-y-1">
              <span>Essence / ton de bois</span>
              <select value={wood} onChange={(e) => setWood(e.target.value)} className="w-full rounded-xl border border-graphite/20 bg-ivory px-3 py-2">
                {woodTones.map((w) => <option key={w}>{w}</option>)}
              </select>
            </label>

            <label className="space-y-1">
              <span>Finition</span>
              <select value={finish} onChange={(e) => setFinish(e.target.value)} className="w-full rounded-xl border border-graphite/20 bg-ivory px-3 py-2">
                {finishes.map((f) => <option key={f}>{f}</option>)}
              </select>
            </label>

            <label className="space-y-1">
              <span>Palette couleur</span>
              <select value={palette} onChange={(e) => setPalette(e.target.value)} className="w-full rounded-xl border border-graphite/20 bg-ivory px-3 py-2">
                {palettes.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={modules} onChange={(e) => setModules(e.target.checked)} />
              <span>Ajouter / retirer des modules selon l'usage</span>
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" checked={lighting} onChange={(e) => setLighting(e.target.checked)} />
              <span>Integrer un eclairage premium</span>
            </label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="space-y-4"
        >
          <div className="h-[360px] overflow-hidden rounded-3xl">
            <PremiumImage src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-2xl border border-graphite/10 bg-ivory/80 p-5 text-sm leading-relaxed text-ember/90">
            <p className="font-medium text-graphite">Configuration actuelle</p>
            <p className="mt-2">{selected.name} | {size} | {wood} | {finish} | {palette}</p>
            <p className="mt-2">Modules personnalisés: {modules ? 'Oui' : 'Non'} | Eclairage intégré: {lighting ? 'Oui' : 'Non'}</p>
            <button type="button" className="mt-4 rounded-full bg-graphite px-5 py-2 text-xs uppercase tracking-[0.18em] text-cream transition hover:bg-gold">
              Recevoir une proposition
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

