import styles from "./newsletter.module.css";

const NewsletterUI = () => (
  <div className={styles.newsletter_container}>
    <p className={styles.heading_paragraph}>
      Sign up to recieve our newsletter
    </p>
    <p className={styles.sub_paragraph}>
      Some paragraph that says how amazing the newsletter is, and why you should
      sign up
    </p>

    <form>
      <input
        className={styles.newsletter_input}
        name="email"
        type="email"
        placeholder="Your Email"
      />
      <button type="submit" className={styles.newsletter_button}>
        Sign up
      </button>
    </form>
  </div>
);

export default NewsletterUI;
