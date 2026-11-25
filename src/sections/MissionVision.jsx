import { motion } from 'framer-motion';
import {
  Compass,
  Target,
  ArrowUpRight,
  Sparkles,
  Layers3,
  Lightbulb,
} from 'lucide-react';

export default function MissionVision() {
  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-[#09172C] px-5 py-16 text-[#F8F5EF] md:px-10 md:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#0F766E]/15 blur-[130px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#F28C5B]/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="absolute right-[12%] top-24 h-52 w-52 rounded-full border border-[#0F766E]/20" />
        <div className="absolute right-[15%] top-32 h-40 w-40 rounded-full border border-[#F28C5B]/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#F28C5B]">
            <span className="h-px w-8 bg-[#F28C5B]" />
            Our purpose
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Driven by purpose.
            <br />
            <span className="text-[#62C5B5]">Focused on impact.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#B8C8CA] md:text-lg">
            We believe technology can create opportunities, solve meaningful
            problems, and shape a better future. Our mission and vision guide
            how we make that possible.
          </p>
        </motion.div>

        {/* Vision and Mission */}
        <div className="grid gap-5 lg:grid-cols-2">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[28px] border border-[#62C5B5]/20 bg-[#102C38] p-8 md:p-11"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#62C5B5]/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#62C5B5]/10" />

            <div className="relative z-10">
              <div className="mb-12 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/25 text-[#62C5B5]">
                  <Compass size={27} strokeWidth={1.6} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62C5B5]">
                  01 / Where we're going
                </span>
              </div>

              <h3 className="text-3xl font-semibold md:text-4xl">
                Our Vision
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#D0DEDA] md:text-lg">
                To build a sustainable community of future technology
                professionals, builders, and problem-solvers who use
                technology to create opportunities and develop solutions to
                real-world problems.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <Sparkles size={17} className="text-[#62C5B5]" />
                <span className="text-sm text-[#AFC5C0]">
                  A future shaped by people who build.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[28px] border border-[#62C5B5]/20 bg-[#102C38] p-8 text-[#F8F5EF] md:p-10"
          >
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-[#62C5B5]/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#62C5B5]/10" />

            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F766E]/25 text-[#62C5B5]">
                  <Target size={27} strokeWidth={1.6} />
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#62C5B5]">
                  02 / What we do
                </span>
              </div>

              <h3 className="text-3xl font-semibold md:text-4xl">
                Our Mission
              </h3>

              <p className="mt-6 max-w-lg text-base leading-8 text-[#D0DEDA] md:text-lg">
                To provide accessible, practical, and community-driven
                technology development opportunities that equip young people
                with relevant skills, encourage collaboration, and inspire
                them to build solutions with lasting impact.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <Lightbulb size={17} className="text-[#62C5B5]" />
                <span className="text-sm text-[#AFC5C0]">
                  Creating opportunities to learn and build.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Guiding philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-[#10243D]/70 px-7 py-10 text-center md:py-12"
        >
          <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#0F766E]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#F28C5B]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-5 flex justify-center">
              <Layers3 size={25} className="text-[#F28C5B]" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#62C5B5]">
              Our guiding philosophy
            </span>

            <h3 className="mx-auto mt-6 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
              Building skills.
              <span className="text-[#62C5B5]"> Building people.</span>
              <br />
              Building solutions.
              <span className="text-[#F28C5B]"> Building a future.</span>
            </h3>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#AFC0C5] md:text-base">
              Every opportunity we create is a step towards a generation
              equipped not just to participate in technology, but to shape it.
            </p>

            <a
              href="#programs"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F28C5B] px-6 py-3.5 text-sm font-semibold text-[#09172C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFAB80]"
            >
              Explore our learning tracks
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
