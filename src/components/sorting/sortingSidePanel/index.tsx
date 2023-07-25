import * as React from 'react';

import PriceRange from '../../../components/sorting/rangePrice';

import SvgArrowSort from '../../../svg/SVGSort/arrowBtn';

const SortingPanelSideBar = React.memo((): JSX.Element => {
    const swipeBtnOnOff = (target: HTMLDivElement) => {
        if (target.classList.contains('active')) target.classList.remove('active'); else target.classList.add('active');
    };

    const changeCheckbox = (elem: 'platform' | 'activison', target: HTMLInputElement) => {
        if (elem === 'activison') {
            const activisCheckbox = document.querySelectorAll('[name="sortin_activison"]') as NodeListOf<HTMLInputElement>;

            if (target.checked) {
                activisCheckbox.forEach((item) => {
                    item.checked = false;
                });
    
                target.checked = true;
            } else target.checked = false;
        } else {
            const platformCheckbox = document.querySelectorAll('[name="sorting_platform"]') as NodeListOf<HTMLInputElement>;

            if (target.checked) {
                platformCheckbox.forEach((item) => {
                    item.checked = false;
                });
    
                target.checked = true;
            } else target.checked = false;
        }
    };

    return (
        <div className='contant_all_sort'>
            <form id="form1" name="form" action="#">
                <div className='contant_sort_price'>
                    <div className='contant_input_sort'>
                        <h4 className='contant_input_sort_title'>Цена ₽</h4>
                        
                        <div className='contant_input_price'>
                            <input className='input_price_left' type="text" value={0} disabled/>
                            <input className='input_price_right' type="text" value={0}  disabled/>
                        </div>

                        <PriceRange/>
                    </div>
                </div>

                <div className='contant_activion_type'>
                    <details className='contant_activion_type_list_checkbox'>
                        <summary>
                            <div>
                                <p>Тип активации</p>
                                <SvgArrowSort/>
                            </div>
                        </summary>

                        <div className='container_checkbox_sort'>
                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sortin_activison' id='key' onChange={e => changeCheckbox('activison', e.target)}/>
                                <label htmlFor="key">Аккаунт</label>
                            </div>

                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sortin_activison' id='bust' onChange={e => changeCheckbox('activison', e.target)}/>
                                <label htmlFor="bust">Буст</label>
                            </div>

                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sortin_activison' id='account' onChange={e => changeCheckbox('activison', e.target)}/>
                                <label htmlFor="account">Аккаунт</label>
                            </div>
                        </div>
                        
                    </details>
                </div>

                <div className='contant_activion_type'>
                    <details className='contant_activion_type_list_checkbox'>
                        <summary>
                            <div>
                                <p>Платформа</p>
                                <SvgArrowSort/>
                            </div>
                        </summary>

                        <div className='container_checkbox_sort'>
                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sorting_platform' id='steam' onChange={e => changeCheckbox('platform', e.target)}/>
                                <label htmlFor="steam">Steam</label>
                            </div>

                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sorting_platform' id='origin' onChange={e => changeCheckbox('platform', e.target)}/>
                                <label htmlFor="origin">Origin</label>
                            </div>

                            <div className='contant_activion_type_list_checkbox-block'>
                                <input type="checkbox" name='sorting_platform' id='microsoft' onChange={e => changeCheckbox('platform', e.target)}/>
                                <label htmlFor="microsoft">Microsoft store</label>
                            </div>
                        </div>
                        
                    </details>
                </div>
                
                <div className='container_list_checbox_onOff'>
                    <div className="contant_checkbox_onOf">
                        <span className='contant_checkbox_onOf-title'>Только скидки</span>

                        <div className='contant_checkbox_onOf-label' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                    </div>

                    <div className="contant_checkbox_onOf">
                        <span className='contant_checkbox_onOf-title'>Новинки</span>

                        <div className='contant_checkbox_onOf-label' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                    </div>

                    <div className="contant_checkbox_onOf">
                        <span className='contant_checkbox_onOf-title'>Хит продаж</span>

                        <div className='contant_checkbox_onOf-label' onClick={e => swipeBtnOnOff(e.target as HTMLDivElement)}></div>
                    </div>
                </div>

                <button className='search_sort_btn'>Применить</button>
                <button className='reset_sort_btn'>Сбросить фильтры</button>

            </form>
        </div>
    );
});
 
export default SortingPanelSideBar;