import styles from "./Navbar.module.css"
import {Link, useNavigate} from "react-router-dom";
import icono from "../../assets/Icono.svg"


export default function Navbar () {
    const navigate = useNavigate();



    return (
        <nav className={styles.contentNav}>
            <ul>
                    <Link className={styles.nav_links}  to="/street">
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                        <span className={styles.span3}></span>
                        <span className={styles.span4}></span>
                <li>
                         Street
                </li>
                    </Link>
                    <Link className={styles.nav_links} to="/racing">
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                        <span className={styles.span3}></span>
                        <span className={styles.span4}></span>
                <li>
                        Racing
                </li>
                    </Link>    
                    <Link className={styles.nav_links} to="sport">
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                        <span className={styles.span3}></span>
                        <span className={styles.span4}></span>
                <li>
                        Sport
                </li>
                    </Link>
                    <Link className={styles.nav_links} to="contact">
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                        <span className={styles.span3}></span>
                        <span className={styles.span4}></span>
                <li>
                        Contact
                </li>
                    </Link>
            </ul>
            <span className={styles.lineal_animation}></span>
        </nav>
    )
}