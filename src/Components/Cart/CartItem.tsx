import { FC } from 'react';

import { RiDeleteBin5Line } from "react-icons/ri";
import { useActions } from '../../hooks/useActions';

import { IProduct } from '../../interfaces/interfaces';

import cl from './CartItem.module.scss'

interface CartItem {
    elem: IProduct

}

const CartItem: FC<CartItem> = ({ elem }) => {

    const { removeToCart } = useActions()
    return (
        <div className={cl.cartItem}>
            
            <img src={elem.image} alt="product" />
            <h3>{elem.title}</h3>
            <RiDeleteBin5Line onClick={() => removeToCart({ id: elem.id })} />
        </div>
    );
};

export default CartItem;