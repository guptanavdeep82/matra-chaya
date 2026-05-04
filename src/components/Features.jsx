export default function Features() {
  const cards = [
    { icon: '🏆', title: 'Merit-Based Scholarship', desc: 'Scholarships from 25% to 100% of tuition fees, awarded purely on examination performance — no interviews, no bias.' },
    { icon: '🌍', title: 'Global University Access', desc: 'Your MNMSE score unlocks 50 NMC-recognized universities across 8 countries including Russia, Kazakhstan, Kyrgyzstan, Nepal & more.' },
    { icon: '💻', title: 'Online & Accessible', desc: 'Appear from anywhere in India. A slot-based CBT window ensures you choose a time that works for you.' },
    { icon: '📚', title: 'NEET-Aligned Syllabus', desc: 'No additional preparation required. Physics, Chemistry & Biology as per NCERT Class 11–12 — same as your NEET prep.' },
    { icon: '🤝', title: 'End-to-End Counselling', desc: 'From university selection and document verification to visa guidance and pre-departure orientation — we walk with you.' },
    { icon: '🔒', title: 'Transparent & Fair', desc: 'AI-proctored exam, randomized question banks, independent answer key review — every step is auditable and impartial.' },
  ];

  return (
    <section id="about" className="bg-cream">
      <div className="section-inner">
        <span className="section-tag">Why MNMSE 2026</span>
        <h2 className="section-title">Breaking Barriers, Building Doctors</h2>
        <p className="section-desc mb-12">
          Every year, lakhs of NEET-qualified students miss out on medical education because of financial constraints — not lack of merit. MNMSE 2026 is our answer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-white border-2 border-sky rounded-2xl p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg hover:border-red/20 transition"
            >
              <div className="text-3xl mb-4">{c.icon}</div>
              <div className="text-[16px] font-bold text-navy mb-2">{c.title}</div>
              <div className="text-[13px] text-muted leading-relaxed">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
