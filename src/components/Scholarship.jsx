export default function Scholarship() {
  const cards = [
    { crown: '👑', pct: '100%', label: 'Full Tuition Scholarship', desc: 'Complete tuition waiver for the highest-achieving candidates — your entire MBBS tuition, covered.', cls: 'bg-gradient-to-br from-red to-[#A01828] text-white shadow-red/35 shadow-xl' },
    { crown: '🥈', pct: '75%', label: 'Three-Quarter Scholarship', desc: 'Awarded to strong performers — three-quarters of your tuition fee taken care of.', cls: 'bg-white/10 border border-white/20 text-white' },
    { crown: '🥉', pct: '50%', label: 'Half Tuition Scholarship', desc: 'Half your tuition fee waived — a significant step toward affordable MBBS abroad.', cls: 'bg-white/[0.07] border border-white/[0.13] text-white' },
    { crown: '🎖️', pct: '25%', label: 'Merit Scholarship', desc: 'Recognizing consistent performers — a quarter of tuition fee scholarship for eligible candidates.', cls: 'bg-white/[0.04] border border-white/[0.08] text-white/85' },
  ];

  return (
    <section id="scholarship" className="relative overflow-hidden bg-navy py-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="relative z-10 section-inner">
        <span className="section-tag !text-gold-light !border-white/10 !bg-white/5">Scholarship Slabs</span>
        <h2 className="section-title light">How Much Can You Achieve?</h2>
        <p className="section-desc light mb-12">
          Your performance in MNMSE 2026 directly determines your scholarship percentage. The stronger your score, the more you save on your MBBS journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => (
            <div
              key={c.pct}
              className={`rounded-[18px] p-8 text-center transition hover:-translate-y-1.5 ${c.cls}`}
            >
              <div className="text-[30px] mb-3.5">{c.crown}</div>
              <div className="font-sans text-[56px] font-bold leading-none mb-1.5">{c.pct}</div>
              <div className="text-xs opacity-80 uppercase tracking-widest font-medium mb-2">{c.label}</div>
              <div className="text-[13px] opacity-65 leading-relaxed mt-3 pt-3 border-t border-white/15">{c.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-[13px] text-white/40 relative z-10">
          Minimum qualifying score: 50% in MNMSE 2026 &nbsp;|&nbsp; Scholarship disbursed directly to partner university
        </p>
      </div>
    </section>
  );
}
