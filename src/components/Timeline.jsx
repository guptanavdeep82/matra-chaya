export default function Timeline() {
  const items = [
    { dot: '📣', date: '1 May 2026', title: 'Official Launch', desc: 'Announcement & website goes live' },
    { dot: '📝', date: '5 May 2026', title: 'Registration Opens', desc: 'Portal live, documents upload enabled' },
    { dot: '⏰', date: '10 June 2026', title: 'Registration Closes', desc: 'Last date for form & fee submission' },
    { dot: '🪪', date: '12 June 2026', title: 'Admit Card', desc: 'Download from candidate login portal' },
    { dot: '✍️', date: '15–20 Jun 2026', title: '⭐ Exam Window', desc: 'Online CBT · Slot-based · AI Proctored', highlight: true },
    { dot: '🎉', date: '30 June 2026', title: 'Result Declaration', desc: 'Scorecards, ranks & scholarship eligibility published' },
    { dot: '🏛️', date: '5 Jul 2026 →', title: 'Counselling Begins', desc: 'University preference, offer letters, visa support' },
  ];

  return (
    <section id="timeline" className="bg-cream">
      <div className="section-inner">
        <span className="section-tag">Important Dates</span>
        <h2 className="section-title">Examination Calendar 2026</h2>
        <p className="section-desc mb-12">
          All key dates at a glance. Mark your calendar — every milestone matters.
        </p>
        <div className="mt-14 overflow-x-auto pb-4">
          <div className="flex items-start min-w-[900px] relative px-6">
            {/* gradient line */}
            <div
              className="absolute top-10 left-[60px] right-[60px] h-[3px] z-0"
              style={{ background: 'linear-gradient(90deg,#111,#d72638,#e8a020,#111)' }}
            />
            {items.map((item) => (
              <div key={item.title} className="flex-1 flex flex-col items-center relative z-10 px-2">
                <div
                  className={`w-20 h-20 rounded-full bg-white border-[3px] border-[#111] flex items-center justify-center text-[26px] mb-3.5 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition hover:bg-navy-light hover:border-red ${
                    item.highlight ? 'bg-red border-[#111] shadow-[0_8px_28px_rgba(215,38,56,0.35)]' : ''
                  }`}
                >
                  {item.dot}
                </div>
                <div className="font-mono text-[11px] text-red font-semibold mb-1 text-center tracking-wide">{item.date}</div>
                <div className="text-[13px] font-bold text-navy text-center mb-1 leading-snug">{item.title}</div>
                <div className="text-[11px] text-muted text-center leading-relaxed max-w-[110px]">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
