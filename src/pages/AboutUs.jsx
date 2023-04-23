import styles from "../styles/AboutUs.module.scss";
import valentinaurzi from "../assets/valentinaurzi.png";
import ericandido from "../assets/ericandido.jpeg";
import mattianini from "../assets/mattianini.jpeg";
import chiaranicoletti from "../assets/chiaranicoletti.jpeg";
import valeriolavenuta from "../assets/valeriolavenuta.jpeg";
import linkedin from "..//assets/linkedin.png";
import github from "../assets/github.png";

const developer = [
  { name: "Valentina Urzì", image: valentinaurzi, role: "Front-End Developer", linkedin: "valentina-urzì-0a3a86183", github: "ValentinaUrzi" },
  { name: "Erica Candido", image: ericandido, role: "Front-End Developer", linkedin: "erica-candido-8085a4259", github: "EricaCandido" },
  { name: "Mattia Nini", image: mattianini, role: "Front-End Developer", linkedin: "mattia-nini-64235223b", github: "MattiaNini" },
  { name: "Chiara Nicoletti", image: chiaranicoletti, role: "Front-End Developer", linkedin: "chiara-nicoletti", github: "KalaPatel" },
  { name: "Valerio La Venuta", image: valeriolavenuta, role: "Front-End Developer", linkedin: "valerio-la-venuta-103621258", github: "ValerioLV" }
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
              <a href={`https://www.linkedin.com/in/${r.linkedin}`}>
                <img src={linkedin} alt="linkedin"></img>
                <p>{r.name}</p>
              </a>
              <a href={`https://github.com/${r.github}`}>
                <img src={github} alt="github"></img>
                <p>{r.github}</p>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
