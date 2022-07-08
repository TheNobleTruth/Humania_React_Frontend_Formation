import navStyle from "../styles/Nav.module.css";
import Link from "next/Link";

const Nav = () => {
  return (
    <nav className={navStyle.nav} >
        <ul>
            <li>
                <Link href="/">Home </Link> 
            </li>
            <li>
                <Link href="/">Services</Link> 
            </li>
            <li>
                <Link href="/"> PortFolio </Link> 
            </li>
            <li>
                <Link href="/"> News </Link> 
            </li>
            <li>
                <Link href="/"> Clients</Link> 
            </li>
            <li>
                <Link href="/quoteform"> Get a quote</Link> 
            </li>
            <li>
                <Link href="/"> Contact</Link> 
            </li>
        </ul>
    </nav> 
  )
}

export default Nav
