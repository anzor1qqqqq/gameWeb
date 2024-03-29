import * as React from 'react'

import CardProduct from '../cards/cardProduct'; 
import Loading from '../loading/loading';

import { FC } from 'react';
import { IpropsList } from '../../types/types';

import '../../style/mainMenu.css'

const ListAllProduct: FC<IpropsList> = React.memo(({dataB, sort, startWait}) => {
    if (startWait) {
        return <Loading/>
    };

    return (    
        <>
            {!sort && <h2 className='section_contant_main_title'>Все товары</h2>}

            <div className={sort ? 'container_card_all-sorting'  : 'container_card_all'}>
                {dataB.reverse().map(item => 
                    <CardProduct key={item.id} dataB={item} index={item.id} spanText={item?.category ? item.category : ''}/>
                )}
            </div>
        </>
    );
})
 
export default ListAllProduct;