import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logo from '../assets/icon.jpeg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Our Community', href: '#community' },
    { name: 'Partners', href: '#partners' },
  ];

  const applyLink = 'https://apply.armorhtech.com/';

  return (
    <nav aria-label="Main navigation" className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#102C38]">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 md:px-10">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Armorh Tech"
            className="h-11 w-11 rounded-[28%] bg-[#09172C] object-contain"
          />

          <span className="text-lg font-bold tracking-tight text-[#F8F5EF]">
            Armorh <span className="text-[#62C5B5]">Tech</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#D0DEDA] transition-colors hover:text-[#F28C5B]"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={applyLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#F28C5B] px-5 py-3 text-sm font-semibold text-[#09172C] transition-all hover:-translate-y-0.5 hover:bg-[#FFA77F]"
          >
            Apply Now
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded-full border border-white/15 p-2 text-[#F8F5EF]"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-[#102C38] px-5 pb-7 pt-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#D0DEDA] transition hover:text-[#F28C5B]"
              >
                {link.name}
              </a>
            ))}

            <a
              href={applyLink}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F28C5B] px-5 py-3.5 text-sm font-semibold text-[#09172C]"
            >
              Apply Now
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
