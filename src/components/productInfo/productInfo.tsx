import * as React from 'react';
import ProductBtnActive from './productActiveBtn';
import { ILoader } from "../../types/types";

const ProductInfo: React.FunctionComponent<ILoader> = ({loader}) => {
    return (
        <>
            <ProductBtnActive 
                nameProduct={loader.name} 
                id={loader.id} 
                price={loader.price} 
                sale={loader.sale}
                img={loader.img}
                tags={loader.tags}
                ganre={loader.ganre}
                gallery={loader.gallery}
            />
        </>
    );
};
 
export default ProductInfo;