import * as React from 'react';
import { useSelector } from 'react-redux';
import BasketCard from '../../cards/basket/basketCard';
import { FC } from 'react';
import { IPropsBasketList, IBasketRender, IStateStore } from '../../../types/types';

const BasketList: FC<IPropsBasketList> = ({loader}): JSX.Element => {
    const [basketRender, setBasketRender] = React.useState<IBasketRender[]>([]);

    const stateValue = useSelector((state: IStateStore) => state);

    React.useEffect(() => {
        let obj: IBasketRender[] = [];

        stateValue.basket.forEach(item => {
            loader.find(elem => {
                if (elem.id == item.id) obj.push({...elem, counter: item.counter});
            });
        });

        localStorage.setItem('basket', JSON.stringify(obj));
        
        setBasketRender(obj);
    }, [stateValue.basket]);

    if (basketRender.length === 0) {
        return (
            <div style={{height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <p>Пусто</p>
            </div>
        );
    };

    return (
        <div style={{marginTop: 20}}>
            <hr style={{border: '1px solid #13101B', marginBottom: 30}}/>
            
            {basketRender.map(item => 
                <BasketCard 
                key={item.id} 
                id={item.id}
                nameProduct={item.name} 
                price={item.price}
                sale={item.sale}
                img={item.img}
                tags={item.tags[0]}
                counter={item?.counter}
                checkBtnLike={stateValue.favority.includes(item.id)}
            />
            )} 
        </div>
    );
}
 
export default BasketList;