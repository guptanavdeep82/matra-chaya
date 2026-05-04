import { useState, useEffect, useCallback } from 'react';

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
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  return (
    <section id="gallery" className="bg-cream py-16">
      <div className="w-full px-[5vw] mb-8">
        <span className="section-tag">Gallery</span>
        <h2 className="section-title">Life at Matrachaya & Medical Learning</h2>
        <p className="section-desc">
          Real photographs representing student learning, healthcare training, and community support.
        </p>
      </div>

      <div
        className="w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Horizontal carousel */}
        <div className="relative flex items-center justify-center gap-4 px-[5vw] h-[320px] md:h-[400px]">
          {/* Prev visible image */}
          {(() => {
            const idx = (current - 1 + images.length) % images.length;
            return (
              <div
                key={`prev-${idx}`}
                className="hidden md:block flex-shrink-0 w-[15%] h-full rounded-xl overflow-hidden opacity-40 scale-90 cursor-pointer transition-all duration-500"
                onClick={() => setCurrent(idx)}
              >
                <img src={images[idx].src} alt={images[idx].caption} className="w-full h-full object-cover" />
              </div>
            );
          })()}

          {/* Center active image */}
          <div className="relative flex-shrink-0 w-full md:w-[65%] h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-navy transition-all duration-500 z-10">
            <img src={images[current].src} alt={images[current].caption} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 md:p-8">
              <p className="text-white text-sm md:text-base font-semibold">{images[current].caption}</p>
            </div>

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-red text-white text-lg flex items-center justify-center shadow-lg hover:bg-red-light transition cursor-pointer"
              aria-label="Previous"
            >
              ‹
            </button>
            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-red text-white text-lg flex items-center justify-center shadow-lg hover:bg-red-light transition cursor-pointer"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          {/* Next visible image */}
          {(() => {
            const idx = (current + 1) % images.length;
            return (
              <div
                key={`next-${idx}`}
                className="hidden md:block flex-shrink-0 w-[15%] h-full rounded-xl overflow-hidden opacity-40 scale-90 cursor-pointer transition-all duration-500"
                onClick={() => setCurrent(idx)}
              >
                <img src={images[idx].src} alt={images[idx].caption} className="w-full h-full object-cover" />
              </div>
            );
          })()}
        </div>

        {/* Thumbnails strip */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-2 px-[5vw] scrollbar-hide justify-center">
          {images.map((img, i) => (
            <button
              key={img.caption}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 w-16 h-11 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition cursor-pointer ${
                i === current ? 'border-red scale-105 shadow-md' : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
