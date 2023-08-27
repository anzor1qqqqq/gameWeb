import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PriceProduct from '../../../UI/priceProduct';

import { removeProductFavority } from '../../../global/redux';

import { FC } from "react";
import { TypePropsFavority } from "../../../types/types";

import BtnClose from '../../../svg/btnClose';

import styles from '../../../less/basket/basket.module.less'

const FavorityCard: FC<TypePropsFavority> = React.memo(({product}): JSX.Element => {
    const dispatch = useDispatch();
    const navig = useNavigate();

    const deleteProduct = React.useCallback((index: number) => {
        dispatch(removeProductFavority(index));
    }, []);

    return (
        <>
            <div className={styles.containerBasket + ' ' + styles.containerFavority} onClick={() => navig(`/product/${product.id}`)}>
                <div className={styles.containerBasketImgFavor + ' ' + styles.containerFavorityImg}>
                    <img className={styles.containerBasketImgPicture} src={product.img} alt="" />
                </div>

                <div className={styles.contantBasketAboutProduct + ' ' + styles.contantFavorityAboutProduct}>
                    <span className={styles.contantBasketAboutProductName}>{product.name}</span>

                    <div className={styles.contantBasketAboutProductPrice}>
                        <div className={styles.priceInfo}>
                            <PriceProduct product={product}/>
                        </div>
                    </div>

                    <div className={styles.contantBasketAboutProductInfo}>
                        <p className={styles.contantBasketAboutProductInfoRegion}>Регион активации<b> Россия и страны СНГ</b></p>
                        <p className={styles.contantBasketAboutProductInfoService}>Сервис активации<b> {product.tags}</b></p>
                    </div>
                </div>
                
                <button className={styles.btnCLose} onClick={e => {e.stopPropagation(); deleteProduct(product.id)}}><BtnClose/></button>
            </div>

            <hr className={styles.hr} />
        </>
    );
});
 
export default FavorityCard;