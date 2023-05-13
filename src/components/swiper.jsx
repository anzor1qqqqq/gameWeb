import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import logo from '../img/slider/b10d8aa265c089eb54d1e1666fef2c17 1.svg'
import '../style/swiperSlider.css'

const SwiperSlider = () => {
    const style = {
        height: 700,
    }

    return (
        <Swiper style={style}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            /* autoplay={{delay: 4000}} */
            speed={700}
        >
            <SwiperSlide>
                <div className='contant_img one'>
                    <div className='contant_img_block'>
                        <img src={logo} alt="" />

                        <div>
                            <p>Соревнуйтесь со временем, перехитрите полицейских и участвуйте в еженедельных квалификациях, чтобы попасть в The Grand, самое сложное соревнование в уличных гонках на Лейкшоре.</p>
                            <span className='price'>4999 P</span>
                            <span className='sale'>-25%</span>
                            <span className='prev_price'>6999 P</span>
                        </div>

                        <div>
                            <button>В корзину</button>
                            <button>в избранное</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contant_img two'>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='contant_img three'>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}
 
export default SwiperSlider;