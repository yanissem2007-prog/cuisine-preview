import { Instagram, Pin, Youtube, Music2 } from 'lucide-react';

const links = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Pin, href: '#', label: 'Pinterest' },
  { icon: Music2, href: '#', label: 'TikTok' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function SocialIcons({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="rounded-full border border-graphite/20 bg-white/60 p-2 text-graphite/85 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  );
}

