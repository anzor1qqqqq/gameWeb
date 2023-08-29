import * as React from 'react';

import { useLoaderData } from "react-router-dom";

import ProductInfo from "../components/productInfo/productInfo";
import ProductFancyBox from "../components/productInfo/productFancybox";
import RandomList from "../components/cardList/productAbout/randomList";

import { TLocalStorage } from "../types/types";

import '../style/aboutProduct.css'
import 'animate.css';

const ProductPageInfo = () => {
    const loader = useLoaderData() as TLocalStorage;

    React.useMemo(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [loader.id])

    React.useEffect(() => {
        const header = document.querySelector('header') as HTMLHeadElement;

        const section = document.querySelector('section') as HTMLElement;
        const blockBacground = document.querySelector('.img_wallper') as HTMLElement;

        const div = document.createElement('div');

        blockBacground ? blockBacground.remove() : '';

        div.classList.add('img_wallper');
        div.style.background = `linear-gradient(rgba(6, 3, 15, 0) 0%, rgb(6, 3, 15) 100%), url(${loader.wallpaper}), -26.733px -89.589px / 124.011% 129.255% no-repeat rgb(6, 3, 15)`;

        section.append(div);

        document.body.style.backgroundColor = '#040208';

        header.style.position = 'relative';
        header.style.zIndex = '88';

        return () => {
            header.style.position = '';
            header.style.zIndex = '';
            document.body.style.backgroundColor = '';
        };
    }, [loader.id]);

    const switchBtnInfo = (elem: HTMLButtonElement) => {
        if (!elem.classList.contains('active')) {
            const elemBlockInfo = document.querySelectorAll('.block_info_product') as NodeListOf<HTMLDivElement>;
            const btnProductInfo = document.querySelectorAll('.btn_product_info') as NodeListOf<HTMLButtonElement>;

            const id = +elem.id;

            elemBlockInfo.forEach((item, i) => {
                btnProductInfo[i].classList.remove('active')
                item.classList.remove('active');
            });

            elem.classList.add('active');
            elemBlockInfo[id].classList.add('active')
        };
    };

    return (
        <section>
            <ProductInfo loader={loader}/>

            {window.innerWidth > 600
            ? <ProductFancyBox gallery={loader.gallery}/>
            : ''
            }

            <div className="contant_about_product">
                <div className='block_btn_switch'>
                    <button id='0' className='btn_product_info active' onClick={e => switchBtnInfo(e.target as HTMLButtonElement)}>Описание товара</button>
                    <button id='1' className='btn_product_info' onClick={e => switchBtnInfo(e.target as HTMLButtonElement)}>Системные требования</button>
                    <button id='2' className='btn_product_info' onClick={e => switchBtnInfo(e.target as HTMLButtonElement)}>Активация</button>
                </div>

                <div className='block_info_product active'>
                    <h3 className="contant_about_product_title">{loader.titleDescription}</h3>
                    {loader.description.split(/\n/).map((item, i) => 
                        <p className="contant_about_product_parag" key={i}>{item}</p>    
                    )}
                </div>

                <div className='block_info_product'>
                    <h5>Минимальные системные требования</h5>

                    <div className='block_system'>
                        <span className='option_system'>ОС</span>
                        <span className='option_info'>{loader.system.min.OC}</span>

                        <span className='option_system'>Процессор</span>
                        <span className='option_info'>{loader.system.min.processor}</span>

                        <span className='option_system'>Оперативная память</span>
                        <span className='option_info'>{loader.system.min.memory}</span>

                        <span className='option_system'>Видеокарта</span>
                        <span className='option_info'>{loader.system.min.card}</span>

                        <span className='option_system'>Место на диске</span>
                        <span className='option_info'>{loader.system.min.disk}</span>
                    </div>
                    
                    {loader.system.recomen && 
                        <>
                            <hr />
                            
                            <h5 id='rec'>Рекомендованные системные требования</h5>

                            <div className='block_system'>
                                <span className='option_system'>ОС</span>
                                <span className='option_info'>{loader.system.recomen.OC}</span>
        
                                <span className='option_system'>Процессор</span>
                                <span className='option_info'>{loader.system.recomen.processor}</span>
        
                                <span className='option_system'>Оперативная память</span>
                                <span className='option_info'>{loader.system.recomen.memory}</span>
        
                                <span className='option_system'>Видеокарта</span>
                                <span className='option_info'>{loader.system.recomen.card}</span>
        
                                <span className='option_system'>Место на диске</span>
                                <span className='option_info'>{loader.system.recomen.disk}</span>
                            </div>
                        </>
                    }
                </div>

                <div className='block_info_product'>
                    {loader.activation.map((item, i) => 
                        <div className='block_activity' key={i}>
                            <span className='num_activ'>{i+1}</span>
                            <p>{item}</p>
                        </div>
                    )}
                </div>
            </div>

            <RandomList id={loader.id}/>
        </section>
    );
};
 
export default ProductPageInfo;