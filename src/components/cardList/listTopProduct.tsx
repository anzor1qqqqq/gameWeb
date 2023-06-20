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
                <CardProduct dataB={dataB} index={0} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={1} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={2} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={3} spanText={'Топ 4'}/>
            </div>
        </>
    );
})
 
export default ListTopProduct;