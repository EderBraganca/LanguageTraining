import './Menu.css';
import { FaHome } from "react-icons/fa";

export const Menu = () => {
    return (
        <nav className="menu">
            <section className="menuSection">
                <a href="/"> 
                    <FaHome/>
                    Home
                </a>
            </section>
        </nav>
    )
}