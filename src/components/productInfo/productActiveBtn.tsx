import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';

import { Link } from 'react-router-dom';

import ProductFancyBox from "../../components/productInfo/productFancybox";
import PriceProduct from '../../UI/priceProduct';

import { dataFetch } from '../../utilities/auxFunc';

import { FC } from 'react'
import { IPropsProductBtnActive, IStateStore, TLocalStorage } from "../../types/types";

import SvgCheckMark from '../../svg/svgCheckMark';
import BtnLike from '../../svg/btnLike';

import '../../style/productBtnActive.css'

const ProductBtnActive: FC<IPropsProductBtnActive> = ({product}) => {
    const stateValue = useSelector((state: IStateStore) => state);
    const dispatch = useDispatch();

    const basket = stateValue.basket.find(item => item.id === product.id);
    const favor = stateValue.favority.find(item => item.id === product.id);

    const changeBasket = async() => {
        const data = await dataFetch('certain', product.id) as TLocalStorage;

        dispatch(addBusket(data));
    };

    const changeFavor = async() => {
        const data = await dataFetch('certain', product.id) as TLocalStorage;

        dispatch(addFavorite(data));
    };

    return (
        <div className='container_product_info'>

            <div className='contant_img_product'>
                <img className='contant_img_product-img' src={product.img} alt="" />
            </div>

            {window.innerWidth <= 600 
            ? <div className='fancy_portal'> <ProductFancyBox gallery={product.gallery}/> </div>
            : ''
            }

            <div className='contant_product_about'>
                <h1 className='contant_product_about_name'>{product.name}</h1>
                <span className='contant_product_about_avail'>В наличии</span>
                
                <div className='contant_price_product'>
                    <PriceProduct product={product}/>
                </div>

                <div className='contant_btn_product'>
                    {basket 
                    ? <Link to={'/basket'} className='contant_btn_product_buy active'>Добавлено</Link>
                    : <Link to={'#'} className='contant_btn_product_buy' onClick={() => changeBasket()}>Купить</Link>
                    }

                    {favor
                    ? <Link to={'/favority'} className='contant_btn_product_like'><BtnLike checkBtnLike={favor}/></Link>
                    : <Link to={'#'} className='contant_btn_product_like' onClick={() => changeFavor()}><BtnLike checkBtnLike={undefined}/></Link>
                    }
                </div>

                <div className='contant_product_ganre'>
                        <span className='contant_product_ganre-info-title'>Жанр</span>
                        <span className='contant_product_ganre-info-title'>Платформа</span>
                        <span className='contant_product_ganre-info-title'>Регион активации</span>
                        <span className='contant_product_ganre-info-title'>Тип товара</span>
                        
                        <span id='ganre' className='contant_product_ganre-info-text'>{product.ganre}</span>
                        <span id='platform' className='contant_product_ganre-info-text '>{product.tags[0]}</span>
                        <span id='country' className='contant_product_ganre-info-text'>Страны СНГ</span>
                        <span id='type' className='contant_product_ganre-info-text'>{product.tags[1]}</span>
                </div>

                <div className='contant_warranty'>
                    <SvgCheckMark/>
                    <span className='contant_warranty_text'>Гарантия качества</span>
                </div>
            </div>
            
        </div>
    );
};
 
export default ProductBtnActive;