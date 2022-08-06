import Link from 'next/link';
import { headerNavLinks } from '../data/headerNavLinks';
import { ToggleButton } from '../components/ToggleButton';
import { MobileNav } from '../components/MobileNav';
import { motion } from 'framer-motion';

export const NavHeader = () => {
  return (
    <header className="flex items-center justify-between mt-4 px-8">
      <div>
        <Link href="/" aria-label="Vale's Next.js Portfolio">
          <motion.div
            whileHover={{ scale: 1.25, rotate: -15 }}
            className="flex items-center justify-between"
          >
            <h1 className="text-3xl font-roboto">
              <span role="img" aria-label="sparkle-emoji">
                ✨
              </span>
            </h1>
          </motion.div>
        </Link>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block px-8">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.slug}
              className="font-medium text-gray-900 sm:p-4 dark:text-gray-100"
            >
              <span className="px-4 cursor-pointer hover:underline underline-offset-4">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden sm:block">
          <ToggleButton />
        </div>
        <div className="sm:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
