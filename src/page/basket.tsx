import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import {ILoaderData } from '../types/types';
import BasketList from '../components/cardList/basketList/basketList';

const BasketPage = React.memo((): JSX.Element => {
    const loader = useLoaderData() as ILoaderData[];

    return (
        <section>
            <h1>Корзина</h1>

           <BasketList loader={loader} />
        </section>
    );
});
 
export default BasketPage;