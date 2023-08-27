import PromoPage from '../components/helperAdvantag';

import '../style/advantag.css'

const AdvantagPage = () => {
    return (
        <>
            <section className="container_promo_advantag">
                <PromoPage variant={'advantages'}/>                
            </section>

            <section className="container_FAQ"></section>
        </>
    );
}
 
export default AdvantagPage;