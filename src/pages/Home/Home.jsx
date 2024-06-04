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
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="60px" viewBox="0 -960 960 960" width="60px" fill="#808080">
                <path d="m136-146-94-94q-9-9-8.5-21t8.5-22q82-96 197-146.5T480-480q126 0 241 50.5T918-283q8 10 8.5 22t-8.5 21l-94 94q-8 8-23 9t-24-6l-114-85q-6-4.5-9-10.5t-3-13.5v-139q-42-16-85.5-22.5T480-420q-42 0-85.5 6.5T309-391v139q0 7.5-3 13.5t-9 10.5l-114.19 85.28q-11.81 8.72-24.5 7.8-12.68-.93-22.31-11.08Zm108-224q-38 19-73 45.5T104-268l57 59 83-61v-100Zm467-4v98l87 66 58-58q-32-33-68.5-58.5T711-374Zm-467 4Zm467-4ZM450-692v-188h60v188h-60Zm260 112-43-44 133-131 39 44-129 131Zm-456 0L120-711l43-44 130 131-39 44Z"/>
                <path d=""></path>
                <path d=""></path>
                <path d=""></path>
                <path d=""></path>
            </svg> */}
        </>
    )
}