import * as React from 'react';
import { useLoaderData } from 'react-router-dom';
import SwiperSlider from '../components/swiperSlider/swiper';
import ListTopProduct from '../components/cardList/listTopProduct'
import ListAllProduct from '../components/cardList/listAllProduct';
import { ILoaderData } from '../types/types';
import '../style/mainMenu.css'

const MainMenu = React.memo((): JSX.Element => {
    const loader = useLoaderData() as ILoaderData[];

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