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

    const style = {
        background: `linear-gradient(180deg, rgba(6, 3, 15, 0.00) 0%, #06030F 100%), url(${loader.wallpaper}), lightgray -26.733px -89.589px / 124.011% 129.255% no-repeat`,
    };

    React.useMemo(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [loader.id])

    React.useEffect(() => {
        const header = document.querySelector('header') as HTMLHeadElement;
        document.body.style.backgroundColor = '#040208';

        header.style.position = 'relative';
        header.style.zIndex = '99';

        return () => {
            header.style.position = '';
            header.style.zIndex = '';
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (
        <section>
            <ProductInfo loader={loader}/>

            {window.innerWidth > 600
            ? <ProductFancyBox gallery={loader.gallery}/>
            : ''
            }

            <div className="contant_about_product">
                <h3 className="contant_about_product_title">Полное погружение в Тамриэль</h3>
                <p className="contant_about_product_parag">Признайтесь, вы ведь тоже сразу после анонса нового поколения VR-шлемов захотели увидеть на них TES V? Тодд Говард вот точно захотел и, как это обычно бывает, воплотил желание в жизнь. Очередной Skyrim предлагает написать историю Довакина по-новому — буквально его же руками. Игра поддерживает все современные устройства (Oculus Rift, HTC Vive, Windows Mixed Reality, Valve Index) и не требует дополнительных настроек: просто жмите «Новая игра» и размещайтесь поудобнее в стартовой телеге. Стрельба из лука, поединки на мечах, колдовство — всё здесь осуществляется при помощи «ручных» контроллеров, но это лишь самые базовые удобства. Bethesda переработала меню, инвентарь и панель быстрого доступа, чтобы обеспечить действительно невиданный игровой опыт. Всё это — с полным набором дополнений и, разумеется, возможностью ставить моды. Путешествия по Скайриму никогда не были такими иммерсивными!</p>
            </div>

            <RandomList id={loader.id}/>

            <div className='img_wallper animate__animated animate__fadeIn animate__duration-3s animate__delay-1s' style={style}></div>
        </section>
    );
};
 
export default ProductPageInfo;