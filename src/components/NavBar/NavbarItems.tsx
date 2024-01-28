import Link from "next/link";
import { usePathname } from "next/navigation";

interface NaveBarProps{
    classNav: string;
    type: string;
}
export default function NaveBarItems(props: NaveBarProps){
    const pathname = usePathname().split("/")[1];
    return(
        <nav className={props.classNav}>
        <NavItem type={props.type} curPath={pathname} to='/'>Home</NavItem>
        <NavItem type={props.type} curPath={pathname} to='/todayDeals'>Super Deals</NavItem>
        <NavItem type={props.type} curPath={pathname} to='/giftCards'>Gift Cards</NavItem>
        <NavItem type={props.type} curPath={pathname} to='/sell'>Sell</NavItem>
        <NavItem type={props.type} curPath={pathname} to='/customerService'>Customer service</NavItem>
      </nav>
    )
}


interface NavItemProps {
    to: string;
    curPath: string;
    children: React.ReactNode;
    type: string;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ to, curPath, children,type }) => {
    const isActive = curPath === to.slice(1); // Checking if the current path matches the link
    const activeClass = isActive
      ? "text-[#B0926A] font-medium"
      : "text-[#0e0e0e]";
  
    return (
     
        <Link
          href={to}
          className={`${type ==="0" ?"hover:bg-gray-100 rounded-3xl h-10 p-4 flex items-center justify-center":"hover:bg-gray-100 flex items-center w-full text-sm p-[0.60rem] pl-4 cursor-pointer"} ${activeClass}`}
        >
          {children}
        </Link>
      
    );
  };
