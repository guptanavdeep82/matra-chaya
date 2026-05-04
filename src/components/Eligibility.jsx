export default function Eligibility() {
  const cards = [
    {
      title: '🎓 Academic Requirements',
      items: [
        'Appeared in / qualified NEET UG 2026',
        'Min. 50% in PCB in Class 12 (Gen)',
        '45% for SC/ST/OBC as per NMC norms',
        'Citizen of India',
        'Age 17+ as on 31 Dec 2026',
      ],
    },
    {
      title: '📄 Student Documents',
      items: [
        '10th & 12th Marksheet',
        'Aadhaar Card & PAN Card',
        'Passport (if available — not mandatory)',
        'NEET Certificate (not mandatory)',
        'Passport Size Photograph',
        'Signature (scanned / digital)',
      ],
    },
    {
      title: '👨‍👩‍👦 Parent Documents',
      items: [
        "Mother's Aadhaar Card",
        "Mother's PAN Card",
        "Father's Aadhaar Card",
        "Father's PAN Card",
        'Income Certificate (for scholarship priority)',
      ],
    },
  ];

  return (
    <section id="eligibility" className="bg-navy-light">
      <div className="section-inner">
        <span className="section-tag !text-gold-light !border-white/10 !bg-white/5">Who Can Apply</span>
        <h2 className="section-title light">Eligibility Criteria</h2>
        <p className="section-desc light mb-12">
          Open to all Indian students who have qualified or are appearing in NEET UG 2026.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="bg-white/[0.06] border border-white/[0.12] rounded-2xl p-7">
              <h3 className="text-[15px] font-bold text-gold-light mb-3.5 flex items-center gap-2">{c.title}</h3>
              <ul className="list-none m-0 p-0">
                {c.items.map((item) => (
                  <li key={item} className="text-[13px] text-white/[0.82] py-1.5 border-b border-white/[0.07] last:border-0 flex items-start gap-2">
                    <span className="text-gold-light font-bold flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
