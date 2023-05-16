import React, { useState, useMemo } from 'react';
import Loading from '../components/loading';
import SwiperSlider from '../components/swiper';
import CardProduct from '../components/cardProduct'; 
import '../style/mainMenu.css'

const MainMenu = () => {
    const [defaultData, modifiedData] = useState([]);

    const style = {
        marginTop: 40,
    };

    const getData = async () => {
        const data = await fetch('src/json/data-base.json').then(response => response.json()).then(obj => obj);
        modifiedData(data);
    };

    useMemo(() => {
        getData();
    }, []);

    if (!defaultData.length) {
        return (
            <main style={style} className='main'>
                <Loading/>
            </main>
        );
    };

    return (
        <main style={style} className='main'>
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
                </div>

                <button className='btn_link_catalogy'>Перейти в каталог</button>
            </section> 
            
        </main>
    );
}
 
export default MainMenu;