'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const Header = () => {
  const pathName = usePathname();
  
  if(!pathName.includes('dashboard')) {
    return (
      <header>
        <nav className="flex justify-center py-4">
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;