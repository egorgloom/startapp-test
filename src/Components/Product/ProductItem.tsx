import { FC } from 'react';
import { IProducts } from '../../interfaces/interfaces';

interface IProductItem {
    elem: IProducts

}

const ProductItem: FC<IProductItem> = ({elem}) => {
  return (
    <div>
         <div>{elem.id}{elem.title}{elem.price}</div>
         <img src={elem.image} alt="" />
    </div>
  );
};

export default ProductItem;
