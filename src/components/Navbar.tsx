"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
    const pathname = usePathname().split("/")[1];;
    console.log(pathname);
  return (
    <>
    <nav className='flex justify-center items-center gap-4 px-10'>
          <div className=''><NavItem curPath={pathname} to='/'>Home</NavItem></div>
          <NavItem curPath={pathname} to='/todayDeals'>Today's Deals</NavItem>
          <NavItem curPath={pathname} to='/giftCards'>Gift Cards</NavItem>
          <NavItem curPath={pathname} to='/sell'>Sell</NavItem>
          <NavItem curPath={pathname} to='/customerService'>Customer service</NavItem>
    </nav>
    
    </>
  )
}
interface NavItemProps {
    to: string;
    curPath: string;
    children: React.ReactNode;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ to, curPath, children }) => {
    const isActive = curPath === to.slice(1); // Checking if the current path matches the link
    const activeClass = isActive
      ? "text-black font-medium"
      : "text-[#8b8b8b]";
  
    return (
     
        <Link
          href={to}
          className={`hover:bg-gray-200 rounded-3xl h-10 p-4 flex items-center justify-center ${activeClass}`}
        >
          {children}
        </Link>
      
    );
  };
