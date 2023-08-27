import { Link } from "react-router-dom";

import Fancybox from "../fancy";

import { FC } from "react";
import { IPropsFancy } from "../../types/types";

import '../../style/imgFancy.css'

const ProductFancyBox: FC<IPropsFancy> = ({gallery}): JSX.Element => {
    return (
        <Fancybox options={{
            Carousel: {
            infinite: true,
            },
        }}>
            {gallery.map((item, i) =>  
                <div key={i} className="container_img_fancy">
                    <Link to={item} data-fancybox="gallery">
                        <div className="contant_img_fancy">
                            <img src={item} className="contant_img_fancy-img" />
                        </div>
                    </Link>
                </div>
            )}
        </Fancybox> 
    );
}
 
export default ProductFancyBox;