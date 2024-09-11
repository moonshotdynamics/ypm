import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-2">
          <p className="text-xs text-gray-500 dark:text-gray-400 ">
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
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Youngpreneur Media. All rights
            reserved.
          </p>

          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
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
