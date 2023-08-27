import { IntlNum } from "../utilities/Intl";

import { TLocalStorage } from "../types/types";

const PriceProduct = ({product}: {product: TLocalStorage}) => {
    const intl = new IntlNum(product.price, product?.sale);

    return (
        <>
            {product.sale 
                ? 
                <>
                    <span id="price_sale">{intl.getPriceSale()}</span>
                    <span id="sale">{intl.getProcent()}</span>
                    <span className="oldPrice" id="old_price"><s>{intl.getPrice()}</s></span>
                </>
                : <span id="price_sale">{intl.getPrice()}</span>
            }
        </>
    );
}
 
export default PriceProduct;