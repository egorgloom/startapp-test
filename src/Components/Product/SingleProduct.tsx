import { FC } from 'react';

import { useParams } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';

import { useGetProductQuery } from '../../Slices/apiSlice';

import Button from '../../UI/Button/Button';
import Loading from '../../UI/Loading/Loading';

import cl from "./SingleProduct.module.scss"



const SingleProduct: FC = () => {

  const { id } = useParams()

  const { data } = useGetProductQuery({ id })

  const { addToCart } = useActions()

  return (
    <>
      {data ?
        <div className={cl.product}>
          <img src={data.image} alt="product" />
          <div className={cl.info}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p>Price: {data.price}$</p>
            <Button title="Add to cart" onClick={() => addToCart(data)} />
          </div>
        </div> : <Loading title='Loading...' />}
    </>
  );
};

export default SingleProduct;