import * as React from 'react';

import { useLoaderData } from "react-router-dom";

import ListAllProduct from "../components/cardList/listAllProduct";
import SortingPanelSideBar from '../components/sorting/sortingSidePanel';

import { getSalePrice } from '../utilities/auxFunc';

import { ILoaderData } from "../types/types";

import '../style/panelSorting.css'

const SortingPage = () => {
    const [dataSorting, setDataSorting] = React.useState<ILoaderData[]>([]);

    const loader = useLoaderData() as ILoaderData[];

    React.useMemo(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });

        changeSelect('minus');
    }, []);

    function changeSelect(method: string) {
        if (method === 'plus' || method === 'minus') {
            const sortArr: ILoaderData[] = loader.sort((currentElem: ILoaderData, nextElem: ILoaderData): number => {
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
            const sortArr: ILoaderData[] = loader.sort((currentElem: ILoaderData, nextElem: ILoaderData): number => {

                return currentElem.name.localeCompare(nextElem.name)
            });

            setDataSorting([...sortArr]);
        };
    };

    return (
        <section>
            <h1 className='main_title_sort'>Каталог товаров</h1>

            <div className="container_sort_product">
                <SortingPanelSideBar/>

                <div className='container_list_product_sorting'>
                    <div className='container_list_product_sorting-sorting'>
                        <select id="sort_price" onChange={e => changeSelect(e.target.value)}>
                            <option className='option_sorting' value="minus">Сначала дешевые</option>
                            <option className='option_sorting' value="plus">Сначала дорогие</option>
                            <option className='option_sorting' value="word">По алфавиту</option>
                        </select>
                    </div>

                    <ListAllProduct dataB={dataSorting} sort={true}/>
                </div>
            </div>
        </section>
    );
};
 
export default SortingPage;