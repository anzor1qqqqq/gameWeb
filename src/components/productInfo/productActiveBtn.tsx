import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, addBusket } from '../../global/redux';

import { Link } from 'react-router-dom';

import { IntlNum } from '../../utilities/Intl';
import { dataFetch } from '../../utilities/auxFunc';

import ProductFancyBox from "../../components/productInfo/productFancybox";

import { FC } from 'react'
import { IPropsProductBtnActive, IStateStore, TLocalStorage } from "../../types/types";

import SvgCheckMark from '../../svg/svgCheckMark';
import BtnLike from '../../svg/btnLike';

import '../../style/productBtnActive.css'

const ProductBtnActive: FC<IPropsProductBtnActive> = ({nameProduct, id, price, sale, img, tags, ganre, gallery}) => {
    const stateValue = useSelector((state: IStateStore) => state);
    const dispatch = useDispatch();

    const intl = new IntlNum(price, sale);

    const basket = stateValue.basket.find(item => item.id === id);
    const favor = stateValue.favority.find(item => item.id === id);

    const changeBasket = async() => {
        const data = await dataFetch('certain', id) as TLocalStorage;

        dispatch(addBusket(data));
    };

    const changeFavor = async() => {
        const data = await dataFetch('certain', id) as TLocalStorage;

        dispatch(addFavorite(data));
    };

    return (
        <div className='container_product_info'>

            <div className='contant_img_product'>
                <img className='contant_img_product-img' src={img} alt="" />
            </div>

            {window.innerWidth <= 600 
            ? <div className='fancy_portal'> <ProductFancyBox gallery={gallery}/> </div>
            : ''
            }

            <div className='contant_product_about'>
                <h1 className='contant_product_about_name'>{nameProduct}</h1>
                <span className='contant_product_about_avail'>В наличии</span>
                
                <div className='contant_price_product'>
                    {sale 
                    ? 
                        <>
                           <span className='contant_price_product_sale'>{intl.getPriceSale()}</span> 
                           <span className='contant_price_product_procent'>{intl.getProcent()}</span>
                           <span className='contant_price_product-price'><s>{intl.getPrice()}</s></span>
                        </>
                    : <span className='contant_price_product_sale'>{intl.getPrice()}</span>
                    }
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
                    <div className='contant_product_ganre-info'>
                        <span className='contant_product_ganre-info-title'>Жанр</span>
                        <span className='contant_product_ganre-info-text'>{ganre}</span>
                    </div>

                    <div className='contant_product_ganre-info'>
                        <span className='contant_product_ganre-info-title'>Платформа</span>
                        <span className='contant_product_ganre-info-text'>{tags[0]}</span>
                    </div>

                    <div className='contant_product_ganre-info'>
                        <span className='contant_product_ganre-info-title'>Регион активации</span>
                        <span className='contant_product_ganre-info-text'>Страны СНГ</span>
                    </div>

                    <div className='contant_product_ganre-info'>
                        <span className='contant_product_ganre-info-title'>Тип товара</span>
                        <span className='contant_product_ganre-info-text'>{tags[1]}</span>
                    </div>
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