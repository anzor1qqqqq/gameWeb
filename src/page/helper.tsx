import PromoPage from "../components/helperAdvantag";
import DetailSummary from "../components/helperAdvantag/detailSummary";
import CopySVG from "../svg/helperr/copySVG";

import '../style/header.css'

const HelperPage = () => {
    const copyText = (text: string, clName: string) => {
        const contantCopyInfo = document.querySelector(`.contant_copy_info.${clName}`) as HTMLElement;

        window.navigator.clipboard.writeText(text);
        contantCopyInfo.classList.add('animate');
    };

    const animateEnd = (clName: string) => {
        const contantCopyInfo = document.querySelector(`.contant_copy_info.${clName}`) as HTMLElement;

        contantCopyInfo.classList.remove('animate')
    };

    return (
        <>
            <section className="container_promo_advantag">
                {window.innerWidth <= 1000 
                ? <h1 className="title_help">Контакты и поддержка</h1>
                : <PromoPage variant={'helper'}/> 
                }
            </section>

            <section className="container_FAQ">
                <div className="contant_support_email">
                    <div className="block_support_info">
                        <div className="support_about">
                            <span className="title_support">Техническая поддержка</span>
                            <span className="email_support">Support.Gmail.com</span>
                        </div>

                        <button className="btn_support_copy" title="Копировать" onClick={() => copyText('Support.Gmail.com', 'left')}><CopySVG/></button>

                        <div className="contant_copy_info left" onAnimationEnd={() => animateEnd('left')}>
                            <span>Скопировано</span>
                            <div className="traingle_copy"></div>
                        </div>
                    </div>

                    <div className="block_support_info">
                        <div className="support_about">
                            <span className="title_support">Помощь в выводе средств</span>
                            <span className="email_support">SupportHelpPay.Gmail.com</span>
                        </div>

                        <button className="btn_support_copy" title="Копировать" onClick={() => copyText('SupportHelpPay.Gmail.com', 'right')}><CopySVG/></button>

                        <div className="contant_copy_info right" onAnimationEnd={() => animateEnd('right')}>
                            <span>Скопировано</span>
                            <div className="traingle_copy"></div>
                        </div>
                    </div>
                </div>

                <div className="contant_FAQ">
                    <h1 className="contant_FAQ_title">FAQ</h1>
                    
                    <div className="contant_FAQ_details">
                        <DetailSummary 
                        title='ЧТО ВЫ ПРОДАЕТЕ, И КАК Я ПОЛУЧУ КУПЛЕННУЮ ИГРУ?' 
                        description='Сразу отметим, что мы не продаем аккаунты других людей или физические товары. Мы магазин цифровых ключей PC-игр, но также у нас в продаже можно найти карточки пополнения и продления различных подписок — как для консолей (PlayStation и Xbox), так и для онлайн-кинотеатров (Okko, START и других). Покупая ключ, вы получаете его в ваш личный кабинет на сайте в течение 5 минут (мы не отправляем цифровые ключи на почту). После этого вам нужно активировать его по инструкции, которая есть на странице каждого товара. Если это ключ на игру, то сама она устанавливается на ваш компьютер из библиотеки игровой платформы (Steam, EA App, Ubisoft Connect и тому подобным).'
                        />

                        <DetailSummary
                        title={'ПРИ ПОКУПКЕ В ВАШЕМ МАГАЗИНЕ Я ПОКУПАЮ ИГРУ ИЛИ ШАНС ЕЁ ПОЛУЧЕНИЯ? И ЕСТЬ ЛИ У ВАС РАНДОМ?'}
                        description='При покупке любого товара в нашем магазине вы получаете именно ту игру, дополнение или подписку, которую оплачиваете. Рандома у нас на сайте нет.'
                        />

                        <DetailSummary
                        title='ПОЧЕМУ У ВАС ТАКИЕ НИЗКИЕ ЦЕНЫ?'
                        description='Дело в том, что мы закупаем ключи на акциях у партнёров и в большом количестве, т. е. оптом — это также снижает стоимость. Помимо этого, мы берём себе лишь 5-10% комиссии с проданного ключа. Всё это позволяет делать цены такими низкими и радовать наших покупателей высокими скидками круглый год.'
                        />

                        <DetailSummary
                        title="СКОЛЬКО ДЛЯТСЯ СКИДКИ В ВАШЕМ МАГАЗИНЕ? КАК ЭТО УЗНАТЬ?"
                        description="Скидки в нашем магазине на многие товары длятся круглый год. Меняется лишь цена, которая зависит от стоимости закупки ключей и спроса покупателей. Мы держим цены минимальными так долго, как можем. Заранее предсказать повышение стоимости невозможно."
                        />

                        <DetailSummary
                        title="КАК МНЕ КУПИТЬ КЛЮЧ?"
                        description="Покупка товара возможна только после регистрации/авторизации на сайте. Ключ придёт только в ваш личный кабинет, поэтому этот этап необходим. После авторизации выберите интересующий вас товар и нажмите на кнопку «В корзину». Оплата совершается из корзины (иконка с тележкой в правом верхнем углу). Выберите удобный способ оплаты и следуйте дальнейшим инструкциям по оплате."
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
 
export default HelperPage;