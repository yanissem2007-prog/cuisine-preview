import { Link } from 'react-router-dom';
import SocialIcons from './SocialIcons';

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos Cuisines', to: '/nos-cuisines' },
  { label: 'Nos Dressings', to: '/nos-dressings' },
  { label: 'Contactez-nous', to: '/contactez-nous' },
];

export default function Footer() {
  return (
    <footer className="border-t border-graphite/10 bg-[#f1e6d8]">
      <div className="mx-auto grid w-[min(1280px,92%)] gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-3xl">Zodiac Cuisine</h3>
          <p className="mt-4 text-sm leading-relaxed text-ember/80">Atelier haut de gamme de cuisines et dressings sur-mesure, entre précision architecturale et matières nobles.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ember/70">Navigation</p>
          <ul className="mt-4 space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="luxury-link text-ember/85">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-ember/70">Contact</p>
          <p className="mt-4 text-ember/85">contact@zodiaccuisine.fr</p>
          <p className="mt-1 text-ember/85">+33 1 84 00 00 00</p>
          <SocialIcons className="mt-5" />
        </div>
      </div>
      <div className="border-t border-graphite/10 py-5 text-center text-sm text-ember/75">
        © {new Date().getFullYear()} Zodiac Cuisine. Tous droits réservés.
      </div>
    </footer>
  );
}

