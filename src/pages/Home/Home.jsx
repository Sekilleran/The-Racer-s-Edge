import styles from './Home.module.css';
import {Link, useNavigate} from "react-router-dom";


export default function Home () {
    return (
        <>
            <div className={styles.content_text_landing_1}>
                <h4>
                ¡Bienvenido a The Racer's Edge!
                </h4>
                <p>
                ¿Eres un apasionado de la velocidad y la adrenalina? 
                ¿Buscas los mejores repuestos para tu máquina de velocidad? 
                ¡Has llegado al lugar indicado! En The Racer's Edge, 
                nos dedicamos a proporcionarte los repuestos de la más alta calidad
                para que tu vehículo corra como nunca antes.
                </p>
            </div>
            <div className={styles.content_text_landing_2}>
                <p>
                Inspira tu pasión por la velocidad con nuestra amplia selección de repuestos,
                que incluyen desde motores de alto rendimiento hasta sistemas de
                suspensión de última generación. Ya sea que seas un conductor profesional
                o simplemente un entusiasta del automovilismo, tenemos todo lo que necesitas
                para potenciar tu experiencia en la carretera.
                </p>
            </div>
            <div className={styles.content_text_landing_3}>
                <p>
                Nuestro compromiso con la calidad y la autenticidad
                nos convierte en tu destino confiable para todos tus repuestos de automóviles.
                Con años de experiencia en la industria y un equipo apasionado,
                estamos aquí para ayudarte a alcanzar tus metas de velocidad y rendimiento.
                </p>
            </div>
            <div className={styles.content_text_landing_4}>
                <p>
                Explora nuestra tienda en línea hoy mismo y lleva tu conducción al siguiente nivel
                con The Racer's Edge. ¡Prepárate para dejar a todos atrás en la pista!
                </p>
                <div className={styles.content_buttons}>
                    <Link className={styles.nav_links}  to="/street">
                            <span className={styles.span1}></span>
                            <span className={styles.span2}></span>
                            <span className={styles.span3}></span>
                            <span className={styles.span4}></span>
                            Street
                    </Link>
                    <Link className={styles.nav_links}  to="/street">
                            <span className={styles.span1}></span>
                            <span className={styles.span2}></span>
                            <span className={styles.span3}></span>
                            <span className={styles.span4}></span>
                            Racing
                    </Link>
                    <Link className={styles.nav_links}  to="/street">
                        <span className={styles.span1}></span>
                        <span className={styles.span2}></span>
                        <span className={styles.span3}></span>
                        <span className={styles.span4}></span>
                        Sport
                    </Link>
                </div>
            </div>
        </>
    )
}