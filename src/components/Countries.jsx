export default function Countries() {
  const countries = [
    { flag: '🇷🇺', name: 'Russia', unis: '12 Partner Universities', tag: 'Europe-Asia · Research-Intensive' },
    { flag: '🇰🇿', name: 'Kazakhstan', unis: '10 Partner Universities', tag: 'Central Asia · NMC-Approved' },
    { flag: '🇰🇬', name: 'Kyrgyzstan', unis: '9 Partner Universities', tag: 'Central Asia · Affordable' },
    { flag: '🇺🇿', name: 'Uzbekistan', unis: '6 Partner Universities', tag: 'Central Asia · Growing Sector' },
    { flag: '🇹🇯', name: 'Tajikistan', unis: '5 Partner Universities', tag: 'Central Asia · Emerging' },
    { flag: '🇳🇵', name: 'Nepal', unis: '4 Partner Universities', tag: 'South Asia · Culturally Familiar' },
    { flag: '🇹🇱', name: 'Timor Leste', unis: '2 Partner Universities', tag: 'South-East Asia · Emerging' },
    { flag: '🇧🇩', name: 'Bangladesh', unis: '2 Partner Universities', tag: 'South Asia · Neighbouring' },
  ];

  return (
    <section id="countries" className="bg-white">
      <div className="section-inner">
        <span className="section-tag">Eligible Countries</span>
        <h2 className="section-title">50 Universities. 8 Countries.</h2>
        <p className="section-desc mb-12">
          All partner universities are NMC-recognized and listed in the World Directory of Medical Schools. Your degree will be valid for practicing medicine in India.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {countries.map((c) => (
            <div
              key={c.name}
              className="border-2 border-sky rounded-2xl p-6 flex flex-col items-center text-center transition hover:border-red hover:shadow-[0_8px_32px_rgba(215,38,56,0.1)] hover:-translate-y-0.5 cursor-default"
            >
              <div className="text-[42px] leading-none mb-2.5">{c.flag}</div>
              <div className="text-[17px] font-bold text-navy mb-1">{c.name}</div>
              <div className="text-[13px] text-red font-bold mb-1">{c.unis}</div>
              <div className="inline-block bg-sky rounded px-2.5 py-0.5 text-[11px] text-navy font-semibold mt-1">{c.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
