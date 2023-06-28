import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { IntlNum } from "../../../utilities/Intl";
import { removeProductFavority } from '../../../global/redux';

import { FC } from "react";
import { IPropsFavorityCard } from "../../../types/types";

import BtnClose from '../../../svg/btnClose';

import styles from '../../../less/basket/basket.module.less'

const FavorityCard: FC<IPropsFavorityCard> = React.memo(({id, nameProduct, price, sale, img, tags}) => {
    const dispatch = useDispatch();
    const navig = useNavigate();

    const intl = new IntlNum(price, sale);

    const deleteProduct = React.useCallback((index: number) => {
        dispatch(removeProductFavority(index));
    }, []);

    return (
        <>
            <div className={styles.containerBasket + ' ' + styles.containerFavority} onClick={() => navig(`/product/${id}`)}>
                <div className={styles.containerBasketImg + ' ' + styles.containerFavorityImg}>
                    <img className={styles.containerBasketImgPicture} src={img} alt="" />
                </div>

                <div className={styles.contantBasketAboutProduct + ' ' + styles.contantFavorityAboutProduct}>
                    <span className={styles.contantBasketAboutProductName}>{nameProduct}</span>

                    <div className={styles.contantBasketAboutProductPrice}>
                        <div>
                            <span className={styles.contantBasketAboutProductPriceSale}>{intl.getPriceSale()}</span>
                            <span className={styles.contantBasketAboutProductPriceProcent}>{sale ? intl.getProcent() : ''}</span>
                            <span className={styles.contantBasketAboutProductPriceOld}><s>{sale ? intl.getPrice() : ''}</s></span>
                        </div>
                    </div>

                    <div className={styles.contantBasketAboutProductInfo}>
                        <p className={styles.contantBasketAboutProductInfoRegion}>Регион активации<b> Россия и страны СНГ</b></p>
                        <p className={styles.contantBasketAboutProductInfoService}>Сервис активации<b> {tags}</b></p>
                    </div>
                </div>
                
                <button className={styles.btnCLose} onClick={e => {e.stopPropagation(); deleteProduct(id)}}><BtnClose/></button>
            </div>

            <hr className={styles.hr} />
        </>
    );
});
 
export default FavorityCard;