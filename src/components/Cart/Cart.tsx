import React from "react";
import { useDispatch } from "react-redux";
import { Products } from "../../data/products";
import { removeProduct } from "../../redux/Cart/cart-slice";
import * as S from "./styles";

interface CartProps {
  showCart: boolean;
  cart: Products[];
}

export const Cart: React.FC<CartProps> = ({ showCart, cart }) => {
  const dispatch = useDispatch();

  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductsItem key={product.id}>
            <strong>{product.title}</strong> - {product.price}
            <button onClick={() => dispatch(removeProduct(product))}>
              Remover
            </button>
          </S.CartProductsItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal data-testid="total">Total: ${total}</S.CartTotal>
    </S.Container>
  );
};
