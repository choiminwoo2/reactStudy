import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    items : [],
    totalAmount: 0,

}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD_CART_ITEM'){
        const updateItems = state.items.concat(action.item);
        const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items : updateItems,
            totalAmount : updateTotalAmount
        }
    }else if(action.type === 'REMOVE_CART_ITEM'){

    }
    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispathCartAction] =useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item =>{
        dispathCartAction({
            type : 'ADD_CART_ITEM',
            item : item
        })
    };

    const removeItemFromCartHandler = id =>{
        dispathCartAction({
            type: 'REMOVE_CART_ITEM',
            id : id
        })
    };
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;