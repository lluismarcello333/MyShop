import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: rootReducer,
});

/*  
Caso seja necessário utilizar o createStore, seguir a doc "https://redux.js.org/introduction/getting-started" para realizar a instalação.

O código adptado para essa Biblioteca ficaria dessa forma:

import { createStore } from 'redux';
import { rootReducer } from "./root-reducer";


export const store = createStore(rootReducer);


Optar pela biblioteca @reduxjs/toolkit em vez do Redux puro é uma escolha relevante, 
pois a última está se tornando obsoleta. No entanto, é importante observar que ainda 
existem muitas soluções que continuam utilizando a versão tradicional do Redux. 
Neste projeto, utilizarei a biblioteca @reduxjs/toolkit, mas também deixarei comentários 
indicando como seria implementado usando Redux.

*/
