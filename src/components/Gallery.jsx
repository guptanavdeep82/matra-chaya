import { useState, useEffect } from 'react';

export default function Gallery() {
  const images = [
    { src: '/asset/IMG-20260430-WA0005.jpg.jpeg', caption: 'Medical students in an interactive classroom session' },
    { src: '/asset/IMG-20260430-WA0006.jpg.jpeg', caption: 'Hands-on hospital training and clinical exposure' },
    { src: '/asset/IMG-20260430-WA0007.jpg.jpeg', caption: 'Mentorship from experienced medical professionals' },
    { src: '/asset/IMG-20260430-WA0008.jpg.jpeg', caption: 'Community healthcare initiatives and outreach' },
    { src: '/asset/IMG-20260430-WA0010.jpg.jpeg', caption: 'Laboratory-based science and research learning' },
    { src: '/asset/IMG-20260430-WA0011.jpg.jpeg', caption: 'Scholarship success and future doctor milestones' },
    { src: '/asset/IMG-20260430-WA0013.jpg.jpeg', caption: 'Student orientation and welcome program' },
    { src: '/asset/IMG-20260430-WA0014.jpg.jpeg', caption: 'Group study sessions and peer learning' },
    { src: '/asset/IMG-20260430-WA0016.jpg.jpeg', caption: 'Clinical skills workshop' },
    { src: '/asset/IMG-20260430-WA0017.jpg.jpeg', caption: 'Anatomy lab practical training' },
    { src: '/asset/IMG-20260430-WA0018.jpg.jpeg', caption: 'Campus infrastructure and learning spaces' },
    { src: '/asset/IMG-20260430-WA0019.jpg.jpeg', caption: 'Student welfare and counseling sessions' },
    { src: '/asset/IMG-20260430-WA0020.jpg.jpeg', caption: 'Medical simulation lab training' },
    { src: '/asset/IMG-20260430-WA0021.jpg.jpeg', caption: 'Cultural exchange and student activities' },
    { src: '/asset/IMG-20260430-WA0022.jpg.jpeg', caption: 'Research and academic collaboration' },
    { src: '/asset/IMG-20260430-WA0023.jpg.jpeg', caption: 'Hostel facilities and student accommodation' },
    { src: '/asset/IMG-20260430-WA0024.jpg.jpeg', caption: 'Sports and extracurricular programs' },
    { src: '/asset/IMG-20260430-WA0025.jpg.jpeg', caption: 'Annual day and celebration events' },
    { src: '/asset/IMG-20260430-WA0026.jpg.jpeg', caption: 'Library and resource center' },
    { src: '/asset/IMG-20260430-WA0027.jpg.jpeg', caption: 'Faculty and guest lectures' },
    { src: '/asset/IMG-20260430-WA0029.jpg.jpeg', caption: 'Pre-departure guidance session' },
    { src: '/asset/IMG-20260430-WA0030.jpg.jpeg', caption: 'University tie-ups and partnerships' },
    { src: '/asset/IMG-20260430-WA0031.jpg.jpeg', caption: 'Graduation and convocation ceremony' },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <section id="gallery" className="bg-cream py-16">
      <div className="w-full px-[5vw] mb-8">
        <span className="section-tag">Gallery</span>
        <h2 className="section-title">Life at Matrachaya & Medical Learning</h2>
        <p className="section-desc">
          Real photographs representing student learning, healthcare training, and community support.
        </p>
      </div>

      <div className="w-full px-[5vw] relative">
        {/* Main slider */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)] bg-navy aspect-[16/9] max-h-[520px]">
          {images.map((img, i) => (
            <div
              key={img.caption}
              className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10">
                <p className="text-white text-sm md:text-base font-semibold max-w-xl">{img.caption}</p>
              </div>
            </div>
          ))}

          {/* Nav arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xl flex items-center justify-center hover:bg-white/40 transition cursor-pointer"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xl flex items-center justify-center hover:bg-white/40 transition cursor-pointer"
            aria-label="Next"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-3 mt-5 overflow-x-auto pb-2 scrollbar-hide justify-center">
          {images.map((img, i) => (
            <button
              key={img.caption}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                i === current ? 'border-red scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition cursor-pointer ${
                i === current ? 'bg-red w-7' : 'bg-navy/25 hover:bg-navy/50'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
