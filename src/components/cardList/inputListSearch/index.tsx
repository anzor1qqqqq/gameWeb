import { useNavigate } from 'react-router-dom';

import PriceProduct from '../../../UI/priceProduct';
import TagsProduct from '../../../UI/tagsProduct';

import { FC } from 'react';
import { IPropsInputSearch } from '../../../types/types';

import '../../../style/searchHeader.css'

const InputListSearch: FC<IPropsInputSearch> = ({listLi, MListLi, callback}) => {
    const navig = useNavigate();

    const transitProduct = (id: number) => navig(`/product/${id}`);

    const backShadowBlock = () => {
        const input = document.querySelector('.header_search_contant_input-input') as HTMLInputElement;
        const blockShadow = document.querySelector('.block_shadow') as HTMLDivElement;

        if (window.innerWidth <= 1100 && callback) callback();

        input.value = '';
        input.style.borderRadius = '15px';

        input.classList.remove('focus');

        blockShadow.classList.remove('active');

        MListLi([]);
    };
    
    return (
        <>
            <ul className='list_seatch_product'>
                {listLi.map(item => 
                    <li className='li_product_search' key={item.id}>
                        <div className='container_card_product_search' onClick={() => {backShadowBlock(); transitProduct(item.id)}}>
                            <div>
                                <img src={item.img} alt="#" className='img_search' />
                            </div>

                            <div className='contant_info_product_search'>
                                <h5 className='title_search_product'>{item.name}</h5>

                                <div className='contant_price_search'>
                                    <PriceProduct product={item}/>
                                </div>

                                <div className='contant_tags_search'>
                                    <TagsProduct tags={item.tags}/>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <div className='block_shadow' onClick={backShadowBlock}></div>
        </>
    );
};
 
export default InputListSearch;