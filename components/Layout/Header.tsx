'use client';
import {
  Popover,
  Transition,
  PopoverPanel,
  PopoverButton,
} from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '../../public/assets/images/logo.png';
import Magnetic from '@/components/Magnetic';

const navigation = [
  { name: 'Our Work', href: '/our-work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact-us' },
];

const Header = () => {
  const routerPathname = usePathname();
  const isActive = (pathname: string) => routerPathname === pathname;

  return (
    <Popover as="header" className="fixed top-0 w-full z-50">
      {({ open }) => (
        <>
          <nav className="mx-auto px-6 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/10 transition-all duration-300">
            <div className="flex items-center" onClick={() => window.location.assign('/')}>
              <Image src={logo} alt="logo" height={40} width={50} />
              <Link
                href="/"
                className="text-2xl font-bold text-white tracking-tight ml-2"
              >
                Youngpreneur Media
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navigation.map((item) => (
                <Magnetic key={item.name} strength={0.2}>
                  <Link
                    href={item.href}
                    className={`px-3 py-2 transition-colors duration-300 font-medium text-sm inline-block ${
                      isActive(item.href) ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </Magnetic>
              ))}
            </div>
            <div className="md:hidden">
              {/* Mobile menu button */}
              <Popover.Button
                className="text-white hover:text-gray-300 focus:outline-none focus:text-white"
                aria-label="toggle menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {open ? null : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </Popover.Button>
            </div>
          </nav>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel
              focus
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
            >
              <div className="rounded-lg shadow-2xl ring-1 ring-white/10 bg-[#1D1D1F] divide-y-2 divide-white/10">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <Image className="h-8 w-auto" src={logo} alt="logo" />
                    </div>
                    <div className="-mr-2">
                      <PopoverButton className="bg-[#1D1D1F] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </PopoverButton>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-white/5 transition-colors duration-200"
                        >
                          <span className="ml-3 text-base font-medium text-white/80 hover:text-white">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default Header;
