import React, { useState } from 'react';
import SwiperSlider from '../components/swiper';
import CardProduct from '../components/cardProduct'; 
import { useLoaderData } from 'react-router-dom';
import '../style/mainMenu.css'

const MainMenu = () => {
    const loader = useLoaderData();
    const [defaultData, modifiedData] = useState([...loader]);

    return (
        <>
            <section>
                <SwiperSlider/>
            </section>
            
            <section className='section_contant_main'>
                <h2 className='section_contant_main_title'>Топ 4</h2>

                <div className='container_card_top_four'>
                    <CardProduct dataB={defaultData} id={0} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={1} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={2} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={3} spanText={'Топ 4'}/>
                </div>
            </section>

            <section className='section_contant_main'>
                <h2 className='section_contant_main_title'>Все товары</h2>

                <div className='container_card_all'>
                    <CardProduct dataB={defaultData} id={9}/>
                    <CardProduct dataB={defaultData} id={7} spanText={'Новинкa'}/>
                    <CardProduct dataB={defaultData} id={2} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={10}/>
                    <CardProduct dataB={defaultData} id={0} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={6} spanText={'Хит продаж'}/>
                    <CardProduct dataB={defaultData} id={1} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={4} spanText={'Новинкa'}/>
                    <CardProduct dataB={defaultData} id={3} spanText={'Топ 4'}/>
                    <CardProduct dataB={defaultData} id={5}/>
                    <CardProduct dataB={defaultData} id={11} spanText={'Новинкa'}/>
                </div>

                <button className='btn_link_catalogy'>Перейти в каталог</button>
            </section> 
        </>
    );
}
 
export default MainMenu;