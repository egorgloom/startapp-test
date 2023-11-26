import { FC } from 'react';
import { useGetProductsQuery } from '../../Api/apiSlice';
import { IProducts } from './../../interfaces/interfaces';
import ProductItem from './ProductItem';



const Products: FC = () => {

    const {data} = useGetProductsQuery([])
    
  return (
    <div>
        {data ? data.map((elem: IProducts) => <ProductItem elem={elem} key={elem.id}/>) : <div>no result</div>}
    </div>
  );
};

export default Products;