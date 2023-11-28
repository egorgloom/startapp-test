import { FC } from 'react';

import { IProduct } from '../../interfaces/interfaces';

import cl from "./ProductItem.module.scss"

import Button from './../../UI/Button/Button';

import { Link } from 'react-router-dom';

import { useActions } from './../../hooks/useActions';



interface IProductItem {
  elem: IProduct
}

const ProductItem: FC<IProductItem> = ({ elem }) => {

  const {addToCart} = useActions()

  return (

    <div className={cl.product}>
      <Link to={`products/${elem.id}`} >
        <h3>{elem.title}</h3>
        <img src={elem.image} alt="product" />
        <p>Price: {elem.price}$</p>
      </Link>
      <Button title="Add to cart" onClick={() => addToCart(elem)} />
    </div>



  );
};

export default ProductItem;
