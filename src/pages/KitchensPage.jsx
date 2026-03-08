import SectionTitle from '../components/SectionTitle';
import ProductShowcaseSection from '../components/ProductShowcaseSection';
import ProductCustomizer from '../components/ProductCustomizer';
import { kitchens } from '../data/kitchens';

export default function KitchensPage() {
  return (
    <div className="pt-28">
      <section className="py-14 md:py-20">
        <div className="mx-auto w-[min(1280px,92%)]">
          <SectionTitle
            eyebrow="Collection Cuisines"
            title="Nos cuisines premium, pensees comme des pieces d'architecture interieure."
            description="Chaque modele est personnalisable: dimensions, modules, finitions, teintes bois, organisation interieure, accessoires et implantation selon votre piece."
          />
        </div>
      </section>

      <ProductCustomizer title="Composez votre cuisine ideale" models={kitchens} typeLabel="Cuisine" />

      {kitchens.map((product) => (
        <ProductShowcaseSection key={product.name} product={product} />
      ))}
    </div>
  );
}
