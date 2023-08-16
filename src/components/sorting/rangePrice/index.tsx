import * as React from 'react';

import '../../../style/rangePrice.css'

import { FC } from 'react';
import { IMinMax, IPriceRange } from '../../../types/types';

const PriceRange: FC<IPriceRange> = ({minValue, maxValue}): JSX.Element => {
    const [valueInput, setValueInput] = React.useState<IMinMax>({
        min: minValue,
        max: maxValue,
    });

    const sortPriceRange = (method: 'one' | 'two') => {
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
            } else if (+sliderTwo.value === maxValue) {
                setValueInput({min: +sliderOne.value, max: maxValue});    
            } else {
                setValueInput({...valueInput, min: +sliderOne.value});
            };

            inputLeft.value = sliderOne.value;

            fillColor();
        };

        function slideTwo() {
            if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= miniGap){
                sliderTwo.value = String(parseInt(sliderOne.value) + miniGap);
            } else if (+sliderOne.value === minValue) {
                setValueInput({min: minValue, max: +sliderTwo.value});    
            } else {
                setValueInput({...valueInput, max: +sliderTwo.value});
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
    
    return (
        <div className='container_range_price'>
            <div className="slider-track"></div>

            <input className='input_range_price' type="range" name='min_price' id="slider-1" min={minValue} max={maxValue} value={valueInput.min} onChange={() => sortPriceRange('one')}/>
            <input className='input_range_price' type="range" name='max_price' id="slider-2" min={minValue} max={maxValue} value={valueInput.max} onChange={() => sortPriceRange('two')}/>
        </div>
    );
};
 
export default PriceRange; 