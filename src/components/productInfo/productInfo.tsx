import * as React from 'react';

import ProductBtnActive from './productActiveBtn';

import { ILoader } from "../../types/types";

const ProductInfo: React.FunctionComponent<ILoader> = ({loader}) => {

    return (
        <>
            <ProductBtnActive 
                product={loader}
            />
        </>
    );
};
 
export default ProductInfo;