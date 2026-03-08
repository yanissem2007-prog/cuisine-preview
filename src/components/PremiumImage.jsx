import { useMemo, useState } from 'react';

export default function PremiumImage({ src, alt, className = '' }) {
  const fallback = useMemo(() => 'https://source.unsplash.com/1600x2000/?luxury,interior,wood', []);
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      onError={() => setCurrentSrc(fallback)}
      loading="lazy"
      className={className}
    />
  );
}

