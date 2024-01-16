import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import { Products } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { cartReducer } from "../../redux/Cart/cart-reducer";
import { addProduct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Products;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  // Variável booleana para informar se o produto está no carrinho
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    //Despachar a Action de adicionar o produto no carrinho
    dispatch(addProduct(product));
  }

  /*     
    Utilizando Redux

    function handleAddProductToCart() {
    //Despachar a Action de adicionar o produto no carrinho
    dispatch({
      type: "cart/add-product",
      payload: product,
    });
  } */
  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  /*   
    Utilizando Redux

  function handleRemoveProductFromCart() {
    dispatch({
      type: "cart/remove-product",
      payload: product,
    });
  } */
  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />

      <S.ProductTitle>{product.title}</S.ProductTitle>

      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({` ${product.rating.rate}`})
        </S.Review>

        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do carrinho
            <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCardButton onClick={handleAddProductToCart}>
            Adicionar ao carrinho
            <FiShoppingCart />
          </S.AddToCardButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
