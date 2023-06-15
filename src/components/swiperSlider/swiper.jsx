import React from 'react';
import { addBusket, addFavorite } from '../../global/redux';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import logo from '../../img/slider/b10d8aa265c089eb54d1e1666fef2c17 1.svg';
import img1 from '../../img/slider/1.jpg';
import img2 from '../../img/slider/2.jpg';
import img3 from '../../img/slider/3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../style/swiperSlider.css';

const SwiperSlider = () => {
    const dispatch = useDispatch();
    const stateValue = useSelector(state => state);

    const navig = useNavigate();
    const pathLink = useResolvedPath();

    const busketUpdate = target => {
        target.classList.contains('add') ? pathLink.pathname === '/' ? navig('/basket') : navig(pathLink.pathname + '/basket') : dispatch(addBusket(11));
    };

    const favorUpdate = target => {
        target.classList.contains('add') ? pathLink.pathname === '/' ? navig('/favority') : navig(pathLink.pathname + '/favority') : dispatch(addFavorite(11));
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
            <SwiperSlide>
                <img className='contant_img' src={img1} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Соревнуйтесь со временем, перехитрите полицейских и участвуйте в еженедельных квалификациях, чтобы попасть в The Grand, самое сложное соревнование в уличных гонках на Лейкшоре.</p>
                        </div>

                        <div className='contant_price'>
                            <span className='price'>4999 P</span>
                            <span className='sale'>-25%</span>
                            <span className='prev_price'>6999 P</span>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => busketUpdate(event.target)}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => busketUpdate(event.target)}>В корзину</button>}

                            {stateValue.favority.find(item => item === 11)
                            ? <button className='contant_btn_favor add' onClick={event => favorUpdate(event.target)}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => favorUpdate(event.target)}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide>
            <img className='contant_img' src={img2} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Укомплектуйте свой гараж точно настроенными, индивидуальными автомобилями и зажгите улицы своим стилем, эксклюзивной посадкой и ярким глобальным саундтреком, который звучит в каждом уголке мира.</p>
                        </div>

                        <div className='contant_price'>
                            <span className='price'>4999 P</span>
                            <span className='sale'>-25%</span>
                            <span className='prev_price'>6999 P</span>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => busketUpdate(event.target)}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => busketUpdate(event.target)}>В корзину</button>}

                            {stateValue.favority.find(item => item === 11) 
                            ? <button className='contant_btn_favor add' onClick={event => favorUpdate(event.target)}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => favorUpdate(event.target)}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>

            <SwiperSlide>
                <img className='contant_img' src={img3} alt="" />
                    <div className='contant_img_block'>
                        <div className='contant_img_block_info'>
                            <img className='contant_img_block_logo' src={logo} alt="" />
                            <p className='contant_img_block_parag'>Рвите улицы, контролируйте погоню. Need for Speed™ Unbound Volume 2 уже доступен!</p>
                        </div>

                        <div className='contant_price'>
                            <span className='price'>4999 P</span>
                            <span className='sale'>-25%</span>
                            <span className='prev_price'>6999 P</span>
                        </div>

                        <div className='contant_btn'>
                            {stateValue.basket.find(item => item.id  === 11) 
                            ? <button className='contant_btn_buy add' onClick={event => busketUpdate(event.target)}>Добавлено</button>
                            : <button className='contant_btn_buy' onClick={event => busketUpdate(event.target)}>В корзину</button>}

                            {stateValue.favority.find(item => item === 11)
                            ? <button className='contant_btn_favor add' onClick={event => favorUpdate(event.target)}>Сохранен</button>
                            : <button className='contant_btn_favor' onClick={event => favorUpdate(event.target)}>В избранное</button>}
                        </div>
                    </div>
            </SwiperSlide>
        </Swiper>
    );
};
 
export default SwiperSlider;