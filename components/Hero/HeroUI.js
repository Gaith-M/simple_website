import styles from "./hero.module.css";

const HeroUI = () => {
  return (
    <div>
      <div className={styles.hero__content_container}>
        <h1>New Fall Collection</h1>
        <p>Something About How Amazing This Collection Is</p>
        <button>Check Fall Collection</button>
      </div>
    </div>
  );
};

export default HeroUI;
