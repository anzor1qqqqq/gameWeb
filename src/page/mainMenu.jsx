import React, { useEffect } from 'react';
import SwiperSlider from '../components/swiper';

const MainMenu = () => {
    const style = {
        marginTop: 40,
    }
    return (
        <main style={style} className='main'>
            <SwiperSlider/>
        </main>
    );
}
 
export default MainMenu;