import { motion } from 'framer-motion';
import {
  BrainCircuit,
  ClipboardList,
  PenTool,
  Code2,
  Server,
  ShieldCheck,
  Sparkles,
  Users,
  Lightbulb,
  Network,
  Target,
} from 'lucide-react';

const tracks = [
  {
    number: '01',
    title: 'AI Integration',
    description:
      'Explore how AI tools and technologies can be integrated into products, workflows, and practical solutions.',
    icon: BrainCircuit,
    color: '#F28C5B',
    tag: 'Intelligent solutions',
  },
  {
    number: '02',
    title: 'Product Management',
    description:
      'Learn to understand user needs, define product direction, and guide ideas from concept to execution.',
    icon: ClipboardList,
    color: '#62C5B5',
    tag: 'Ideas into products',
  },
  {
    number: '03',
    title: 'Product Design',
    description:
      'Understand users, shape experiences, and design digital products that are useful and intuitive.',
    icon: PenTool,
    color: '#E6B96A',
    tag: 'Design with purpose',
  },
  {
    number: '04',
    title: 'Frontend Development',
    description:
      'Build responsive interfaces and bring digital product experiences to life on the web.',
    icon: Code2,
    color: '#62C5B5',
    tag: 'Build the interface',
  },
  {
    number: '05',
    title: 'Backend Development',
    description:
      'Work behind the scenes with application logic, APIs, databases, and the systems that power products.',
    icon: Server,
    color: '#F28C5B',
    tag: 'Power the product',
  },
  {
    number: '06',
    title: 'Software Testing',
    description:
      'Develop the skills to test applications, identify issues, and improve software quality and reliability.',
    icon: ShieldCheck,
    color: '#E6B96A',
    tag: 'Build with confidence',
  },
];

const foundation = [
  {
    icon: Network,
    title: 'Technology ecosystem',
    text: 'Understand how different areas of technology connect.',
  },
  {
    icon: BrainCircuit,
    title: 'AI literacy',
    text: 'Understand AI and its role in modern technology.',
  },
  {
    icon: Users,
    title: 'Communication & collaboration',
    text: 'Work effectively with people across different disciplines.',
  },
  {
    icon: Lightbulb,
    title: 'Problem solving',
    text: 'Identify real world problems and explore meaningful solutions.',
  },
  {
    icon: Target,
    title: 'Career awareness',
    text: 'Develop a clearer understanding of technology career pathways.',
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#0D3438] px-5 py-16 text-[#F8F5EF] md:px-10 md:py-20"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#62C5B5]/10 blur-[40px] md:blur-[120px]" />
        <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#F28C5B]/10 blur-[40px] md:blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.23em] text-[#F28C5B]">
              Explore your path
            </span>

            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Find your track.
              <br />
              <span className="text-[#62C5B5]">Build your future.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-[#C1D2CF] md:ml-auto md:text-lg">
            Six specialised learning tracks. One shared foundation.
            Discover an area of technology that interests you, develop
            practical skills, and turn your knowledge into something real.
          </p>
        </motion.div>

        {/* Track count */}
        <div className="mb-7 flex items-center justify-between border-y border-white/15 py-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B1C5C2]">
            Choose your specialisation
          </span>
          <span className="text-sm font-semibold text-[#62C5B5]">
            06 learning tracks
          </span>
        </div>

        {/* Track cards */}
        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tracks.map((track, index) => {
            const Icon = track.icon;

            return (
              <motion.div
                key={track.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative flex min-h-[285px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#102C38] p-7 transition-all duration-300 hover:border-[#62C5B5]/40 hover:bg-[#123642] hover:shadow-xl hover:shadow-black/10"
              >
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.08] transition-transform duration-500 group-hover:scale-125"
                  style={{ backgroundColor: track.color }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{
                        backgroundColor: `${track.color}20`,
                        color: track.color,
                      }}
                    >
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <span className="text-xs font-semibold tracking-widest text-[#91AAA9]">
                      {track.number}
                    </span>
                  </div>

                  <span
                    className="mt-8 inline-block text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: track.color }}
                  >
                    {track.tag}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#F8F5EF] md:text-[27px]">
                    {track.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-[#B8C8CA]">
                    {track.description}
                  </p>
                </div>

                <div className="relative z-10 mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-medium text-[#91AAA9]">
                    Armorh Tech · Learning Track
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Shared foundation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-[#09172C] p-7 text-[#F8F5EF] md:p-9"
        >
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-[#62C5B5]/15" />
          <div className="absolute -right-10 -top-14 h-52 w-52 rounded-full border border-[#F28C5B]/10" />
          <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[#0F766E]/15 blur-[100px]" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#F28C5B]">
                <Sparkles size={14} />
                Beyond your specialisation
              </span>

              <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">
                One shared foundation.
                <span className="text-[#62C5B5]"> Many possibilities.</span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#B8C8CA] md:text-base">
                Participants specialise in their chosen track while
                developing a shared understanding of the wider technology
                and product ecosystem. Because building great solutions
                takes more than one skill.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F28C5B]">
                  Learn together. Build together.
                </span>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {foundation.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="rounded-xl border border-white/10 bg-white/[0.045] p-5 transition-colors hover:bg-white/[0.08]"
                  >
                    <Icon size={21} className="text-[#62C5B5]" />
                    <h4 className="mt-4 text-sm font-semibold">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-[#AFC0C5]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <div className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-7 text-[#C1D2CF]">
            Different specialisations. Shared knowledge. A common goal:
            developing people who can turn ideas into solutions.
          </p>

          <a
            href="#community"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#F28C5B] transition-all hover:gap-3"
          >
            Discover the experience
          </a>
        </div>
      </div>
    </section>
  );
}
