import Image from "next/image";
import Link from "next/link";
import logo from "../../public/favicon.png";
import styles from "./index.module.scss";

const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>
            <Image src={logo} width="50" height="50" />
            <h1>Picciotto!</h1>
          </a>
        </Link>
      </nav>

      {children}

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default DefaultLayout;
