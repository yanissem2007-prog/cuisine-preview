import SectionTitle from '../components/SectionTitle';
import ProductShowcaseSection from '../components/ProductShowcaseSection';
import ProductCustomizer from '../components/ProductCustomizer';
import { dressings } from '../data/dressings';

export default function DressingsPage() {
  return (
    <div className="pt-28">
      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1280px,92%)]">
          <SectionTitle
            eyebrow="Collection Dressings"
            title="Nos dressings de prestige, entre elegance, confort et organisation parfaite."
            description="Nos agencements s'adaptent a vos habitudes: modules ajustables, tiroirs personnalises, miroirs, eclairage integre, finitions bois et accessoires sur mesure."
          />
        </div>
      </section>

      <ProductCustomizer title="Configurez votre dressing sur-mesure" models={dressings} typeLabel="Dressing" />

      {dressings.map((product) => (
        <ProductShowcaseSection key={product.name} product={product} />
      ))}
    </div>
  );
}
