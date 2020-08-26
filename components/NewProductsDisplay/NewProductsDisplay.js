import styles from "./displayProducts.module.css";
import NewProduct from "./NewProduct";

const products_one = [
  {
    id: 1,
    name: "wool hat",
    description: "Made from 100% cotton and super cute",
    img: "../../wool_hat.jpg",
    oriantation: "vetical",
  },
  {
    id: 2,
    name: "stylish Shoes",
    description: "Sporty and Classical made from high quality leather",
    img: "../../black_chic_shoes.jpg",
    oriantation: "vetical",
  },
  {
    id: 3,
    name: "Trendy Leather Jacket",
    description: "Made from 100% leather",
    img: "../../leather_jacket.jpg",
    oriantation: "horizontal",
  },
];
const products_two = [
  {
    id: 4,
    name: "women jeans",
    description: "tight women jeans",
    img: "../../women_blue_jeans.jpg",
    oriantation: "horizontal",
  },
  {
    id: 5,
    name: "skirt",
    description: "gray skirt",
    img: "../../gray_skirt.jpg",
    oriantation: "vertical",
  },
  {
    id: 6,
    name: "big scarf",
    description: "big scarf",
    img: "../../scarf.jpg",
    oriantation: "vertical",
  },
];

const NewProductsDisplay = () => {
  return (
    <div className={styles.main_display}>
      <div className={styles.products_display}>
        {products_one.map((product) => (
          <NewProduct
            oriantation={product.oriantation}
            content={product.name}
            img={product.img}
            key={product.id}
          />
        ))}
      </div>
      <div className={styles.products_display}>
        {products_two.map((product) => (
          <NewProduct
            oriantation={product.oriantation}
            content={product.name}
            img={product.img}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default NewProductsDisplay;
