import Footer from './Footer';
import PageHero from './PageHero';

const eligibility = [
  ['Indian Student', 'Candidate must be an Indian citizen aspiring to study MBBS abroad.'],
  ['NEET Qualified', 'A valid NEET score from 2021 to 2026 is accepted for eligibility.'],
  ['Class 12 PCB', 'Physics, Chemistry, Biology, and English marks are required.'],
  ['Not Enrolled in MBBS', 'Students who have not already secured or completed an MBBS seat can register.'],
];

const pattern = [
  ['Mode', 'Online CBT'],
  ['Duration', '3 Hours'],
  ['Questions', '180 MCQs'],
  ['Marks', '180'],
  ['Negative Marking', 'No'],
  ['Languages', 'English & Hindi'],
];

const steps = [
  ['Register & Complete Your Application', 'Create your candidate account, fill personal and academic details, verify email/mobile, and submit the MNMSE application.'],
  ['Select Up to 3 Partner Colleges', 'Choose three preferred partner universities from the official MNMSE list. These preferences remain active regardless of scholarship outcome.'],
  ['Download Your Admit Card', 'Admit cards are issued through the candidate dashboard and registered email before the examination window.'],
  ['Appear for the Proctored CBT Online', 'Take the Computer-Based Test from a laptop or desktop with webcam, microphone, and stable internet connection.'],
  ['Merit List & Scholarship Announcement', 'Results are evaluated on rank. Scholarship awards are merit-based with no interviews or second rounds.'],
  ['Accept Scholarship or Proceed Regularly', 'Qualified students accept the scholarship route. Others can still continue standard admission counselling for selected colleges.'],
];

const documents = {
  'Student Documents': [
    'Class 10 marksheet for date of birth verification',
    'Class 12 marksheet with PCB and English marks',
    'Aadhaar Card',
    'PAN Card',
    'NEET UG scorecard, if available',
    'Passport, if available',
    'Passport-size photograph',
    'Scanned signature',
  ],
  'Parent / Guardian Documents': [
    "Father's Aadhaar Card",
    "Father's PAN Card",
    "Mother's Aadhaar Card",
    "Mother's PAN Card",
  ],
};

const dates = [
  ['Registration Opens', '5 June 2026', 'Candidate portal goes live'],
  ['Admit Card Issuance', '10 August 2026', 'Via dashboard and registered email'],
  ['Examination Date', '16 August 2026', 'Online CBT, 3 hours, live proctored'],
  ['Result Announcement', 'Within 10-15 Days', 'After the examination date'],
];

const faqs = [
  ['Is the exam the same as NEET UG?', 'No. MNMSE 2026 is a separate scholarship examination, but it follows the NEET UG Physics, Chemistry, and Biology syllabus.'],
  ['Is there negative marking?', 'No. Every correct answer earns 1 mark. Incorrect or unanswered questions carry zero marks.'],
  ['Can I take the exam on a mobile phone?', 'No. The examination must be taken on a laptop or desktop with webcam and microphone because proctoring is required.'],
  ['Who decides the scholarship amount?', 'Scholarship awards are determined by Matrachaya Foundation based on merit rank and selected partner university.'],
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Scholarship Process"
        title="How the Scholarship"
        accent="Process Works."
        description="Everything students need to know about MNMSE 2026: eligibility, exam pattern, documents, college preferences, important dates, and the step-by-step scholarship journey."
        secondaryLabel="View Universities"
        secondaryTo="/universities"
      />

      <section className="bg-white">
        <div className="section-inner">
          <span className="section-tag">Eligibility Criteria</span>
          <h2 className="section-title">Who can apply for MNMSE 2026?</h2>
          <p className="section-desc mb-10">MNMSE 2026 is open to Indian NEET-qualified students who aspire to pursue MBBS at recognized partner universities abroad.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {eligibility.map(([title, desc]) => (
              <article key={title} className="rounded-[18px] border border-border bg-sky p-6">
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy">
        <div className="section-inner">
          <span className="section-tag !bg-white/5 !border-white/10 !text-gold-light">Exam Pattern</span>
          <h2 className="section-title light">What to expect in the exam.</h2>
          <p className="section-desc light mb-10">A Computer-Based Test aligned to the NEET UG syllabus, designed for transparent merit-based scholarship selection.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pattern.map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/15 bg-white/5 p-5 text-center">
                <div className="text-2xl font-black text-gold-light leading-tight">{value}</div>
                <div className="mt-2 text-[11px] font-bold uppercase tracking-widest text-white/50">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="section-inner">
          <span className="section-tag">Step-by-Step Journey</span>
          <h2 className="section-title">Your journey to an MBBS scholarship abroad.</h2>
          <p className="section-desc mb-10">Six clear stages from registration to scholarship acceptance or regular admission guidance.</p>
          <div className="relative space-y-5">
            {steps.map(([title, desc], index) => (
              <article key={title} className="grid grid-cols-[56px_1fr] gap-5 rounded-[18px] border border-border bg-white p-5 shadow-[0_10px_32px_rgba(0,31,63,0.06)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-xl font-black text-white">{index + 1}</div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy leading-tight">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner">
          <span className="section-tag">Documents Required</span>
          <h2 className="section-title">Document checklist.</h2>
          <p className="section-desc mb-10">Keep clear scans ready before registration. JPG, PNG, and PDF formats are accepted.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {Object.entries(documents).map(([group, items]) => (
              <article key={group} className="rounded-[18px] border border-border bg-sky p-6">
                <h3 className="text-xl font-bold text-navy mb-5">{group}</h3>
                <div className="space-y-3">
                  {items.map((item) => (
                    <div key={item} className="rounded-lg bg-white border border-border px-4 py-3 text-sm font-semibold text-muted">
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-light">
        <div className="section-inner">
          <span className="section-tag !bg-white/5 !border-white/10 !text-gold-light">Important Dates</span>
          <h2 className="section-title light">MNMSE 2026 calendar.</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4">
            {dates.map(([title, value, note]) => (
              <div key={title} className="rounded-lg border border-white/15 bg-white/5 p-5">
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/55">{title}</h3>
                <div className="mt-4 text-2xl font-black text-gold-light">{value}</div>
                <p className="mt-2 text-sm leading-6 text-white/60">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-inner">
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">Frequently asked questions.</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqs.map(([question, answer]) => (
              <article key={question} className="rounded-lg border border-border bg-sky p-5">
                <h3 className="text-base font-bold text-navy">{question}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold px-[5vw] py-16 text-center text-navy">
        <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-bold leading-tight">Your MBBS dream starts here.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-navy/75">
          Register from 5 June 2026. One merit-based test, three college choices, and a scholarship that can change your path.
        </p>
        <a href="/#register" className="mt-7 inline-block rounded-lg bg-navy px-7 py-3 text-sm font-bold text-white no-underline hover:bg-navy-light transition">
          Apply Now
        </a>
      </section>

      <Footer />
    </>
  );
}
