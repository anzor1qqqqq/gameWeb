import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PayVariant from '../components/payVariant/payVariant';
import PayWindow from '../components/payVariant/payWindow';
import { ILoaderData, IStateStore } from '../types/types';
import BasketList from '../components/cardList/basketList/basketList';
import '../style/basketMainList.css'

const BasketPage = React.memo((): JSX.Element => {
    const loader = useLoaderData() as ILoaderData[];
    const stateValue = useSelector((state: IStateStore) => state);
    
    return (
        <>
            <h1 className='title_basket'>Корзина <b className='count_basket'>{stateValue.basket.length}</b></h1>
            <section className='section_basket'>
                <div className='contant_basket_product'>
                        <BasketList loader={loader} />
                        {stateValue.basket.length ? <PayVariant/>: ''}
                </div>

                <div className={stateValue.basket.length ? 'section_basket_price': 'section_basket_price d-none'}>
                    <PayWindow/>
                </div>
            </section>
        </>
    );
});
 
export default BasketPage;