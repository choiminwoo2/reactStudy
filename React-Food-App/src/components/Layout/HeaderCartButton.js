import { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton= props => {
   const cartCtx = useContext(CartContext);

   const [btnIsHigtlighted,setBtnIsHigtlighted] =useState(false)

   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
       return curNumber + item.amount;
   }, 0);

   const {items} = cartCtx;

   const btnClasses = `${styles.button} ${btnIsHigtlighted ? styles.bump : ''}`;

   useEffect(()=>{
    if(items.length === 0){
        return;
    }
    setBtnIsHigtlighted(true);

    setTimeout(()=>{
        setBtnIsHigtlighted(false)
    },300)
   },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
        {props.children}
    </button>
}

export default HeaderCartButton;