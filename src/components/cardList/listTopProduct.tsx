import * as React from 'react';

import CardProduct from '../cards/cardProduct'; 

import { FC } from 'react';
import { IpropsList } from '../../types/types';

import '../../style/mainMenu.css'

const ListTopProduct: FC<IpropsList> = React.memo(({dataB}) => {
    return (  
        <>
            <h2 className='section_contant_main_title'>Топ 4</h2>

            <div className='container_card_top_four'>
                <CardProduct dataB={dataB[0]} index={0} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[1]} index={1} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[2]} index={2} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[3]} index={3} spanText={'Топ 4'}/>
            </div>
        </>
    );
})
 
export default ListTopProduct;