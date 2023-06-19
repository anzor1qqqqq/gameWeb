import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductBasket } from '../global/redux';
import { useLoaderData } from 'react-router-dom';
import { IStateStore, ILoaderData } from '../types/types';
import styles from '../less/basket/basket.module.less'

const BasketPage = (): JSX.Element => {
    const [basketRender, setBasketRender] = React.useState<ILoaderData[]>([]);

    const stateValue = useSelector((state: IStateStore) => state);
    const dispatch = useDispatch();

    const loader = useLoaderData() as ILoaderData[];

    React.useEffect(() => {
        let obj: ILoaderData[] = [];

        stateValue.basket.forEach(item => {
            loader.find(elem => {
                if (elem.id == item.id) obj.push({...elem, counter: item.counter});
            });
        });

        localStorage.setItem('basket', JSON.stringify(obj));
        
        setBasketRender(obj);
    }, [stateValue.basket]);

    const deleteProduct = (id: number) => dispatch(removeProductBasket(id));
    
    if (basketRender.length === 0) {
        return (
            <section>
                <h1>Корзина</h1>
                <p>Пусто</p>
            </section>
        );
    };

    return (
        <section>
            <h1>Корзина</h1>

            {basketRender.map(item => 
                <div className={styles.contantBasket} key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.counter}</p>

                    <button onClick={() => deleteProduct(item.id)}>Delete</button>
                </div>
            )}
        </section>
    );
};
 
export default BasketPage;