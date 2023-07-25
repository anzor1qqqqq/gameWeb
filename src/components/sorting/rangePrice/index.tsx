import * as React from 'react';

import { dataFetch, minMaxPrice } from '../../../utilities/auxFunc';

import { IMinMax, TLocalStorage } from '../../../types/types';

import '../../../style/rangePrice.css'

const PriceRange = (): JSX.Element => {
    const [ObjMinMax, setObjMinMax] = React.useState<IMinMax>();
    
    React.useEffect(() => {
        const data = async () => {
            const obj = minMaxPrice(await dataFetch('all') as TLocalStorage[]);

            setObjMinMax(obj);
        };

        data();
    }, []);

    function sortPriceRange(method: 'one' | 'two') {
        const sliderOne = document.getElementById("slider-1") as HTMLInputElement;
        const sliderTwo = document.getElementById("slider-2") as HTMLInputElement;

        const inputLeft = document.querySelector('.input_price_left') as HTMLInputElement
        const inputRight = document.querySelector('.input_price_right') as HTMLInputElement

        const sliderTrack = document.querySelector(".slider-track") as HTMLDivElement;

        const miniGap = 200;

        method === 'one' ? slideOne() : method === 'two' ? slideTwo() : '';
        function slideOne() {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= miniGap) {
                sliderOne.value = String(parseInt(sliderTwo.value) - miniGap);
            };

            inputLeft.value = sliderOne.value;

            fillColor();
        };

        function slideTwo(){
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= miniGap){
                sliderTwo.value = String(parseInt(sliderOne.value) + miniGap);
            };

            inputRight.value = sliderTwo.value;

            fillColor();
        };

        function fillColor(){
            let percent1 = (+sliderOne.value / +sliderOne.max) * 100;
            let percent2 = (+sliderTwo.value / +sliderOne.max) * 100;

            sliderTrack.style.background = `linear-gradient(to right, #1E1C27 ${percent1}% , #FFFFFF ${percent1}% , #FFFFFF ${percent2}%, #1E1C27 ${percent2}%)`;
        };
    };
    
    if (ObjMinMax)  {
        return (
            <div className='container_range_price'>
                <div className="slider-track"></div>
                <input className='input_range_price' type="range" id="slider-1"  min={ObjMinMax.min} max={ObjMinMax.max} onChange={() => sortPriceRange('one')}/>
                <input className='input_range_price' type="range" id="slider-2"  min={ObjMinMax.min} max={ObjMinMax.max} onChange={() => sortPriceRange('two')}/>
            </div>
        );
    } else {
        return (
            <></>
        );
    };
};
 
export default PriceRange; 