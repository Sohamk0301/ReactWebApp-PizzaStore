import React, { createContext, useReducer,useContext } from 'react';


const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
    switch(action.type){
        case
"ADD":return [...state,{id:action.id, name:action,price:action.price,qty:action.qty,size:action.size,img:action.img}] 
default:
    console.elog(" error")  }

}
export const CartProvider=({Children})=>{

    const[state,dispatch]=useReducer(reducer,[])
    return(
        
        <CartDispatchContext.Provider value={dispatch} >
        <CartStateContext.Provider value={state} >
        {Children}
        </CartStateContext.Provider>
        </CartDispatchContext.Provider>

    )
}
export const useCart=()=>useContext(CartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);