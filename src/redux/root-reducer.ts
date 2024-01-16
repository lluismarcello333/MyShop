import { combineReducers } from "redux";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";


export const rootReducer = combineReducers({
    userReducer: userSlice.reducer,           // Utilizando a Biblioteca Redux, devemos colocar o reducer criado, dentro do rootReducer utilizando "userReducer" e "cartReducer" 
    cartReducer: cartSlice.reducer,           // que foram criados nessas importações import { userReducer } from "./User/reducer";
});                                           //                                      import { cartReducer } from './Cart/cart-reducer';


export type RootReducer = ReturnType<typeof rootReducer>;