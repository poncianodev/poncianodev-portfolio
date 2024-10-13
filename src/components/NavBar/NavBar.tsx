import styles from "./NavBar.module.css";
import navLogo from "../../assets/logo-poncianodev-preto.png";

export function NavBar() {
  return (
    <header>
      <nav className={styles["header-nav"]}>
        <img
          src={navLogo}
          className={styles["nav-image"]}
          alt="Logo Poncianodev"
        />

        <ul className={styles["nav-list"]}>
          <li>
            <a href="/">Início</a>
          </li>
          <li>
            <a href="/">Sobre</a>
          </li>
          <li>
            <a href="/">Projetos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
