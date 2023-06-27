import { useLoaderData } from "react-router-dom";
import ProductInfo from "../components/productInfo/productInfo";
import ProductFancyBox from "../components/productInfo/productFancybox";
import RandomList from "../components/cardList/productAbout/randomList";
import { TLocalStorage } from "../types/types";
import '../style/aboutProduct.css'

const ProductPageInfo = () => {
    const loader = useLoaderData() as TLocalStorage;

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

            <RandomList/>
        </section>
    );
};
 
export default ProductPageInfo;