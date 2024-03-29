import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PriceProduct from '../../../UI/priceProduct';

import { dataFetch } from '../../../utilities/auxFunc';
import { removeProductBasket, addFavorite, minusCounter, plusCounter } from '../../../global/redux';

import { FC } from 'react';
import { IPropsBasketCard, TLocalStorage } from '../../../types/types';

import BasketCounterMinus from '../../../svg/basketCounterMinus';
import BasketCounterPlus from '../../../svg/basketCounter';
import BtnClose from '../../../svg/btnClose';
import BtnLike from '../../../svg/btnLike';

import styles from '../../../less/basket/basket.module.less'

const BasketCard: FC<IPropsBasketCard> = React.memo(({product, counter, checkBtnLike}): JSX.Element => {
    const navig = useNavigate();

    const dispatch = useDispatch();

    const deleteProduct = React.useCallback((id: number) => {
        dispatch(removeProductBasket(id))
    }, []);

    const addFavor = React.useCallback((id: number) => {
        const dataBase = async() => {
            const data = await dataFetch('certain', id) as TLocalStorage;

            dispatch(addFavorite(data));
        };

        dataBase();
    }, []);

    const switchCounter = (method: string) => {
        if (method === 'minus') {
            dispatch(minusCounter(product.id));
        } else if (method === 'plus') {
            dispatch(plusCounter(product.id))
        };
    };

    return (
        <>
            <div className={styles.containerBasket} onClick={() => navig(`/product/${product.id}`)}>
                <div className={styles.containerBasketImg}>
                    <img className={styles.containerBasketImgPicture} src={product.img} alt="" />
                </div>

                <div className={styles.contantBasketAboutProduct}>
                    <span className={styles.contantBasketAboutProductName}>{product.name}</span>

                    <div className={styles.contantBasketAboutProductPrice}>
                        <div className={styles.priceInfo}>
                            <PriceProduct product={product}/>
                        </div>

                        <div className={styles.contantBasketAboutProductPriceCounter}>
                            <button className={styles.contantBasketAboutProductPriceCounterBtn} onClick={e => {e.stopPropagation(); switchCounter('minus')}}><BasketCounterMinus/></button>
                            <span className={styles.contantBasketAboutProductPriceCounterNum}>{counter}</span>
                            <button className={styles.contantBasketAboutProductPriceCounterBtn} onClick={e => {e.stopPropagation(); switchCounter('plus')}}><BasketCounterPlus/></button>
                        </div>
                    </div>

                    <div className={styles.contantBasketAboutProductInfo}>
                        <p className={styles.contantBasketAboutProductInfoRegion}>Регион активации<b> Россия и страны СНГ</b></p>
                        <p className={styles.contantBasketAboutProductInfoService}>Сервис активации<b> {product.tags}</b></p>
                    </div>
                </div>
                
                <button className={styles.btnCLose} onClick={e => {e.stopPropagation(); deleteProduct(product.id)}}><BtnClose/></button>
                <button className={styles.btnLike} onClick={e => {e.stopPropagation(); checkBtnLike 
                ? navig('/favority')
                : addFavor(product.id)
                }}><BtnLike checkBtnLike={checkBtnLike}/></button>
            </div>

            <hr className={styles.hr} />
        </>
    );
})
 
export default BasketCard;