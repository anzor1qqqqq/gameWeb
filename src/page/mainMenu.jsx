import React, { memo } from 'react';
import { useLoaderData } from 'react-router-dom';
import SwiperSlider from '../components/swiperSlider/swiper';
import ListTopProduct from '../components/cardList/listTopProduct'
import ListAllProduct from '../components/cardList/listAllProduct';
import '../style/mainMenu.css'

const MainMenu = memo(() => {
    const loader = useLoaderData();

    return (
        <>
            <section>
                <SwiperSlider/>
            </section>
            
            <section className='section_contant_main'>
                <ListTopProduct dataB={loader}/>
            </section>

            <section className='section_contant_main'>
                <ListAllProduct dataB={loader}/>
            </section> 
        </>
    );
});
 
export default MainMenu;