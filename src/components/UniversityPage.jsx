import Footer from './Footer';
import PageHero from './PageHero';

const countryGroups = [
  {
    country: 'Russia',
    flag: 'RU',
    count: '19 Universities',
    note: 'Research-intensive medical education across established state universities.',
    universities: [
      'Kazan State Medical University',
      'Volgograd State Medical University',
      'Siberian State Medical University',
      'Perm State Medical University',
      'Samara State Medical University',
      'Ural State Medical University',
      'North Caucasian State Medical Academy',
      'Voronezh State Medical University',
      'Kemerovo State Medical University',
      'Tver State Medical University',
      'Yaroslavl State Medical University',
      'Privolzhsky Research Medical University',
      'Tambov State University',
      'Orel State University',
      'Ulyanovsk State University',
      'Altai State Medical University',
      'North-Western State Medical University',
      'Omsk State Medical University',
      'Sevastopol State University',
    ],
  },
  {
    country: 'Uzbekistan',
    flag: 'UZ',
    count: '7 Universities',
    note: 'Growing Central Asian medical education hub with affordable MBBS options.',
    universities: [
      'Tashkent Medical Academy',
      'Samarkand State Medical University',
      'Bukhara State Medical Institute',
      'Andijan State Medical Institute',
      'Fergana Medical Institute of Public Health',
      'Navoi State University',
      'Gulistan State University',
    ],
  },
  {
    country: 'Kazakhstan',
    flag: 'KZ',
    count: '7 Universities',
    note: 'NMC-recognized universities with strong clinical training pathways.',
    universities: [
      'Asfendiyarov Kazakh National Medical University',
      'Karaganda Medical University',
      'South Kazakhstan Medical Academy',
      'Semey Medical University',
      'West Kazakhstan Marat Ospanov Medical University',
      'North Kazakhstan University Medical Faculty',
      'Kazakh-Russian Medical University',
    ],
  },
  {
    country: 'Bangladesh',
    flag: 'BD',
    count: '10 Colleges',
    note: 'Neighbouring-country medical colleges with familiar academic environment.',
    universities: [
      'Dhaka National Medical College',
      'Enam Medical College',
      'Jahurul Islam Medical College',
      'Community Based Medical College',
      'Green Life Medical College',
      'Anwer Khan Modern Medical College',
      'President Abdul Hamid Medical College',
      'Medical College for Women & Hospital',
      'Eastern Medical College',
      'Monno Medical College',
    ],
  },
  {
    country: 'Nepal',
    flag: 'NP',
    count: '8 Colleges',
    note: 'Close-to-home MBBS pathways with cultural and language familiarity.',
    universities: [
      'Kathmandu Medical College',
      'Nepal Medical College',
      'Manipal College of Medical Sciences',
      'Universal College of Medical Sciences',
      'National Medical College',
      'KIST Medical College',
      'Chitwan Medical College',
      'Lumbini Medical College',
    ],
  },
  {
    country: 'Vietnam',
    flag: 'VN',
    count: '2 Universities',
    note: 'Selective South-East Asian options for internationally minded students.',
    universities: ['Hanoi Medical University', 'Ho Chi Minh City University of Medicine and Pharmacy'],
  },
  {
    country: 'Tonga',
    flag: 'TO',
    count: '1 University',
    note: 'Emerging international medical education option.',
    universities: ['Tonga National University'],
  },
  {
    country: 'Timor Leste',
    flag: 'TL',
    count: '2 Universities',
    note: 'Developing academic destination for future medical professionals.',
    universities: ['Universidade Catolica Timorense (UCT)', 'Universidade da Paz (UNPAZ)'],
  },
];

export default function UniversityPage() {
  const total = countryGroups.reduce((sum, group) => sum + group.universities.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Participating Universities"
        title="Medical Universities"
        accent="for MNMSE 2026."
        description={`${total} partner medical universities and colleges across 8 countries. Students can shortlist preferred institutions during registration and pursue scholarship-supported MBBS admission abroad.`}
        secondaryLabel="How It Works"
        secondaryTo="/scholarship"
      />

      <section className="bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              ['57', 'Partner Institutions'],
              ['8', 'Countries'],
              ['3', 'College Preferences'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-border bg-sky p-6 text-center">
                <div className="text-4xl font-black text-red leading-none">{value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-muted">{label}</div>
              </div>
            ))}
          </div>

          <span className="section-tag">University List</span>
          <h2 className="section-title">Choose from recognized partner universities.</h2>
          <p className="section-desc mb-10">
            The list below groups institutions by country so students can quickly compare location options before filling their MNMSE preferences.
          </p>

          <div className="space-y-8">
            {countryGroups.map((group) => (
              <article key={group.country} className="rounded-[18px] border border-border bg-white shadow-[0_14px_44px_rgba(0,31,63,0.08)] overflow-hidden">
                <div className="bg-navy px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold tracking-[0.18em] text-gold-light uppercase">{group.flag}</div>
                    <h3 className="font-serif text-3xl font-bold text-white leading-tight">{group.country}</h3>
                    <p className="text-sm text-white/65 mt-1">{group.note}</p>
                  </div>
                  <div className="self-start md:self-center rounded-full bg-white/10 border border-white/15 px-4 py-2 text-sm font-bold text-white">
                    {group.count}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
                  {group.universities.map((university, index) => (
                    <div key={university} className="flex items-center gap-3 rounded-lg border border-border bg-sky/70 p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-navy text-xs font-black">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold text-navy leading-snug">{university}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-[5vw] py-16 text-center text-navy">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-bold leading-tight">Ready to unlock your MBBS scholarship?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-navy/75">
          Register for MNMSE 2026 and select up to three partner institutions during your application.
        </p>
        <a href="/#register" className="mt-7 inline-block rounded-lg bg-navy px-7 py-3 text-sm font-bold text-white no-underline hover:bg-navy-light transition">
          Apply Now
        </a>
      </section>

      <Footer />
    </>
  );
}
