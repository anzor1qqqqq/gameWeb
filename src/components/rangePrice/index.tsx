import * as React from 'react';

import { dataFetch, minMaxPrice } from '../../utilities/auxFunc';

import { FC } from 'react';
import { IMinMax, TLocalStorage, IPriceRange } from '../../types/types';

import '../../style/rangePrice.css'

const PriceRange: FC<IPriceRange> = ({callback}): JSX.Element => {
    const [ObjMinMax, setObjMinMax] = React.useState<IMinMax>();
    
    React.useEffect(() => {
        const data = async () => {
            const obj = minMaxPrice(await dataFetch('all') as TLocalStorage[]);

            setObjMinMax(obj);
        };

        data();
    }, []);

    
    if (ObjMinMax)  {
        return (
            <div className='container_range_price'>
                <div className="slider-track"></div>
                <input className='input_range_price' type="range" id="slider-1"  min={ObjMinMax.min} max={ObjMinMax.max} onChange={() => callback('one')}/>
                <input className='input_range_price' type="range" id="slider-2"  min={ObjMinMax.min} max={ObjMinMax.max} onChange={() => callback('two')}/>
            </div>
        );
    } else {
        return (
            <></>
        )
    }
};
 
export default PriceRange; 