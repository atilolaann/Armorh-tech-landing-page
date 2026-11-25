import { motion } from 'framer-motion';
import {
  Compass,
  BookOpen,
  Users,
  ArrowDownRight,
  MoveUpRight,
  Hammer,
  Lightbulb,
} from 'lucide-react';

const pillars = [
  {
    number: '01',
    icon: Compass,
    title: 'Find your direction',
    description:
      'Discover your place in technology, understand the opportunities available, and develop a clear path forward.',
    accent: '#F28C5B',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Learn with purpose',
    description:
      'Build relevant skills through structured learning, practical guidance, and a strong foundation.',
    accent: '#62C5B5',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Turn learning into building',
    description:
      'Apply what you learn, work on practical projects, and develop solutions to real-world problems.',
    accent: '#F28C5B',
  },
  {
    number: '04',
    icon: Users,
    title: 'Grow with a community',
    description:
      'Connect with peers, mentors, and people who challenge you to keep learning and building.',
    accent: '#62C5B5',
  },
];

const highlights = [
  'Structured learning',
  'Practical projects',
  'Mentorship',
  'Collaboration',
  'Professional exposure',
  'A growing community',
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#102C38] px-5 py-16 text-[#F8F5EF] md:px-10 md:py-20"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0F766E]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F28C5B]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute right-[8%] top-28 h-36 w-36 rounded-full border border-[#62C5B5]/10" />
        <div className="absolute right-[11%] top-36 h-28 w-28 rounded-full border border-[#F28C5B]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end"
        >
          <div>
            <a
              href="#about"
              className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F28C5B] transition-colors hover:text-[#FFC09F]"
            >
              <span className="h-px w-8 bg-[#F28C5B]" />
              The opportunity
              <MoveUpRight size={13} />
            </a>

            <h2 className="max-w-md text-4xl font-semibold leading-[1.12] tracking-tight md:text-5xl lg:text-6xl">
              Technology is full of possibilities.
              <span className="text-[#62C5B5]"> Access should be too.</span>
            </h2>
          </div>

          <div className="max-w-xl md:ml-auto">
            <p className="text-base leading-8 text-[#D0DCD9] md:text-lg">
              Armorh Tech Future Initiative is a free, fully online technology
              empowerment initiative for undergraduates and recent graduates
              in Nigeria.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#AFC2C0] md:text-base">
              We create opportunities for young people to develop practical
              skills, gain direction, connect with others, and turn what they
              learn into meaningful work.
            </p>
          </div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-[#091E2C] p-7 md:p-9"
        >
          <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#62C5B5]/10" />
          <div className="absolute -right-4 -top-12 h-48 w-48 rounded-full border border-[#F28C5B]/10" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62C5B5]">
                Our approach
              </span>
              <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                Don't just learn it.
                <br />
                <span className="text-[#F28C5B]">Build with it.</span>
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#B9CBC8] md:text-base">
                Learning is the beginning. We want participants to go beyond
                understanding concepts, apply their knowledge, collaborate on
                projects, and develop solutions that demonstrate what they can do.
              </p>
            </div>

            <div className="flex items-center gap-3 md:flex-col md:items-start">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/25 text-[#62C5B5]">
                <Lightbulb size={27} />
              </div>
              <ArrowDownRight
                size={32}
                className="rotate-[-45deg] text-[#F28C5B] md:rotate-0"
              />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F28C5B]/15 text-[#F28C5B]">
                <Hammer size={27} />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#AFC2C0]">
              The journey
            </span>
            <span className="rounded-full border border-[#62C5B5]/30 bg-[#0F766E]/15 px-4 py-2 text-sm text-[#A9E1D6]">
              Learn
            </span>
            <ArrowDownRight size={15} className="text-[#F28C5B]" />
            <span className="rounded-full border border-[#F28C5B]/30 bg-[#F28C5B]/10 px-4 py-2 text-sm text-[#FFC09F]">
              Build
            </span>
            <ArrowDownRight size={15} className="text-[#F28C5B]" />
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-[#E0EAE7]">
              Grow
            </span>
          </div>
        </motion.div>

        {/* Four pillars */}
        <div className="mb-10">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <a
                href="#mission"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F28C5B] transition-colors hover:text-[#FFC09F]"
              >
                What drives us
                <MoveUpRight size={13} />
              </a>
              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                More than learning. A path to building.
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#AFC2C0]">
              Every part of the experience is designed to help participants
              move forward.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.div
                  key={pillar.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition-colors duration-300 hover:border-[#62C5B5]/40 hover:bg-white/[0.075]"
                >
                  <div className="mb-9 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-widest text-[#829C9A]">
                      {pillar.number}
                    </span>
                    <Icon
                      size={23}
                      style={{ color: pillar.accent }}
                      strokeWidth={1.6}
                    />
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-[#F8F5EF]">
                    {pillar.title}
                  </h4>
                  <p className="text-sm leading-7 text-[#B4C6C2]">
                    {pillar.description}
                  </p>

                  <div
                    className="mt-7 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16"
                    style={{ backgroundColor: pillar.accent }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* What participants experience */}
        <div className="grid gap-8 border-t border-white/10 pt-9 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#62C5B5]">
              The experience
            </span>
            <h3 className="mt-3 text-2xl font-semibold leading-snug md:text-3xl">
              The right foundation.
              <span className="text-[#F28C5B]"> The chance to create.</span>
            </h3>
          </div>

          <div className="flex flex-wrap gap-2.5 md:justify-end">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-[#D0DCD9] transition-colors hover:border-[#62C5B5]/40 hover:bg-[#0F766E]/15"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-lg font-medium leading-8 text-[#D9E5E1] md:text-xl">
            We are building more than a learning experience. We are building
            people who can turn knowledge into solutions.
          </p>
          <a
            href="#mission"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#F28C5B] transition-all hover:gap-3"
          >
            Discover what drives us
            <MoveUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
