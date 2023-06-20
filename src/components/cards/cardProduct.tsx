import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { FC } from 'react';
import { IStateStore, IpropsCard } from '../../types/types';
import CardBtnActive from './cardBtnActive';

const CardProduct: FC<IpropsCard> = React.memo(({dataB, index, spanText}) => {
    const navig = useNavigate();
    const pathLink = useResolvedPath(location.pathname);

    const dispatch = useDispatch(); 
    const stateValue = useSelector((state: IStateStore) => state);

    const data = dataB[index];

    let basket = stateValue.basket.find(item => item.id === index);
    let favority = stateValue.favority.includes(index);

    const addFavorProduct = React.useCallback((idProduct: number, target: HTMLElement) => {
        if (target.closest('.add') || target.classList.contains('add')) {
            pathLink.pathname === '/' ? navig('/favority') : navig(pathLink.pathname + '/favority');
        } else {
            dispatch(addFavorite(idProduct));
        };
    }, []);

    const addBusketProduct = React.useCallback((idProduct: number, target: HTMLElement) => {
        if (target.classList.contains('add')) {
            pathLink.pathname === '/' ? navig('/basket') : navig(pathLink.pathname + '/basket');
        } else {
            dispatch(addBusket(idProduct));
        };
    }, []);

    return (
        <article className='block_card'>
            <CardBtnActive 
            addBusketProduct={addBusketProduct} 
            addFavorProduct={addFavorProduct} 
            data={data} 
            aboutBasket={basket} 
            aboutFavority={favority} 
            index={index} 
            spanText={spanText}/>
        </article>
    );
});
 
export default CardProduct;