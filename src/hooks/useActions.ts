import { bindActionCreators } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { cartActions } from '../Slices/cartSlice';


const allActions = {
    ...cartActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}