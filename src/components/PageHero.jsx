import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, accent, description, primaryLabel = 'Apply Now', secondaryLabel, secondaryTo }) {
  return (
    <section className="relative overflow-hidden bg-navy pt-32 pb-20 px-[5vw] text-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="section-tag !bg-white/5 !border-white/10 !text-gold-light">{eyebrow}</span>
        <h1 className="font-serif text-[clamp(42px,7vw,82px)] font-bold leading-[1.02] tracking-normal mb-5">
          {title}
          {accent && (
            <>
              <br />
              <span className="text-gold-light italic">{accent}</span>
            </>
          )}
        </h1>
        <p className="text-[16px] sm:text-lg leading-8 text-white/72 max-w-3xl mx-auto">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="/#register" className="bg-red text-white font-bold text-sm px-7 py-3 rounded-lg no-underline hover:bg-red-light transition">
            {primaryLabel}
          </a>
          {secondaryLabel && secondaryTo && (
            <Link to={secondaryTo} className="border border-white/20 text-white font-bold text-sm px-7 py-3 rounded-lg no-underline hover:border-gold hover:text-gold-light transition">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
