import PromoPage from '../components/helperAdvantag';
import AdvantagCArd from '../components/helperAdvantag/advantagCard';

import FeedBackSvg from '../svg/advantag/iconCard/feedback';
import SafetySVG from '../svg/advantag/iconCard/safety';
import DeliverySVG from '../svg/advantag/iconCard/delivery';
import SupportSVG from '../svg/advantag/iconCard/support';
import SecurityPay from '../svg/advantag/iconCard/securityPay';
import SaleSVG from '../svg/advantag/iconCard/sale';
import RefundSVG from '../svg/advantag/iconCard/refund';
import SerificateSVG from '../svg/advantag/iconCard/secrificate';

import '../style/advantag.css'

const AdvantagPage = () => {
    return (
        <>
            {window.innerWidth >= 1000 
            ? 
                <section className="container_promo_advantag">
                    <PromoPage variant={'advantages'}/>
                </section>
            : <h1 className="title_help">Наши преимущества</h1>
            }

            <section className="container_advantag_info">
                <div className='contant_advantag_card'>
                    <AdvantagCArd title='Реальные отзывы' text='На сайте можно найти множество отзывов от реальных пользователей, которые делятся своими впечатлениями о продуктах или услугах. Эти отзывы могут быть очень полезными для тех, кто собирается приобрести товар или воспользоваться услугой.'>
                        <FeedBackSvg/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Безопасность продукта' text='Наша продукция проходит множество проверок и тестирований, чтобы убедиться в ее безопасности и соответствии всем необходимым требованиям. Мы также постоянно обновляем нашу продукцию, чтобы быть в курсе последних тенденций и требований рынка.'>
                        <SafetySVG/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Быстрая доставка' text='Мы стремимся обеспечить быструю и надежную доставку, чтобы вы могли получить свои товары как можно скорее.'>
                        <DeliverySVG/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Техническая поддержка' text='Наша техподдержка работает круглосуточно и готова ответить на все ваши вопросы.'>
                        <SupportSVG/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Безопасные платежи' text='Безопасность платежей является основной составляющих нашего интернет-магазина. Мы гарантируем безопасность всех ваших платежей и защиту ваших личных данных.'>
                        <SecurityPay/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Низкие цены' text='Мы предлагаем вам широкий ассортимент продукции по низким ценам. Наша компания является надежным поставщиком качественной продукции. Мы работаем только с проверенными производителями и гарантируем высокое качество всех товаров.'>
                        <SaleSVG/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Гарантия возврата денег' text='Мы понимаем, что иногда возникают ситуации, когда товар не подходит или не устраивает покупателя. Поэтому мы предоставляем гарантию возврата денег в течение 30 дней с момента покупки.'>
                        <RefundSVG/>
                    </AdvantagCArd>

                    <AdvantagCArd title='Сертификаты гарантии' text='Наша компания предоставляет сертификаты гарантии на все товары, которые мы продаем. Эти сертификаты подтверждают, что наши товары соответствуют высоким стандартам качества и безопасности.'>
                        <SerificateSVG/>
                    </AdvantagCArd>
                </div>
            </section>
        </>
    );
}
 
export default AdvantagPage;