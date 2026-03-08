export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const position = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${position}`}>
      {eyebrow && (
        <p className="mb-4 font-sans text-xs uppercase tracking-[0.35em] text-ember/70">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl leading-tight text-graphite md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-relaxed text-ember/80 md:text-lg">{description}</p>}
    </div>
  );
}

