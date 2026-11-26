import { ArrowUpRight } from 'lucide-react';
import logo from '../assets/icon.jpeg';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071322] px-5 pb-8 pt-16 text-[#F8F5EF] md:px-10 md:pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src={logo}
                alt="Armorh Tech logo"
                className="h-11 w-11 rounded-[28%] bg-[#09172C] object-contain"
              />
              <span className="text-xl font-bold tracking-tight">
                Armorh <span className="text-[#62C5B5]">Tech</span>
              </span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#AFC0C5]">
              Building skills. Building people. Building solutions.
              Empowering the next generation of technology builders
              and problem-solvers.
            </p>

            <a
              href="https://apply.armorhtech.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#F28C5B] transition hover:gap-3"
            >
              Become part of the community
              <ArrowUpRight size={17} />
            </a>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#62C5B5]">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm text-[#B8C8CA]">
              <a href="#about" className="transition hover:text-white">About us</a>
              <a href="#mission" className="transition hover:text-white">Our mission</a>
              <a href="#programs" className="transition hover:text-white">Learning tracks</a>
              <a href="#community" className="transition hover:text-white">Community</a>
              <a href="#partners" className="transition hover:text-white">Partnerships</a>
            </div>
          </div>

          {/* Get involved */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#62C5B5]">
              Get involved
            </h3>

            <p className="mt-6 max-w-xs text-sm leading-7 text-[#AFC0C5]">
              Interested in learning, contributing or partnering with us?
              We'd love to connect.
            </p>

            <a
              href="https://apply.armorhtech.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#F28C5B]/50 px-5 py-2.5 text-sm font-semibold text-[#F28C5B] transition hover:bg-[#F28C5B] hover:text-[#09172C]"
            >
              Apply to join
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#82949C]">
            © {new Date().getFullYear()} Armorh Tech. All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wide text-[#62C5B5]">
            Equipped to build.
          </p>
        </div>
      </div>
    </footer>
  );
}
