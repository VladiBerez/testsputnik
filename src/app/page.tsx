import { ProductCard } from "@/entities/product";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Тестовые карточки товаров</h1>
      <div className={styles.cardsGrid}>
        <ProductCard
          title="Смартфон Sputnik X"
          origin="Россия"
          price={34900}
          currency="RUB"
          imageUrl="/next.svg"
        />
        <ProductCard
          title="Headphones Pro"
          origin="Германия"
          price={129900}
          currency="EUR"
          imageUrl="/vercel.svg"
        />
        <ProductCard
          title="Smart Watch USA"
          origin="США"
          price={9900}
          currency="USD"
          imageUrl="/globe.svg"
        />
      </div>
    </div>
  );
}
