import React, { createContext,useReducer,useContext } from "react";

const CartContext = createContext();
const initialState = { items: [] };

function cartReducer(state,action){
    switch(action.type){
        case 'Add_ITEM':
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                return {
                    ...state,
                    items: state.items.map(item => 
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }

            return {
                ...state,
                items: [...state.items,{...action.payload,quantity: 1 }]
            };
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}

export function CartProvider({ children }){
    const [state,dispatch] = useReducer(cartReducer,initialState);
    return(
        <CartContext.Provider value={{ state,dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}