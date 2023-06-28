import * as React from 'react';
import CardProduct from '../cards/cardProduct'; 
import { FC } from 'react';
import { IpropsList } from '../../types/types';
import '../../style/mainMenu.css'

const ListAllProduct: FC<IpropsList> = React.memo(({dataB}) => {
    return (    
        <>
            <h2 className='section_contant_main_title'>Все товары</h2>

            <div className='container_card_all'>
                <CardProduct dataB={dataB[9]} index={9}/>
                <CardProduct dataB={dataB[7]} index={7} spanText={'Новинкa'}/>
                <CardProduct dataB={dataB[2]} index={2} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[10]} index={10}/>
                <CardProduct dataB={dataB[0]} index={0} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[6]} index={6} spanText={'Хит продаж'}/>
                <CardProduct dataB={dataB[1]} index={1} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[4]} index={4} spanText={'Новинкa'}/>
                <CardProduct dataB={dataB[3]} index={3} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB[8]} index={8} />
                <CardProduct dataB={dataB[5]} index={5}/>
                <CardProduct dataB={dataB[11]} index={11} spanText={'Новинкa'}/>
            </div>

            <button className='btn_link_catalogy'>Перейти в каталог</button>
        </>
    );
})
 
export default ListAllProduct;