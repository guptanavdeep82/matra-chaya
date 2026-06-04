import Footer from './Footer';
import PageHero from './PageHero';

const trustees = [
  ['G', 'Dr. Gurdeep Kaur Nagar', 'Chairperson & Founder', "A visionary leader and the driving force behind Matrachaya's founding, dedicated to social equity and community welfare."],
  ['B', 'Mr. Bobby Bidhuri', 'Trustee', "Brings grassroots experience and deep community connections that guide the Trust's on-ground programme implementation."],
  ['V', 'Mr. Vikas Kumar Kansal', 'Trustee', 'Brings strategic and operational expertise that enables the Trust to scale its impact responsibly across multiple domains.'],
];

const programmes = [
  ['Education & Scientific Advancement', 'Fostering scientific temper through seminars, libraries, labs, exhibitions, and a special focus on women in science, engineering, and medicine.', 'Core Programme'],
  ['Healthcare & Medical Relief', 'Running clinics, dispensaries, maternity homes, and supporting treatment through medicines, blood, artificial limbs, and financial aid.', 'Core Programme'],
  ['Women Welfare & Empowerment', "Working Women's Hostels, child-welfare centres, cancer detection camps, and promotion of women's leadership in professional fields.", 'Core Programme'],
  ['Shelter & Support Services', 'Providing structured residential support for widows, orphans, elderly people, and differently-abled persons with vocational training.', 'Support Programme'],
  ['Emergency Aid', 'Mobilising food, clothing, and medical resources during natural disasters, crises, and personal hardships.', 'Relief Programme'],
  ['Sustainable Livelihood', 'Connecting dairy farmers to markets, training them in business management, and building cooperative models for rural self-reliance.', 'Livelihood Programme'],
];

const values = [
  ['Compassion', 'Every action is rooted in genuine empathy.'],
  ['Integrity', 'Transparent and accountable stewardship of every resource.'],
  ['Inclusivity', 'No barriers of caste, religion, gender, or geography.'],
  ['Empowerment', 'Building lasting capability and self-reliance.'],
  ['Science & Reason', 'Promoting evidence-based thinking in society.'],
];

const galleryImages = [
  '/asset/IMG-20260430-WA0019.jpg.jpeg',
  '/asset/IMG-20260430-WA0018.jpg.jpeg',
  '/asset/IMG-20260430-WA0017.jpg.jpeg',
  '/asset/IMG-20260430-WA0016.jpg.jpeg',
  '/asset/IMG-20260430-WA0014.jpg.jpeg',
  '/asset/IMG-20260430-WA0013.jpg.jpeg',
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Matrachaya Foundation"
        title="The Shelter of"
        accent="a Mother."
        description="A registered charitable trust dedicated to empowering vulnerable communities through education, healthcare, women welfare, sustainable livelihoods, and the MNMSE 2026 scholarship initiative."
        secondaryLabel="View Universities"
        secondaryTo="/universities"
      />

      <section className="bg-white">
        <div className="section-inner">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="section-title">About Matrachaya Charitable Trust</h2>
              <p className="text-[15px] text-muted leading-[1.85] mb-4">
                Matrachaya Charitable Trust was founded by Dr. Gurdeep Kaur Nagar with a singular belief: compassion, when structured and sustained, can transform lives at scale.
              </p>
              <p className="text-[15px] text-muted leading-[1.85] mb-6">
                Through MNMSE 2026, the Trust extends its mission into medical education so that financial barriers do not stand between a meritorious student and a doctor's coat.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-sky border border-border p-5">
                  <h3 className="text-lg font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-sm text-muted leading-7">To build a society where dignity, opportunity, and access to quality education and healthcare are universal.</p>
                </div>
                <div className="rounded-lg bg-sky border border-border p-5">
                  <h3 className="text-lg font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-sm text-muted leading-7">To serve marginalised populations through education, science promotion, medical relief, women welfare, and livelihood initiatives.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[18px] bg-navy p-4 shadow-[0_18px_50px_rgba(0,31,63,0.18)]">
              <video controls className="aspect-video w-full rounded-xl border border-white/10 bg-navy-light object-cover">
                <source src="/asset/VID-20260430-WA0028.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="section-inner">
          <span className="section-tag !bg-white/5 !border-white/10 !text-gold-light">Leadership</span>
          <h2 className="section-title light">Our Founding Trustees.</h2>
          <p className="section-desc light mb-10">The Trust is led by individuals with community insight, institutional knowledge, and commitment to social betterment.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {trustees.map(([initial, name, role, desc]) => (
              <article key={name} className="rounded-[18px] border border-white/15 bg-white/5 p-7 text-center text-white">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold font-serif text-2xl font-black text-navy">{initial}</div>
                <h3 className="text-lg font-bold">{name}</h3>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-gold-light">{role}</div>
                <p className="mt-4 text-sm leading-7 text-white/65">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner">
          <span className="section-tag">Our Work</span>
          <h2 className="section-title">Six pillars of impact.</h2>
          <p className="section-desc mb-10">Every programme is designed to create lasting, self-sustaining change for communities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmes.map(([title, desc, tag]) => (
              <article key={title} className="rounded-[18px] border border-border bg-sky p-6">
                <h3 className="text-lg font-bold text-navy mb-3">{title}</h3>
                <p className="text-sm leading-7 text-muted">{desc}</p>
                <span className="mt-5 inline-block rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-red">{tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light">
        <div className="section-inner">
          <span className="section-tag !bg-white/5 !border-white/10 !text-gold-light">Gallery</span>
          <h2 className="section-title light">Our work in pictures.</h2>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((src) => (
              <img key={src} src={src} alt="Matrachaya Foundation activity" className="aspect-[4/3] w-full rounded-lg object-cover border border-white/10" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner">
          <span className="section-tag">Our Values</span>
          <h2 className="section-title">What we stand for.</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(([name, desc]) => (
              <div key={name} className="rounded-lg border border-border bg-sky p-5 text-center">
                <h3 className="font-bold text-navy">{name}</h3>
                <p className="mt-2 text-xs leading-6 text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
