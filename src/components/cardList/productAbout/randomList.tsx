import * as React from 'react';

import CardProduct from '../../cards/cardProduct';

import { dataFetch } from "../../../utilities/auxFunc";

import { FC } from 'react'
import { TLocalStorage, TRandomList } from '../../../types/types';

import '../../../style/aboutProduct.css'

const RandomList: FC<TRandomList> = React.memo(({id}) => {
    const [arrRandomNum, setArrRandomNum] = React.useState<TLocalStorage[]>([])

    React.useMemo(() => {
        const getRandomArr = async() => {
            const arr = await dataFetch('random', id) as TLocalStorage[];

            setArrRandomNum(arr);
        };

        getRandomArr();
    }, [id]);

    return (
        <div className='container_random_product'>
            <h2 className='title_random_product'>Вам будет интересно</h2>

            <div className='container_card_top_four'>
                {arrRandomNum.map(item => 
                    <CardProduct key={item.id} dataB={item} index={item.id}/>
                )}
            </div>
        </div>
    );
});
 
export default RandomList;