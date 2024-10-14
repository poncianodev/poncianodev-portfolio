import { NavBar } from "./components/NavBar/NavBar";
import styles from "./App.module.css";

import "./global.css";

function App() {
  return (
    <>
      <NavBar />

      <main>
        <section id={styles.hero}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperText}>
              <h1>Olá, sou <span>Lucas Ponciano!</span></h1>
              <p>Desenvolvedor Front-end</p>
              <button className={styles.cvBtn}>Baixar CV</button>
            </div>

            <div className={styles.box}></div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
