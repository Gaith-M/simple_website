import styles from "./footer.module.css";

const FooterUI = () => (
  <footer className={styles.footer}>
    <div className={styles.footer_tab}>
      <p>Collection</p>
      <ul>
        <li>Women: 1721</li>
        <li>Men: 1263</li>
        <li>Kids: 816</li>
        <li>Coming Soon: 71</li>
      </ul>
    </div>

    <div className={styles.footer_tab}>
      <p>Site</p>
      <ul>
        <li>Terms Of Service</li>
        <li>Privacy Policy</li>
        <li>Copy Right Policy</li>
        <li>Press kit</li>
        <li>Support</li>
      </ul>
    </div>

    <div className={styles.footer_tab}>
      <p>Shop</p>
      <ul>
        <li>About Us</li>
        <li>Shipping Methods</li>
        <li>Jobs</li>
        <li>Contact</li>
      </ul>
    </div>
  </footer>
);

export default FooterUI;
