import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';
import { useNavigate } from 'react-router-dom';
import { dataFetch } from '../../utilities/auxFunc';
import { FC } from 'react';
import { IStateStore, IpropsCard, TLocalStorage } from '../../types/types';
import CardBtnActive from './cardBtnActive';

const CardProduct: FC<IpropsCard> = React.memo(({dataB, index, spanText}) => {
    const navig = useNavigate();

    const dispatch = useDispatch(); 
    const stateValue = useSelector((state: IStateStore) => state);

    let basket = stateValue.basket.find(item => item.id === index);
    let favority = stateValue.favority.find(item => item.id === index);

    const addFavorProduct = React.useCallback((idProduct: number, target: HTMLElement) => {
        if (target.classList.contains('add') || target.closest('.add')) navig('/favority') 
        else {
            const dataBase = async() => {
                const data = await dataFetch('certain', idProduct) as TLocalStorage;

                dispatch(addFavorite(data));
            };

            dataBase();
        };
    }, []);

    const addBusketProduct = React.useCallback((idProduct: number, target: HTMLElement) => {
        if (target.classList.contains('add')) navig('/basket')
        else {
            const dataBase = async() => {
                const data = await dataFetch('certain', idProduct) as TLocalStorage;

                dispatch(addBusket(data));
            };

            dataBase();
        };
    }, []);

    return (
        <article className='block_card'>
            <CardBtnActive 
            addBusketProduct={addBusketProduct} 
            addFavorProduct={addFavorProduct} 
            data={dataB} 
            aboutBasket={basket} 
            aboutFavority={favority} 
            index={index} 
            spanText={spanText}/>
        </article>
    );
});
 
export default CardProduct;