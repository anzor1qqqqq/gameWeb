import React, { useState, useMemo } from 'react';
import Loading from '../components/loading';
import SwiperSlider from '../components/swiper';
import CardTopFour from '../components/cardTopFour';    
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
            
            <section>
                <h2>TOP 4</h2>
                    <div className='container_card_top_four'>
                        <CardTopFour dataB={defaultData} id={0}/>
                        <CardTopFour dataB={defaultData} id={1}/>
                        <CardTopFour dataB={defaultData} id={2}/>
                        <CardTopFour dataB={defaultData} id={3}/>
                    </div>
            </section>
            
        </main>
    );
}
 
export default MainMenu;