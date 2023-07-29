import * as React from 'react';

import { useLoaderData } from "react-router-dom";

import ListAllProduct from "../components/cardList/listAllProduct";
import SortingPanelSideBar from '../components/sorting/sortingSidePanel';

import { getSalePrice, allParamSort } from '../utilities/auxFunc';

import { ILoaderData, ISetingSort, IMinMax } from "../types/types";

import '../style/panelSorting.css'

const SortingPage = () => {
    const loader = useLoaderData() as ILoaderData[];

    const [dataSorting, setDataSorting] = React.useState<ILoaderData[]>(loader);
    const [isPending, startTransition] = React.useTransition();

    React.useMemo(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        changeSelect('minus');
    }, []);

    function changeSelect(method: string, arr = dataSorting) {
        if (method === 'plus' || method === 'minus') {
            const sortArr: ILoaderData[] = arr.sort((currentElem: ILoaderData, nextElem: ILoaderData): number => {
                let currentPrice: number = currentElem.price;
                let nextPrice: number = nextElem.price;

                if (currentElem.sale !== 0) currentPrice = Math.floor(getSalePrice(currentElem.price, currentElem.sale));
                if (nextElem.sale !== 0) nextPrice = Math.floor(getSalePrice(nextElem.price, nextElem.sale));

                if (method === 'plus') {
                    return currentPrice-nextPrice;
                } else return nextPrice-currentPrice;
            });

            setDataSorting([...sortArr]);
        } else if (method === 'word') {
            const sortArr: ILoaderData[] = arr.sort((currentElem: ILoaderData, nextElem: ILoaderData): number => {

                return currentElem.name.localeCompare(nextElem.name)
            });

            setDataSorting([...sortArr.reverse()]);
        };
    };

    const acceptSort = React.useCallback((form: HTMLFormElement | null) => {
        startTransition(() => {
            const meanForm = new FormData(form as HTMLFormElement);

            const saleCheckbox = document.querySelector('#sale_checkbox') as HTMLSpanElement;
            const newCheckbox = document.querySelector('#new_checkbox') as HTMLSpanElement;
            const hitCheckbox = document.querySelector('#hit_checkbox') as HTMLSpanElement;

            const select = document.querySelector('#sort_price') as HTMLSelectElement;

            let objSettingSort: ISetingSort = {
                value: {},
                activate: [],
                platform: [],
                ganre: [],
                activeBtn: []
            };
            
            meanForm.forEach((val: FormDataEntryValue, key: string) => {
                if (key === 'min_price' || key === 'max_price') {
                    objSettingSort.value[key] = +val;
                } else if (key === 'key' || key === 'account' || key === 'bust') {
                    objSettingSort.activate.push(key);
                } else if (key === 'steam' || key === 'microsoft_store' || key === 'origin') {
                    objSettingSort.platform.push(key);
                } else if (key === 'aventure' || key === 'races' || key === 'action' || key === 'indie' || key === 'platformer' || key === 'puzzle' || key === 'sandbox') {
                    objSettingSort.ganre.push(key);
                };
            });

            if (saleCheckbox.classList.contains('active')) objSettingSort.activeBtn.push('sale');
            if (newCheckbox.classList.contains('active')) objSettingSort.activeBtn.push('new');
            if (hitCheckbox.classList.contains('active')) objSettingSort.activeBtn.push('hit');

            const resulSorting = allParamSort(loader, objSettingSort);

            changeSelect(select.value, resulSorting);
        })
    }, []);

    const resetSort = React.useCallback((minMaxObj: IMinMax) => {
        startTransition(() => {
            const inputRangeMin = document.querySelector('#slider-1') as HTMLInputElement;
            const inputRangeMax = document.querySelector('#slider-2') as HTMLInputElement;
            const sliderTrack = document.querySelector('.slider-track') as HTMLDivElement;

            const inputValueMin = document.querySelector('.input_price_left') as HTMLInputElement;
            const inputValueMax = document.querySelector('.input_price_right') as HTMLInputElement;

            const checkboxSetting = document.querySelectorAll('[type="checkbox"]:checked') as NodeListOf<HTMLInputElement>;
            const BtnOfOn = document.querySelector('.contant_checkbox_onOf-label.active') as HTMLDivElement;

            const select = document.querySelector('select') as HTMLSelectElement
            
            inputValueMin.value = String(minMaxObj.min);
            inputValueMax.value = String(minMaxObj.max);

            inputRangeMin.value = inputValueMin.value;
            inputRangeMax.value = inputValueMax.value;

            sliderTrack.style.background = 'linear-gradient(to right, #1e1c27 1.36866%, #fff 1.36866%, #fff 100%, #1e1c27 100%)'

            checkboxSetting.forEach(item => item.checked = false);

            BtnOfOn ? BtnOfOn.classList.remove('active') : '';

            changeSelect(select.value, loader);
        })
    }, []);

    return (
        <section>
            <h1 className='main_title_sort'>Каталог товаров</h1>

            <div className="container_sort_product">
                <SortingPanelSideBar callback={acceptSort} callbackReset={resetSort} />

                <div className='container_list_product_sorting'>
                    <div className='container_list_product_sorting-sorting'>
                        <select id="sort_price" onChange={e => changeSelect(e.target.value)}>
                            <option className='option_sorting' value="minus">Сначала дешевые</option>
                            <option className='option_sorting' value="plus">Сначала дорогие</option>
                            <option className='option_sorting' value="word">По алфавиту</option>
                        </select>
                    </div>
                    
                    {dataSorting.length === 0 
                    ? <h2 className='title_empty'>Пусто</h2>
                    : <ListAllProduct dataB={dataSorting} sort={true} startWait={isPending}/>
                    }
                </div>
            </div>
        </section>
    );
};
 
export default SortingPage;