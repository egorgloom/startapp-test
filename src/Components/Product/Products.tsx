import { FC } from 'react';

import { useGetProductsQuery } from '../../Slices/apiSlice';

import ProductItem from './ProductItem';

import Loading from './../../UI/Loading/Loading';



const Products: FC = () => {

    const {data} = useGetProductsQuery('')
    
  return (
    <div className='products'>
        {data ? data.map((elem) => <ProductItem elem={elem} key={elem.id}/>) : <Loading title='Loading...'/>}
    </div>
  );
};

export default Products;