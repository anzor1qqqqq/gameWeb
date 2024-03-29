import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Swiper, SwiperSlide } from 'swiper/react';
import PriceProduct from '../../UI/priceProduct';

import { addBusket, addFavorite } from '../../global/redux';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { dataFetch } from '../../utilities/auxFunc';

import { IStateStore, TLocalStorage, ILoaderData } from '../../types/types';

import logo from '../../img/slider/b10d8aa265c089eb54d1e1666fef2c17 1.svg';
import img1 from '../../img/slider/1.jpg';
import img2 from '../../img/slider/2.jpg';
import img3 from '../../img/slider/3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/swiperSlider.css';

const SwiperSlider = ({product}: {product: ILoaderData}): JSX.Element => {
    const dispatch = useDispatch();
    const stateValue = useSelector((state: IStateStore) => state);

    const navig = useNavigate();

    const busketUpdate = (target: HTMLElement) => {
        if (target.classList.contains('add')) {
            navig('/basket')
        } else {
            const data = async() => {
                const dataB = await dataFetch('certain', 11) as TLocalStorage;

                dispatch(addBusket(dataB));
            };

            data();
        };
    };

    const favorUpdate = (target: HTMLElement) => {
        if (target.classList.contains('add')) {
            navig('/favority');
        } else {
            const data = async() => {
                const dataB = await dataFetch('certain', 11) as TLocalStorage;

                dispatch(addFavorite(dataB));
            };

            data();
        };
    } ;

    return (
        <Swiper className='swiper_style'
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{delay: 4000}}
            pagination={{
                clickable: true,
            }}
            navigation
            speed={700}  
            
        >
            <SwiperSlide onClick={() => navig('/product/11')}>
                <img className='contant_img' src={img1} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Соревнуйтесь со временем, перехитрите полицейских и участвуйте в еженедельных квалификациях, чтобы попасть в The Grand, самое сложное соревнование в уличных гонках на Лейкшоре.</p>
                        </div>

                        <div className='contant_price'>
                            <PriceProduct product={product}/>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>В корзину</button>}

                            {stateValue.favority.find(item => item.id === 11)
                            ? <button className='contant_btn_favor add' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide onClick={() => navig('/product/11')}>
            <img className='contant_img' src={img2} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Укомплектуйте свой гараж точно настроенными, индивидуальными автомобилями и зажгите улицы своим стилем, эксклюзивной посадкой и ярким глобальным саундтреком, который звучит в каждом уголке мира.</p>
                        </div>

                        <div className='contant_price'>
                            <PriceProduct product={product}/>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>В корзину</button>}

                            {stateValue.favority.find(item => item.id === 11) 
                            ? <button className='contant_btn_favor add' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide onClick={() => navig('/product/11')}>
                <img className='contant_img' src={img3} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Рвите улицы, контролируйте погоню. Need for Speed™ Unbound Volume 2 уже доступен!</p>
                        </div>

                        <div className='contant_price'>
                            <PriceProduct product={product}/>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id  === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => {event.stopPropagation(); busketUpdate(event.target as HTMLElement)}}>В корзину</button>}

                            {stateValue.favority.find(item => item.id === 11)
                            ? <button className='contant_btn_favor add' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => {event.stopPropagation(); favorUpdate(event.target as HTMLElement)}}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>
    );
};
 
export default SwiperSlider;