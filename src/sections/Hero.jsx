import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const slides = [
  {
    eyebrow: 'ARMORH TECH FUTURE INITIATIVE',
    number: '01',
    title: 'Building skills.',
    highlight: 'Building futures.',
    description:
      'A free, fully online technology empowerment initiative helping young Nigerians develop practical skills, gain direction and become part of a growing technology community.',
    label: 'Discover the initiative',
    link: '#about',
    visual: 'foundation',
  },
  {
    eyebrow: 'LEARN WITH PURPOSE. BUILD WITH CONFIDENCE.',
    number: '02',
    title: 'Beyond learning.',
    highlight: 'Into building.',
    description:
      'Move beyond tutorials and theory through practical projects, structured learning, mentorship, collaboration and professional exposure.',
    label: 'Explore our learning tracks',
    link: '#programs',
    visual: 'building',
  },
  {
    eyebrow: 'MORE THAN A TRAINING PROGRAM',
    number: '03',
    title: 'Learn. Build. Connect.',
    highlight: 'Continue.',
    description:
      'Become part of a community that grows beyond each cohort, where learners become alumni, mentors, contributors, builders and future partners.',
    label: 'Become part of the community',
    link: '#community',
    visual: 'community',
  },
];

function HeroVisual({ type, reduceMotion }) {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[480px] items-center justify-center">
      {/* Decorative orbit rings */}
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={reduceMotion ? undefined : { duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[85%] w-[85%] rounded-full border border-white/10"
      />
      <motion.div
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={reduceMotion ? undefined : { duration: 35, repeat: Infinity, ease: 'linear' }}
        className="absolute h-[65%] w-[65%] rounded-full border border-dashed border-teal-400/30"
      />

      {/* Background glow */}
      <div className="absolute h-56 w-56 rounded-full bg-teal-500/20 blur-[40px] sm:blur-[90px]" />

      {type === 'foundation' && (
        <div className="relative flex h-64 w-64 items-center justify-center">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -12, 0], rotate: [0, 4, 0] }}
            transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-8 rotate-45 rounded-[2rem] border border-teal-400/40 bg-teal-500/10 backdrop-blur-sm"
          />
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [0, -5, 0] }}
            transition={reduceMotion ? undefined : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-16 rounded-3xl border border-orange-400/50 bg-orange-400/10"
          />
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-3xl border border-white/20 bg-[#10243D] shadow-2xl shadow-teal-950/50">
            <Sparkles size={48} strokeWidth={1.2} className="text-orange-400" />
          </div>
          <span className="absolute right-2 top-12 h-3 w-3 rounded-full bg-orange-400 shadow-[0_0_20px_#F28C5B]" />
          <span className="absolute bottom-8 left-4 h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_18px_#5EEAD4]" />
        </div>
      )}

      {type === 'building' && (
        <div className="relative flex h-64 w-64 items-end justify-center gap-3">
          {[100, 150, 205, 130].map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 20, opacity: 0 }}
              animate={reduceMotion ? { height, opacity: 1 } : { height, opacity: 1 }}
              transition={reduceMotion ? { duration: 0 } : {
                duration: 1,
                delay: index * 0.18,
                repeat: Infinity,
                repeatType: 'reverse',
                repeatDelay: 2,
              }}
              className={`w-12 rounded-t-xl border border-white/10 ${
                index === 2
                  ? 'bg-orange-400/80'
                  : index === 1
                    ? 'bg-teal-500/70'
                    : 'bg-white/10'
              }`}
            />
          ))}
          <div className="absolute -left-5 top-14 h-14 w-14 rounded-2xl border border-orange-300/30 bg-orange-400/10" />
        </div>
      )}

      {type === 'community' && (
        <div className="relative h-72 w-72">
          <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
            <motion.g
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={reduceMotion ? undefined : { duration: 50, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '150px 150px' }}
            >
              <circle cx="150" cy="150" r="105" fill="none" stroke="#0F766E" strokeOpacity=".5" strokeDasharray="5 9" />
              <circle cx="150" cy="45" r="8" fill="#F28C5B" />
              <circle cx="255" cy="150" r="7" fill="#14B8A6" />
              <circle cx="150" cy="255" r="8" fill="#F28C5B" />
              <circle cx="45" cy="150" r="7" fill="#14B8A6" />
            </motion.g>
            <path d="M150 150 L150 45 M150 150 L255 150 M150 150 L150 255 M150 150 L45 150" stroke="#0F766E" strokeOpacity=".5" strokeWidth="1.5" />
          </svg>
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.07, 1] }}
            transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-teal-300/40 bg-teal-500/15 shadow-[0_0_60px_rgba(15,118,110,0.2)]"
          >
            <span className="text-4xl font-semibold tracking-tighter text-white">A.</span>
          </motion.div>
          <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full bg-[#F28C5B] px-3 py-1 text-xs font-semibold text-[#09172C]">LEARN</span>
          <span className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white">BUILD</span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full border border-orange-300/50 bg-[#10243D] px-3 py-1 text-xs font-semibold text-orange-300">CONNECT</span>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full border border-teal-300/50 bg-[#10243D] px-3 py-1 text-xs font-semibold text-teal-200">SOLVE</span>
        </div>
      )}
    </div>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(max-width: 767px)').matches
      : false
  );
  const lightweightMotion = reduceMotion || isMobile;
  const currentSlide = slides[activeSlide];

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 767px)');
    const updateMobile = (event) => setIsMobile(event.matches);

    mobileQuery.addEventListener('change', updateMobile);
    return () => mobileQuery.removeEventListener('change', updateMobile);
  }, []);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (lightweightMotion) return undefined;

    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [lightweightMotion]);

  return (
    <section id="home" className="relative isolate min-h-[620px] overflow-hidden bg-[#09172C] pt-[78px] text-[#F8F5EF]">
      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />

      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-teal-700/20 blur-[40px] md:blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 -z-10 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[40px] md:blur-[130px]" />

      <div className="mx-auto flex min-h-[542px] max-w-7xl flex-col justify-center px-6 py-12 md:px-12 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={lightweightMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={lightweightMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
            transition={{ duration: lightweightMotion ? 0.25 : 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          >
            <div className="max-w-2xl">
              <div className="mb-8 flex items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-300">
                  {currentSlide.eyebrow}
                </p>
              </div>

              <p className="mb-4 text-sm font-medium tracking-[0.2em] text-white/40">
                {currentSlide.number} <span className="text-orange-400">/ 03</span>
              </p>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[76px]">
                {currentSlide.title}
                <span className="mt-2 block text-[#F28C5B]">
                  {currentSlide.highlight}
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                {currentSlide.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={currentSlide.link}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#F28C5B] px-7 py-4 text-sm font-semibold text-[#09172C] transition-all hover:bg-[#FFAA7F]"
                >
                  {currentSlide.label}
                </a>
                <span className="text-sm text-white/50">
                  Free. Fully online. Community-driven.
                </span>
              </div>
            </div>

            <HeroVisual type={currentSlide.visual} reduceMotion={lightweightMotion} />
          </motion.div>
        </AnimatePresence>

        {/* Slide controls */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.number}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? 'w-12 bg-[#F28C5B]'
                    : 'w-6 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
            <span className="ml-3 text-xs tracking-widest text-white/50">
              0{activeSlide + 1} / 03
            </span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-teal-300 hover:bg-teal-500/20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-orange-300 hover:bg-orange-400/10"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/5">
        <motion.div
          key={activeSlide}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 7, ease: 'linear' }}
          className="h-full bg-gradient-to-r from-teal-500 to-orange-400"
        />
      </div>
    </section>
  );
}

export default Hero;
