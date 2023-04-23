import styles from "../styles/AboutUs.module.scss";
import valentinaurzi from "../assets/valentinaurzi.png";
import ericandido from "../assets/ericandido.jpeg";
import mattianini from "../assets/mattianini.jpeg";
import chiaranicoletti from "../assets/chiaranicoletti.jpeg";
import valeriolavenuta from "../assets/valeriolavenuta.jpeg";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";

const developer = [
  { name: "Valentina Urzì", image: valentinaurzi, role: "Front-End Developer", linkedin: "Valentina Urzì", github: "ValentinaUrzì" },
  { name: "Erica Candido", image: ericandido, role: "Front-End Developer", linkedin: "Erica Candido", github: "EricaCandido" },
  { name: "Mattia Nini", image: mattianini, role: "Front-End Developer", linkedin: "Mattia Nini", github: "MattiaNini" },
  { name: "Chiara Nicoletti", image: chiaranicoletti, role: "Front-End Developer", linkedin: "Chiara Nicoletti", github: "Kala Patel" },
  { name: "Valerio La Venuta", image: valeriolavenuta, role: "Front-End Developer", linkedin: "Valerio La Venuta", github: "ValerioLV" }
]

export default function AboutUs() {
  return (
    <div className={styles.AboutUs}>
      <h1>About Us</h1>
      <div className={styles.cardwrapper}>
        {developer.map((r, i) =>
          <div className={styles.card} key={i}>
            <div className={styles.cardname}>
              <img src={r.image} className={styles.image}></img>
              <h3>{r.name}</h3>
              <h4>{r.role}</h4>
            </div>
            <div className={styles.social}>
              <div>
                <img src={linkedin} alt="linkedin"></img>
                <p>{r.linkedin}</p>
              </div>
              <div>
                <img src={github} alt="github"></img>
                <p>{r.github}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
