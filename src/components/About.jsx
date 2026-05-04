export default function About() {
  return (
    <section id="about-org" className="bg-white">
      <div className="section-inner">
        <span className="section-tag">Who We Are</span>
        <h2 className="section-title">
          About Matrachaya
          <br />
          Charitable Trust
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-14">
          <div>
            <p className="text-[15px] text-muted leading-[1.85] mb-4">
              Matrachhaya Charitable Trust is a not-for-profit organisation devoted to holistic community development. Our work spans across education, health, women empowerment, disaster relief, and livelihood generation, with special attention to gender equity and scientific literacy.
            </p>
            <p className="text-[15px] text-muted leading-[1.85] mb-6">
              Through MNMSE 2026, we extend our mission into the realm of medical education — believing that financial barriers should never stand between a meritorious student and a doctor&apos;s coat. Every scholarship we award is a life transformed, and a community strengthened.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['📚 Education', '🏥 Health', '👩 Women Empowerment', '🌊 Disaster Relief', '💼 Livelihood Generation', '⚖️ Gender Equity', '🔬 Scientific Literacy'].map((tag) => (
                <div key={tag} className="bg-sky border border-sky rounded-full px-4 py-1.5 text-xs font-bold text-[#111] flex items-center gap-1.5">
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[20px] overflow-hidden bg-navy-light aspect-video flex flex-col items-center justify-center relative border-[3px] border-[#222] shadow-[0_20px_60px_rgba(0,0,0,0.2)] cursor-pointer hover:border-gold hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(0,0,0,0.3)] transition">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-black/60 to-[#111]/90">
              <div className="w-[72px] h-[72px] rounded-full bg-red flex items-center justify-center mb-4 transition hover:scale-110">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 fill-white ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <div className="text-white/80 text-sm font-semibold">Watch Our Story</div>
              <div className="text-white/40 text-xs mt-1.5">Matrachaya Foundation — Corporate Film</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
