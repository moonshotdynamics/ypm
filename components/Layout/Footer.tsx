import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10 bg-black text-white/60">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-2 text-center md:text-left">
          <p className="text-xs text-white/50">
            A{' '}
            <Link
              href="https://blueavo.com"
              target="_blank"
              style={{ color: '#FFAA00' }}
            >
              BlueAvo
            </Link>{' '}
            Partner
          </p>
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Youngpreneur Media. All rights
            reserved.
          </p>

          <nav className="flex gap-4 sm:gap-6 justify-center">
            <Link
              className="text-xs hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:text-white transition-colors"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
