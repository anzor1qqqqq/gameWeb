import FavorityCard from "../components/cards/favority/favority";
import { useSelector } from "react-redux";
import { IStateStore } from "../types/types";
import styles from '../less/basket/basket.module.less'

const FavorityPage = (): JSX.Element => {
    const stateValue = useSelector((state: IStateStore) => state);

    if (!stateValue.favority.length) {
        return (
            <>
                <h1 className={styles.titleFavority}>Favority</h1>

                <h2 style={{height: 500, display: "flex", justifyContent: "center", alignItems: "center"}}>Пусто</h2>
            </>
        ) 
    }

    return (
        <>
            <h1 className={styles.titleFavority}>Favority</h1>

            <section>
                <hr className={styles.hr + ' ' + styles.hrFavority}/>

                {stateValue.favority.map(item => 
                    <FavorityCard 
                    key={item.id}
                    id={item.id}
                    nameProduct={item.name}
                    price={item.price}
                    sale={item.sale}
                    img={item.img}
                    tags={item.tags[0]}
                    />
                )}
            </section>
        </>
    );
};
 
export default FavorityPage;