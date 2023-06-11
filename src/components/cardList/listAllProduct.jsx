import React, { memo } from 'react';
import CardProduct from '../cards/cardProduct'; 
import '../../style/mainMenu.css'

const ListAllProduct = memo(({dataB}) => {
    return (    
        <>
            <h2 className='section_contant_main_title'>Все товары</h2>

            <div className='container_card_all'>
                <CardProduct dataB={dataB} index={9}/>
                <CardProduct dataB={dataB} index={7} spanText={'Новинкa'}/>
                <CardProduct dataB={dataB} index={2} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={10}/>
                <CardProduct dataB={dataB} index={0} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={6} spanText={'Хит продаж'}/>
                <CardProduct dataB={dataB} index={1} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={4} spanText={'Новинкa'}/>
                <CardProduct dataB={dataB} index={3} spanText={'Топ 4'}/>
                <CardProduct dataB={dataB} index={5}/>
                <CardProduct dataB={dataB} index={11} spanText={'Новинкa'}/>
            </div>

            <button className='btn_link_catalogy'>Перейти в каталог</button>
        </>
    );
})
 
export default ListAllProduct;