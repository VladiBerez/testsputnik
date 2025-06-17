import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";

export type ProductCardProps = {
  title: string;
  origin: string;
  price: number; // в копейках
  currency: "RUB" | "USD" | "EUR";
  imageUrl: string;
};

const formatPrice = (price: number, currency: "RUB" | "USD" | "EUR") => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);
};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={title}
        className={styles.image}
        width={120}
        height={120}
      />
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.origin}>Страна: {origin}</div>
        <div className={styles.price}>{formatPrice(price, currency)}</div>
      </div>
    </div>
  );
};
