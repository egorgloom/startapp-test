import { FC } from 'react';

import { useTypedSelector } from './../../hooks/useTypedSelector';

import CartItem from './CartItem';


const Cart: FC = () => {

  const { cart } = useTypedSelector(state => state)

  return (
    <>
        {cart.length ? cart.map((elem) => 
        <CartItem elem={elem} key={elem.id}/>
          ) : <div className='cartEmpty'>cart is empty</div>}
    </>
  );
};

export default Cart;