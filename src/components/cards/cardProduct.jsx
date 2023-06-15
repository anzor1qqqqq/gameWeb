import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import CardBtnActive from './cardBtnActive';

const CardProduct = memo(({dataB, index, spanText}) => {
    const navig = useNavigate();
    const pathLink = useResolvedPath();

    const dispatch = useDispatch(); 
    const stateValue = useSelector(state => state);

    const data = dataB[index];

    let basket = stateValue.basket.find(item => item.id === index);
    let favority = stateValue.favority.includes(index);

    const addFavorProduct = useCallback((idProduct, target) => {
        if (target.closest('.add') || target.classList.contains('add')) {
            pathLink.pathname === '/' ? navig('/favority') : navig(pathLink.pathname + '/favority');
        } else {
            dispatch(addFavorite(idProduct));
        };
    }, []);

    const addBusketProduct = useCallback((idProduct, target) => {
        if (target.classList.contains('add')) {
            pathLink.pathname === '/' ? navig('/basket') : navig(pathLink.pathname + '/basket');
        } else {
            dispatch(addBusket(idProduct));
        };
    }, []);

    return (
        <article className='block_card'>
            <CardBtnActive addBusketProduct={addBusketProduct} addFavorProduct={addFavorProduct} data={data} aboutBasket={basket} aboutFavority={favority} index={index} spanText={spanText}/>
        </article>
    );
});
 
export default CardProduct;