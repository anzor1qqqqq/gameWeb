import React, { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { IntlNum } from '../../class/intlNum';
import CardBtnActive from './cardBtnActive';
import '../../style/cardTopFour.css'

const CardProduct = memo(({dataB, index, spanText}) => {
    const navig = useNavigate();
    const pathLink = useResolvedPath();

    const dispatch = useDispatch(); 
    const stateValue = useSelector(state => state);

    const data = dataB[index];
    const intl = new IntlNum(data.price, data.sale);

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
        <div className='block_card'>
            <CardBtnActive addBusketProduct={addBusketProduct} addFavorProduct={addFavorProduct} data={data} aboutBasket={basket} aboutFavority={favority} index={index} spanText={spanText}/>
            
            <div className='block_info'>
                <div className='block_info_value'>
                    <span className='block_info_value_product'>{data.sale ? intl.getPriceSale() : intl.getPrice()}</span>
                    {data.sale 
                    ? <> <span className='block_info_value_procent_sale'>{intl.getProcent()}</span> <span className='block_info_value_for_sale'>{intl.getPrice()}</span> </>
                    : ''}
                </div>

                <div className='block_info_title'>
                <p className='block_info_title_name'>{data.name}</p>
                </div>

                <div className='block_info_tags'>
                    {data.tags.map((item, i) => 
                    <span className='block_info_tags_name' key={i}>{item}</span>
                    )}
                </div>
            </div>
        </div>
    );
});
 
export default CardProduct;