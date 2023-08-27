import * as React from 'react';

import { useSelector } from "react-redux";

import { IntlString, IntlNum } from "../../utilities/Intl";

import { IStateStore, ILoaderData } from "../../types/types";

import '../../style/payWindow.css'

const PayWindow = () => {
    const stateValue = useSelector((state: IStateStore) => state);

    const intl = new IntlString(stateValue.basket.length, {one:'товар', few:'товара', many:'товаров'});

    const coutingSum = React.useCallback((obj: ILoaderData[]): string => {
        const sum = obj.reduce((prevValue: number, item: ILoaderData): number => {
    
            if (item.sale === 0) {
                const price = prevValue + (+item.price * (item.counter ? item.counter : 1));
    
                return price;
            } else {
                const salePrice: number = item.price - parseInt((item.price * (item.sale / 100)).toString());
                const price = prevValue + (salePrice * (item.counter ? item.counter : 1))
    
                return price;
            }
        }, 0);

        const intl = new IntlNum(sum);
    
        return intl.getPrice();
    }, []);

    if (window.innerWidth <= 600) {
        return (
            <div className='section_basket_price_scroll'>
                <div className='section_basket_price_block'>
                    <div className='section_basket_price_block_info'>
                        <h3 className='title_your_basket'>Ваша корзина</h3>
                        <span className='section_basket_price_block_info_countProduct'><b className='count_basket'>{stateValue.basket.length}</b> {intl.getWord()}</span>
                        <div className='contannt_status_basket'>
                            <span><b>К оплате</b></span>
                            <span className='section_basket_price_block_info_allPrice'>{coutingSum(stateValue.basket)}</span>
                        </div>
                        
                        <button className='section_basket_price_block_info_btn'>Оформить заказ</button>

                        <div className='section_basket_price_block_info_license'>
                            <input className='section_basket_price_block_info_license_input' id='license' type="checkbox" />
                            <label className='section_basket_price_block_info_license_input_text' htmlFor="license">Покупая данный товар, я подтверждаю,что ознакомился и согласен 
                            с <b style={{color: '#4885FC'}}>условиями</b> и <b style={{color: '#4885FC'}}> условия магазина</b></label>
                        </div>
                    </div>
                </div>

                <hr className='gorizont_line_mobile' />

                <div className='section_basket_price_about'> 
                    <div>
                        <p className='section_basket_price_about_text'><b>%</b> Если у вас есть купон на скидку, Вы сможете ввести его на следующем этапе</p>
                    </div>
                </div>
            </div>
        )
    };

    return (
        <div className='section_basket_price_scroll'>
            <div className='section_basket_price_block'>
                <div className='section_basket_price_block_info'>
                    <span className='section_basket_price_block_info_countProduct'><b className='count_basket'>{stateValue.basket.length}</b> {intl.getWord()}</span>
                    <span className='section_basket_price_block_info_allPrice'>{coutingSum(stateValue.basket)}</span>
                    <button className='section_basket_price_block_info_btn'>Оформить заказ</button>

                    <div className='section_basket_price_block_info_license'>
                        <input className='section_basket_price_block_info_license_input' id='license' type="checkbox" />
                        <label className='section_basket_price_block_info_license_input_text' htmlFor="license">Покупая данный товар, я подтверждаю,что ознакомился и согласен 
                        с <b style={{color: '#4885FC'}}>условиями</b> и <b style={{color: '#4885FC'}}> условия магазина</b></label>
                    </div>
                </div>
            </div>

            <div className='section_basket_price_about'> 
                <div>
                    <p className='section_basket_price_about_text'><b>%</b> Если у вас есть купон на скидку, Вы сможете ввести его на следующем этапе</p>
                </div>
            </div>
        </div>
    );
}
 
export default PayWindow;