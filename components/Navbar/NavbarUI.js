import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => (
  <div>
    <nav className={styles.navbar}>
      <div className={styles.logo_and_main_links}>
        <div className={styles.logo}>
          <span>GM</span>
        </div>

        <div className={styles.main_links}>
          <Link href="/men">
            <a>Women</a>
          </Link>
          <Link href="/women">
            <a>Men</a>
          </Link>
          <Link href="/kids">
            <a>Kids</a>
          </Link>
          <Link href="/coming_soon">
            <a>Coming Soon</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </div>

      <div className={styles.search_box_and_user_links}>
        <div className="user_links">
          <Link href="/login">
            <a>
              <i className="fas fa-user"></i>
            </a>
          </Link>
          <Link href="/cart">
            <a className={styles.cart}>
              <i className="fas fa-shopping-bag"></i>
            </a>
          </Link>
        </div>

        <div className={styles.search_box}>
          <span>
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
