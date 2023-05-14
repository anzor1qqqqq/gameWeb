import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import logo from '../img/slider/b10d8aa265c089eb54d1e1666fef2c17 1.svg';
import img1 from '../img/slider/1.jpg';
import img2 from '../img/slider/2.jpg';
import img3 from '../img/slider/3.jpg'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../style/swiperSlider.css';

const SwiperSlider = () => {
    const style = {
        height: 700,
    };

    return (
        <Swiper style={style}
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
                            <button className='contant_btn_buy'>В корзину</button>
                            <button className='contant_btn_favor'>в избранное</button>
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
                            <button className='contant_btn_buy'>В корзину</button>
                            <button className='contant_btn_favor'>в избранное</button>
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
                            <button className='contant_btn_buy'>В корзину</button>
                            <button className='contant_btn_favor'>в избранное</button>
                        </div>
                    </div>
            </SwiperSlide>
    
        </Swiper>
    );
}
 
export default SwiperSlider;