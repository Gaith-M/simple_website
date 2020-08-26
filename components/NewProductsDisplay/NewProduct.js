import styles from "./displayProducts.module.css";

const NewProduct = ({ img, content, oriantation }) => {
  const oriantation_type =
    oriantation === "horizontal"
      ? styles.new_product_horizontal
      : styles.new_product_vertical;

  const image_order = Math.floor(Math.random() * 10) > 5 ? 1 : 0;
  const content_order = image_order === 0 ? 1 : 0;

  return (
    <div className={oriantation_type}>
      <div
        className={styles.image_panel}
        style={{ backgroundImage: `url(${img})`, order: image_order }}
      />
      <div className={styles.content_panel} style={{ order: content_order }}>
        {content}
      </div>
    </div>
  );
};

export default NewProduct;
