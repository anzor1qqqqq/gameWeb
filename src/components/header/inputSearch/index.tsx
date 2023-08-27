import * as React from 'react';

import InputListSearch from '../../cardList/inputListSearch';

import { FC } from 'react'
import { dataFetch, throtling } from '../../../utilities/auxFunc';

import { ILoaderData, TypePropsInput } from '../../../types/types';

const InputSearch: FC<TypePropsInput> = ({callback}): JSX.Element => {
    const [dataB, setDataB] = React.useState<ILoaderData[]>([]);
    const [listLi, setListLi] = React.useState<ILoaderData[]>([])

    const refInput = React.useRef<HTMLInputElement>(null);

    React.useMemo(() => {
        const getData = async() => {
            const data = await dataFetch('all') as ILoaderData[];

            setDataB(data);
        };

        getData();
    }, []);

    const searchProduct = () => {
        const input = document.querySelector('.header_search_contant_input-input') as HTMLInputElement;

        if (refInput.current?.value !== '') {
                const filterSearchData = dataB.filter(item => {
                return item.name.toLowerCase().includes((refInput.current?.value as string).toLowerCase());
            });

            filterSearchData.length === 0 ? input.style.borderRadius = '15px' : input.style.borderRadius = '15px 15px 0 0';

            setListLi(filterSearchData);
        } else {
            setListLi([]);

            input.style.borderRadius = '15px';
        };
    };

    const focusInput = () => {
        const input = document.querySelector('.header_search_contant_input-input') as HTMLInputElement;
        const blockShadow = document.querySelector('.block_shadow') as HTMLDivElement;

        input.classList.add('focus');
        blockShadow.classList.add('active');

        searchProduct();
    };

    return (
        <>
            <input className='header_search_contant_input-input' type="text" placeholder='Поиск' 
            onFocus={focusInput} 
            onChange={throtling(searchProduct)}
            ref={refInput}
            />

            <div className='header_search_contant_input_img'>
                <svg className='icon_svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9992 11.6472C21.9992 16.9753 17.6804 21.2943 12.3532 21.2943C7.026 21.2943 2.70714 16.9753 2.70714 11.6472C2.70714 6.319 7.026 2 12.3532 2C17.6804 2 21.9992 6.319 21.9992 11.6472ZM23.9992 11.6472C23.9992 18.0797 18.7851 23.2943 12.3532 23.2943C9.49714 23.2943 6.88123 22.2661 4.85532 20.5597L1.41428 24.0011L0 22.5869L3.4412 19.1454C1.7351 17.1193 0.707141 14.5033 0.707141 11.6472C0.707141 5.21461 5.92125 0 12.3532 0C18.7851 0 23.9992 5.21461 23.9992 11.6472Z" fill="white" fillOpacity="0.2"/>
                </svg>
            </div>

            <InputListSearch listLi={listLi} MListLi={setListLi} callback={callback}/>
        </>
    );
}
 
export default InputSearch;