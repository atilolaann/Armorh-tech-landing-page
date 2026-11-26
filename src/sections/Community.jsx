import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Handshake, Sparkles } from 'lucide-react';

export default function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#09172C] px-5 py-16 text-[#F8F5EF] md:px-10 md:py-20"
    >
      <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#0F766E]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F28C5B]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.23em] text-[#F28C5B]">
            More than a learning experience
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            A community built to
            <span className="text-[#62C5B5]"> grow together.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#B8C8CA]">
            Armorh Tech is more than a place to learn. It is a growing
            community where people connect, share knowledge, build
            solutions and create opportunities together.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Users,
              title: 'Learn together',
              text: 'Connect with other aspiring technology professionals and grow through shared experiences.',
            },
            {
              icon: Sparkles,
              title: 'Build together',
              text: 'Collaborate, exchange ideas and turn knowledge into practical solutions.',
            },
            {
              icon: Handshake,
              title: 'Grow together',
              text: 'Build lasting connections with mentors, industry professionals and fellow builders.',
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-[#102C38] p-7"
              >
                <Icon size={27} className="text-[#62C5B5]" />
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#B8C8CA]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          id="partners"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-[28px] border border-[#62C5B5]/20 bg-[#0D3438] px-7 py-10 text-center md:px-14 md:py-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F28C5B]">
            Be part of the impact
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">
            The future is built by people who dare to build.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#C1D2CF] md:text-base">
            Whether you are looking to learn, contribute or partner
            with us, there is a place for you in the Armorh Tech community.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://apply.armorhtech.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#F28C5B] px-7 py-3.5 text-sm font-semibold text-[#09172C] transition-all hover:-translate-y-1 hover:bg-[#FFA77F]"
            >
              Apply to join
              <ArrowUpRight size={17} />
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
