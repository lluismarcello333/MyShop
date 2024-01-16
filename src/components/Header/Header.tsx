import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";

import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import * as S from "./styles";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const dispatch = useDispatch();

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth() {
    // Usuário não está logado
    if (user === null) {
      // Despachar a action de login
      dispatch(
        login({
          name: "Luiz Marcelo",
          email: "luizmarcelo@gmail.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  /*  
  Utilizando Redux

  function handleUserAuth() {
    // Usuário não está logado
    if (user === null) {
      // Despachar a action de login
      dispatch({
        type: "user/login",
        payload: {
          name: "Luiz Marcelo",
          email: "luizmarcelo@gmail.com",
        },
      });
    } else {
      dispatch({
        type: "user/logout",
      });
    }
  } */

  return (
    <S.StyledHeader>
      <S.Wraper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wraper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
