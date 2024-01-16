import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { products } from "../../data/products";

import * as S from "./styles";

export const ProductsList: React.FC = () => {
  return (
    <S.container>
        {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
        ))}
    </S.container>
  );
};
