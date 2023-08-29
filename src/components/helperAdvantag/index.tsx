import AdvantagSVG from "../../svg/advantag/advantag";
import HelperSVG from "../../svg/helperr/helper";

const PromoPage = ({variant}: {variant: 'helper' | 'advantages'}) => {

    return (
        <>
            <div className="contant_promo">
                    <div className="contant_promo-block">
                        {variant === 'advantages'
                        ? 
                        <>
                            <span className="title_help">Наши преимущества</span>
                            <AdvantagSVG/> 
                        </>
                        : 
                        <>
                            <span className="title_help">Контакты и поддержка</span>
                            <HelperSVG/>
                        </>
                        } 
                        
                    </div>
                    
                    <div className="block_shadow_promo"></div>
            </div>
        </>
    );
}
 
export default PromoPage;