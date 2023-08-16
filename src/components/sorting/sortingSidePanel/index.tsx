import * as React from 'react';

import PriceRange from '../../../components/sorting/rangePrice';

import { dataFetch, minMaxPrice } from '../../../utilities/auxFunc';

import { FC } from 'react';
import { IMinMax, TLocalStorage, ISortingPanel } from '../../../types/types';

import SvgArrowSort from '../../../svg/SVGSort/arrowBtn';
import BtnClose from '../../../svg/btnClose';

const SortingPanelSideBar: FC<ISortingPanel> = React.memo(({callback, callbackReset, callbackSwitchWindowSort}): JSX.Element => {
    const [ObjMinMax, setObjMinMax] = React.useState<IMinMax>();

    const refForm = React.useRef<HTMLFormElement>(null);

    React.useMemo(() => {
        const data = async () => {
            const obj = minMaxPrice(await dataFetch('all') as TLocalStorage[]);

            setObjMinMax(obj);
        };

        data();
    }, []);

    const swipeBtnOnOff = (target: HTMLDivElement) => {
        const elemBtnOnOff = document.querySelectorAll('.contant_checkbox_onOf-label') as NodeListOf<HTMLDivElement>;

        if (target.classList.contains('active')) {
            target.classList.remove('active')
        } else {
            elemBtnOnOff.forEach(item => item.classList.remove('active'));

            target.classList.add('active');
        };
    };

    const changeCheckbox = (target: HTMLInputElement) => {
        target.checked 
        ? target.checked = true
        : target.checked = false;
    };

    if (ObjMinMax) {
        return (
            <div className='contant_all_sort'>
                <form name="form" ref={refForm}>
                    <div className='contant_sort_price'>
                        <div className='contant_input_sort'>
                            <h4 className='contant_input_sort_title'>Цена ₽</h4>
                            
                            <div className='contant_input_price'>
                                <input className='input_price_left' type="text" name='min' id='min' value={ObjMinMax.min} disabled/>
                                <input className='input_price_right' type="text" name='max' id='max' value={ObjMinMax.max} disabled/>
                            </div>
    
                            <PriceRange minValue={ObjMinMax.min} maxValue={ObjMinMax.max}/>
                        </div>
                    </div>
    
                    <div className='contant_activion_type'>
                        <details className='contant_activion_type_list_checkbox' open>
                            <summary>
                                <div>
                                    <p>Тип активации</p>
                                    <SvgArrowSort/>
                                </div>
                            </summary>
    
                            <div className='container_checkbox_sort'>
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='key' id='key' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="key">Ключ</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='bust' id='bust' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="bust">Буст</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='account' id='account' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="account">Аккаунт</label>
                                </div>
                            </div>
                            
                        </details>
                    </div>
    
                    <div className='contant_activion_type'>
                        <details className='contant_activion_type_list_checkbox' open>
                            <summary>
                                <div>
                                    <p>Платформа</p>
                                    <SvgArrowSort/>
                                </div>
                            </summary>
    
                            <div className='container_checkbox_sort'>
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='steam' id='steam' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="steam">Steam</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='origin' id='origin' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="origin">Origin</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='microsoft_store' id='microsoft_store' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="microsoft_store">Microsoft store</label>
                                </div>
                            </div>
                            
                        </details>
                    </div>
    
                    <div className='contant_activion_type'>
                        <details className='contant_activion_type_list_checkbox' open>
                            <summary>
                                <div>
                                    <p>Жанр</p>
                                    <SvgArrowSort/>
                                </div>
                            </summary>
    
                            <div className='container_checkbox_sort'>
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='sandbox' id='sandbox' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="sandbox">Песочница</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='indie' id='indie' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="indie">Инди</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='aventure' id='adventure' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="adventure">Приключенческая игра</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='platformer' id='platformer' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="platformer">Платформер</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='puzzle' id='puzzle' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="puzzle">Головоломка</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='races' id='races' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="races">Гонки</label>
                                </div>
    
                                <div className='contant_activion_type_list_checkbox-block'>
                                    <input type="checkbox" name='action' id='action' onChange={e => changeCheckbox(e.target)}/>
                                    <label htmlFor="action">Экшн</label>
                                </div>
                            </div>
                            
                        </details>
                    </div>
                    
                    <div className='container_list_checbox_onOff'>
                        <div className="contant_checkbox_onOf" >
                            <span className='contant_checkbox_onOf-title' >Только скидки</span>
    
                            <div className='contant_checkbox_onOf-label' id='sale_checkbox' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                        </div>
    
                        <div className="contant_checkbox_onOf" >
                            <span className='contant_checkbox_onOf-title' >Новинки</span>
    
                            <div className='contant_checkbox_onOf-label' id='new_checkbox' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                        </div>
    
                        <div className="contant_checkbox_onOf" >
                            <span className='contant_checkbox_onOf-title' >Хит продаж</span>
    
                            <div className='contant_checkbox_onOf-label' id='hit_checkbox' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                        </div>
                    </div>
    
                    <button className='search_sort_btn' type='submit' onClick={e => {e.preventDefault(); callback(refForm.current)}}>Применить</button>
                    <button className='reset_sort_btn' onClick={e => {e.preventDefault(); callbackReset(ObjMinMax)}}>Сбросить фильтры</button>

                    {window.innerWidth <= 700 && <button className='btn_close_sort' onClick={e => {e.preventDefault(); callbackSwitchWindowSort()}}><BtnClose/></button>}
                </form>
            </div>
        );
    } else {
        return (
            <div className='contant_all_sort'></div>
        );
    }

    
});
 
export default SortingPanelSideBar;