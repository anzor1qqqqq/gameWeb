import * as React from 'react';
import { IntlNum } from '../../../utilities/Intl';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeProductBasket, addFavorite, minusCounter, plusCounter } from '../../../global/redux';
import { FC } from 'react';
import { IPropsBasketCard } from '../../../types/types';
import BasketCounterMinus from '../../../svg/basketCounterMinus';
import BasketCounterPlus from '../../../svg/basketCounter';
import BtnClose from '../../../svg/btnClose';
import BtnLike from '../../../svg/btnLike';
import styles from '../../../less/basket/basket.module.less'

const BasketCard: FC<IPropsBasketCard> = React.memo(({nameProduct, id, price, sale, img, tags, counter, checkBtnLike}): JSX.Element => {
    const intl = new IntlNum(price, sale);
    const navig = useNavigate();

    const dispatch = useDispatch();

    const deleteProduct = React.useCallback((id: number) => {
        dispatch(removeProductBasket(id))
    }, []);

    const addFavor = React.useCallback((id: number) => {
        dispatch(addFavorite(id))
    }, []);

    const switchCounter = (method: string) => {
        if (method === 'minus') {
            dispatch(minusCounter(id));
        } else if (method === 'plus') {
            dispatch(plusCounter(id))
        };
    };

    return (
        <>
            <div className={styles.containerBasket}>
                <div className={styles.containerBasketImg}>
                    <img className={styles.containerBasketImgPicture} src={img} alt="" />
                </div>

                <div className={styles.contantBasketAboutProduct}>
                    <span className={styles.contantBasketAboutProductName}>{nameProduct}</span>

                    <div className={styles.contantBasketAboutProductPrice}>
                        <div>
                            <span className={styles.contantBasketAboutProductPriceSale}>{intl.getPriceSale()}</span>
                            <span className={styles.contantBasketAboutProductPriceProcent}>{sale ? intl.getProcent() : ''}</span>
                            <span className={styles.contantBasketAboutProductPriceOld}><s>{sale ? intl.getPrice() : ''}</s></span>
                        </div>

                        <div className={styles.contantBasketAboutProductPriceCounter}>
                            <button className={styles.contantBasketAboutProductPriceCounterBtn} onClick={() => switchCounter('minus')}><BasketCounterMinus/></button>
                            <span className={styles.contantBasketAboutProductPriceCounterNum}>{counter}</span>
                            <button className={styles.contantBasketAboutProductPriceCounterBtn} onClick={() => switchCounter('plus')}><BasketCounterPlus/></button>
                        </div>
                    </div>

                    <div className={styles.contantBasketAboutProductInfo}>
                        <p className={styles.contantBasketAboutProductInfoRegion}>Регион активации<b> Россия и страны СНГ</b></p>
                        <p className={styles.contantBasketAboutProductInfoService}>Сервис активации<b> {tags}</b></p>
                    </div>
                </div>
                
                <button className={styles.btnCLose} onClick={() => deleteProduct(id)}><BtnClose/></button>
                <button className={styles.btnLike} onClick={() => checkBtnLike 
                ? navig('/favority')
                : addFavor(id)
                }><BtnLike checkBtnLike={checkBtnLike}/></button>
            </div>

            <hr className={styles.hr} />
        </>
    );
})
 
export default BasketCard;