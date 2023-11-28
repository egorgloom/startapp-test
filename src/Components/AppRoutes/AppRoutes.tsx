import { FC } from 'react';

import { Route, Routes } from 'react-router-dom';

import CartPage from '../Pages/CartPage';
import Home from '../Pages/Home';
import ProductItemPage from '../Pages/ProductItemPage';

const AppRoutes: FC = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='cart' element={<CartPage />} />
                <Route path='products/:id' element={<ProductItemPage/>} />
            </Routes>
        </>
    );
};

export default AppRoutes;