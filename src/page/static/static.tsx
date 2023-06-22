import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValute, changeLang } from '../../global/redux';
import { ScrollRestoration } from "react-router-dom";
import HeaderSearch from '../../components/header/headerSearch';
import NavLi from '../../UI/navLi';
import user from '../../img/user.png';
import masterCard from '../../img/footer/mastercard.png'
import mir from '../../img/footer/mir.png'
import payPal from '../../img/footer/paypal.png'
import visa from '../../img/footer/Visa.png'
import webMoney from '../../img/footer/webMoney.png'
import verified from '../../img/footer/Subtract.png'
import safeBrowsing from '../../img/footer/g.png'
import { Outlet } from 'react-router-dom';
import { IStateStore } from '../../types/types';
import styles from '../../less/footer.module.less'
import '../../style/header.css';

const Static = React.memo(() => {
    const stateValue = useSelector((state: IStateStore) => state);
    const dispatch = useDispatch();

    const refUl = React.useRef<HTMLDivElement | null>(null);
    const refbtn = React.useRef<HTMLButtonElement | null>(null);
    const refBurger = React.useRef<HTMLDivElement | null>(null);

    const showUl = React.useCallback(() => {
        if (refUl.current?.classList.contains('ul_valute')) {
            refUl.current.classList.add('active');
            refbtn.current?.classList.add('active')
        }
    }, []);

    const switchBurgerMenu = React.useCallback(() => {
        if (refBurger.current?.classList.contains('active')) {
            if (window.innerWidth <= 500) document.body.style.overflowY = '';

            refBurger.current.classList.remove('active')
        } else {
            if (window.innerWidth <= 500) document.body.style.overflowY = 'hidden';

            refBurger.current?.classList.add('active')
        };
    }, []);

    React.useEffect(() => {
        const elemValute = document.querySelectorAll('.btn_valute') as NodeListOf<HTMLElement>;
        const elemLang = document.querySelectorAll('.ul_valute_list_btn_lang') as NodeListOf<HTMLElement>;

        for (let i = 0; i < 3; i++) {
            if (i !== 2) elemLang[i].classList.remove('active');
            elemValute[i].classList.remove('active');
        };

        for (let i = 0; i < 3; i++) {
            if (i !== 2) {
                const text = (elemLang[i].textContent as string).split('').slice((elemLang[i].textContent as string).split('').indexOf('(')+1, -1).join('');

                if (text === stateValue.lang) {
                    elemLang[i].classList.add('active');
                    (document.querySelector('.lang') as HTMLElement).textContent = text;
                };
            };

            if (elemValute[i].textContent === stateValue.valute) {
                elemValute[i].classList.add('active');
                (document.querySelector('.valute') as HTMLElement).textContent = elemValute[i].textContent;
            };
        };
    }, [stateValue.valute, stateValue.lang]);

    return (
        <>
            <header className='header'>
                <div className='header_nav' ref={refBurger}>
                    <div className='close_burger' onClick={() => switchBurgerMenu()}>X</div>

                    <div className='header_nav_savings_account'>
                        <span className='header_nav_savings_account_lang lang'>RU</span>
                        <span className='header_nav_savings_account_lang'>/</span>
                        <span className='header_nav_savings_account_lang valute'>₽</span>
                        <button className='header_nav_savings_account_arrow_select' onClick={() => showUl()} ref={refbtn}>
                            <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 2.59454L1.2543 5L0 3.50432L4 0L8 3.50432L6.7457 5L4 2.59454Z" fill="#77BE1D"/>
                            </svg>
                        </button>
                       

                        <div className='ul_valute' ref={refUl}>
                            <ul className='ul_valute_list'>
                                <li style={{marginBottom: 5}}><button className='ul_valute_list_btn_lang' onClick={() => dispatch(changeLang('RU'))}>Русский(RU)</button></li>
                                <li><button className='ul_valute_list_btn_lang' onClick={() => dispatch(changeLang('EN'))}>English(EN)</button></li>
                                <hr style={{background: "rgb(73 64 92)"}} />
                                <div>
                                    <button className='btn_valute' onClick={() => dispatch(changeValute('$'))}>$</button>
                                    <button className='btn_valute' onClick={() => dispatch(changeValute('€'))}>€</button>
                                    <button className='btn_valute' onClick={() => dispatch(changeValute('₽'))}>₽</button>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div className='header_nav_bar'>
                        <nav>
                            <ul>
                                <NavLi text={'Отзывы'}/>
                                <NavLi text={'Гарантии'}/>
                                <NavLi text={'Как купить'}/>
                                <NavLi text={'Накопительная'}/>
                                <NavLi text={'Заработай'}/>
                            </ul>
                        </nav>
                    </div>

                    <div className='header_nav_user'>
                        <NavLi text={'Anzor'}/>
                        <img className='header_nav_user_img' src={user} alt="" />
                    </div>
                </div>

                <HeaderSearch callback={switchBurgerMenu}/>
            </header>

            <main style={{marginTop: 40}}>
                <ScrollRestoration
                     
                />
                <Outlet/>
            </main>

            <footer className={styles.footer}>
                <div>
                    <div className={styles.contantPay}>
                        <img className={styles.contantPayIcon} src={masterCard} alt="" />
                        <img className={styles.contantPayIcon} src={mir} alt="" />
                        <img className={styles.contantPayIcon} src={payPal} alt="" />
                        <img className={styles.contantPayIcon} src={visa} alt="" />
                        <img className={styles.contantPayIcon} src={webMoney} alt="" />
                    </div>

                    <div className={styles.contantAbout}>
                        <div className={styles.contantAboutCompany}>
                            <h3 className={styles.contantAboutCompanyTitle}>О компании</h3>

                            <nav>
                                <ul className={styles.contantAboutCompanyUl}>
                                    <li className={styles.contantAboutCompanyUlLi}>О нас</li>
                                    <li className={styles.contantAboutCompanyUlLi}>Вакансии</li>
                                    <li className={styles.contantAboutCompanyUlLi}>Реквизиты</li>
                                </ul>
                            </nav>
                        </div>

                        <div className={styles.contantAboutCompany}>
                            <h3 className={styles.contantAboutCompanyTitle}>Договор оферты</h3>

                            <nav>
                                <ul className={styles.contantAboutCompanyUl}>
                                    <li className={styles.contantAboutCompanyUlLi}>Каталог</li>
                                    <li className={styles.contantAboutCompanyUlLi}>Акции</li>
                                    <li className={styles.contantAboutCompanyUlLi}>Личный кабинет</li>
                                </ul>
                            </nav>
                        </div>

                        <div className={styles.contantAboutProtect}>
                            <div className={styles.contantAboutProtectBlock}>
                                <img className={styles.contantAboutProtectBlockImg} src={verified} alt="" />
    
                                <div className={styles.contantAboutProtectText}>
                                    <span className={styles.contantAboutProtectTextSpan}>verified</span>
                                    <span className={styles.contantAboutProtectTextSpanTwo}>WebMoney</span>
                                </div>
                            </div>

                            <div className={styles.contantAboutProtectBlock}>
                                <img className={styles.contantAboutProtectBlockImgSafe} src={safeBrowsing} alt="" />

                                <div className={styles.contantAboutProtectText}>
                                    <span className={styles.contantAboutProtectTextSpan}>Safe Browsing</span>
                                    <span className={styles.contantAboutProtectTextSpanTwo}>Google</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className={styles.footerParag}>Все продаваемые ключи закупаются у официальных дистрибьюторови издателей. В том числе у 1С-СофтКлаб, Бука, Новый Диск и Enaza</p>
                    <hr />

                    <div className={styles.footerDawnInfo}>
                        <a className={styles.footerDawnInfoA} href="#">Правовая информация</a>
                        <span className={styles.footerDawnInfoText}>Интернет-магазин игр «Playnchill» © 2022 </span>

                        <div>
                            <a className={styles.footerDawnInfoIcon} href=""><svg className={styles.iconSvgFooter} viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M21.7066 1.58016C21.8603 1.07475 21.7066 0.702637 20.9707 0.702637H18.5409C17.9225 0.702637 17.6374 1.02384 17.4828 1.37836C17.4828 1.37836 16.2471 4.33676 14.4967 6.25842C13.9302 6.81566 13.6728 6.99246 13.3637 6.99246C13.2091 6.99246 12.9768 6.81566 12.9768 6.30933V1.58016C12.9768 0.972928 12.8064 0.702637 12.2918 0.702637H8.47067C8.08467 0.702637 7.85233 0.984036 7.85233 1.25155C7.85233 1.82638 8.728 1.95968 8.81779 3.57772V7.09336C8.81779 7.86443 8.67616 8.0042 8.36699 8.0042C7.54316 8.0042 5.53912 5.03192 4.34965 1.63107C4.11916 0.969225 3.8859 0.702637 3.26478 0.702637H0.833089C0.138848 0.702637 0 1.02384 0 1.37836C0 2.00966 0.823833 5.14578 3.83684 9.29364C5.84551 12.1261 8.67338 13.6618 11.2495 13.6618C12.7944 13.6618 12.9851 13.3212 12.9851 12.7334V10.5923C12.9851 9.91012 13.1313 9.77405 13.621 9.77405C13.982 9.77405 14.5994 9.95178 16.0416 11.3171C17.6893 12.9361 17.9605 13.6618 18.888 13.6618H21.3178C22.0121 13.6618 22.3601 13.3212 22.1602 12.6473C21.9399 11.9771 21.1531 11.0042 20.1098 9.84996C19.5433 9.19274 18.6936 8.48461 18.4353 8.13009C18.0753 7.67559 18.178 7.47287 18.4353 7.06836C18.4353 7.06836 21.3974 2.97142 21.7057 1.58016H21.7066Z" fill="white" fillOpacity="0.15"/></svg></a>
                            <a className={styles.footerDawnInfoIcon} href=""><svg className={styles.iconSvgFooter} viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0458 2.00802C15.8147 1.43411 14.4818 1.01757 13.0933 0.776898C13.0811 0.776509 13.069 0.778793 13.0578 0.783591C13.0466 0.788389 13.0366 0.795584 13.0285 0.804668C12.8619 1.11013 12.6675 1.50817 12.5379 1.81363C11.0652 1.59147 9.56745 1.59147 8.09474 1.81363C7.96515 1.49891 7.77076 1.11013 7.59488 0.804668C7.58563 0.786155 7.55786 0.776898 7.53009 0.776898C6.1416 1.01757 4.81792 1.43411 3.57754 2.00802C3.56828 2.00802 3.55903 2.01728 3.54977 2.02653C1.03199 5.79395 0.33775 9.45954 0.680242 13.0881C0.680242 13.1066 0.689499 13.1251 0.708012 13.1344C2.37419 14.3563 3.97557 15.0968 5.55844 15.5874C5.58621 15.5966 5.61398 15.5874 5.62324 15.5689C5.9935 15.0597 6.32674 14.5229 6.61369 13.9582C6.6322 13.9212 6.61369 13.8842 6.57666 13.8749C6.04904 13.6713 5.54919 13.4306 5.05859 13.1529C5.02156 13.1344 5.02156 13.0788 5.04933 13.0511C5.15115 12.977 5.25298 12.8937 5.3548 12.8197C5.37331 12.8011 5.40108 12.8012 5.41959 12.8104C8.60385 14.2637 12.038 14.2637 15.1853 12.8104C15.2038 12.8012 15.2315 12.8011 15.25 12.8197C15.3519 12.903 15.4537 12.977 15.5555 13.0603C15.5925 13.0881 15.5925 13.1436 15.5463 13.1622C15.0649 13.4491 14.5558 13.6805 14.0282 13.8842C13.9912 13.8934 13.9819 13.9397 13.9912 13.9675C14.2874 14.5321 14.6206 15.069 14.9816 15.5781C15.0094 15.5874 15.0371 15.5966 15.0649 15.5874C16.657 15.0968 18.2584 14.3563 19.9246 13.1344C19.9431 13.1251 19.9524 13.1066 19.9524 13.0881C20.3597 8.89489 19.2766 5.25707 17.0828 2.02653C17.0736 2.01728 17.0643 2.00802 17.0458 2.00802ZM7.09503 10.8758C6.14161 10.8758 5.34554 9.99642 5.34554 8.9134C5.34554 7.83039 6.12309 6.95101 7.09503 6.95101C8.07622 6.95101 8.85377 7.83964 8.84452 8.9134C8.84452 9.99642 8.06697 10.8758 7.09503 10.8758ZM13.5468 10.8758C12.5934 10.8758 11.7974 9.99642 11.7974 8.9134C11.7974 7.83039 12.5749 6.95101 13.5468 6.95101C14.528 6.95101 15.3056 7.83964 15.2963 8.9134C15.2963 9.99642 14.528 10.8758 13.5468 10.8758Z" fill="white" fillOpacity="0.15"/></svg></a>
                            <a className={styles.footerDawnInfoIcon} href=""><svg className={styles.iconSvgFooter} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3021 2.64441C20.5292 2.98691 19.6989 3.21832 18.826 3.32292C19.7266 2.784 20.4005 1.93579 20.7217 0.936581C19.8755 1.4392 18.9494 1.79299 17.9836 1.98257C17.3342 1.28913 16.4739 0.829507 15.5365 0.675059C14.599 0.520612 13.6368 0.679981 12.7993 1.12843C11.9617 1.57687 11.2956 2.2893 10.9044 3.1551C10.5132 4.0209 10.4187 4.99164 10.6358 5.9166C8.92117 5.83051 7.24383 5.38486 5.71261 4.60857C4.18139 3.83227 2.83051 2.74268 1.74764 1.41052C1.37738 2.04922 1.16448 2.78974 1.16448 3.5784C1.16406 4.28837 1.3389 4.98747 1.67348 5.61367C2.00805 6.23986 2.49202 6.77379 3.08243 7.16809C2.39771 7.1463 1.72808 6.96128 1.1293 6.62843V6.68397C1.12923 7.67974 1.47368 8.64486 2.10419 9.41558C2.7347 10.1863 3.61244 10.7151 4.58847 10.9124C3.95327 11.0843 3.28732 11.1096 2.6409 10.9864C2.91628 11.8432 3.45269 12.5924 4.17505 13.1292C4.8974 13.666 5.76953 13.9635 6.66935 13.98C5.14186 15.1791 3.25543 15.8295 1.31351 15.8267C0.969517 15.8268 0.625817 15.8067 0.28418 15.7665C2.25534 17.0339 4.54991 17.7065 6.89335 17.7039C14.8262 17.7039 19.1629 11.1336 19.1629 5.43526C19.1629 5.25013 19.1583 5.06315 19.1499 4.87802C19.9935 4.26799 20.7216 3.51258 21.3002 2.64719L21.3021 2.64441Z" fill="white" fillOpacity="0.15"/></svg></a>
                            <a className={styles.footerDawnInfoIcon} href=""><svg className={styles.iconSvgFooter} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.53514 0.0610932C7.62093 0.0111078 7.96713 0 10.733 0C13.4988 0 13.845 0.0120335 14.9299 0.0610932C16.0148 0.110153 16.7553 0.28325 17.4032 0.534103C18.0818 0.790509 18.6973 1.19132 19.2064 1.70968C19.7248 2.21787 20.1247 2.8325 20.3802 3.51193C20.6319 4.15989 20.8041 4.90042 20.8541 5.98343C20.9041 7.07108 20.9152 7.41727 20.9152 10.1822C20.9152 12.9481 20.9031 13.2943 20.8541 14.38C20.805 15.4631 20.6319 16.2036 20.3802 16.8515C20.1247 17.5311 19.7241 18.1467 19.2064 18.6556C18.6973 19.174 18.0818 19.5739 17.4032 19.8294C16.7553 20.0812 16.0148 20.2533 14.9318 20.3033C13.845 20.3533 13.4988 20.3644 10.733 20.3644C7.96713 20.3644 7.62093 20.3524 6.53514 20.3033C5.45212 20.2542 4.7116 20.0812 4.06364 19.8294C3.38414 19.5739 2.76848 19.1733 2.25954 18.6556C1.74152 18.1472 1.34066 17.5318 1.08488 16.8525C0.834032 16.2045 0.66186 15.464 0.611874 14.381C0.561889 13.2933 0.550781 12.9471 0.550781 10.1822C0.550781 7.41635 0.562815 7.07015 0.611874 5.98528C0.660934 4.90042 0.834032 4.15989 1.08488 3.51193C1.34103 2.83258 1.74221 2.21723 2.26047 1.70876C2.76869 1.19086 3.38372 0.789994 4.06272 0.534103C4.71067 0.28325 5.45212 0.111079 6.53514 0.0610932ZM14.8475 1.89389C13.7738 1.84483 13.4516 1.83465 10.733 1.83465C8.01433 1.83465 7.69221 1.84483 6.61845 1.89389C5.62522 1.93925 5.08649 2.10494 4.72733 2.24471C4.25247 2.42984 3.91276 2.64922 3.55638 3.0056C3.21856 3.33426 2.95858 3.73435 2.79549 4.17655C2.65572 4.53571 2.49003 5.07444 2.44467 6.06767C2.39561 7.14143 2.38543 7.46355 2.38543 10.1822C2.38543 12.9008 2.39561 13.223 2.44467 14.2967C2.49003 15.29 2.65572 15.8287 2.79549 16.1878C2.95841 16.6294 3.21852 17.0302 3.55638 17.3588C3.88499 17.6967 4.2858 17.9568 4.72733 18.1197C5.08649 18.2595 5.62522 18.4252 6.61845 18.4705C7.69221 18.5196 8.01341 18.5298 10.733 18.5298C13.4526 18.5298 13.7738 18.5196 14.8475 18.4705C15.8407 18.4252 16.3795 18.2595 16.7386 18.1197C17.2135 17.9346 17.5532 17.7152 17.9096 17.3588C18.2474 17.0302 18.5076 16.6294 18.6705 16.1878C18.8102 15.8287 18.9759 15.29 19.0213 14.2967C19.0704 13.223 19.0805 12.9008 19.0805 10.1822C19.0805 7.46355 19.0704 7.14143 19.0213 6.06767C18.9759 5.07444 18.8102 4.53571 18.6705 4.17655C18.4853 3.70169 18.266 3.36198 17.9096 3.0056C17.5809 2.6678 17.1808 2.40782 16.7386 2.24471C16.3795 2.10494 15.8407 1.93925 14.8475 1.89389ZM9.43244 13.3211C10.1588 13.6234 10.9675 13.6643 11.7206 13.4365C12.4737 13.2088 13.1243 12.7267 13.5614 12.0726C13.9985 11.4185 14.195 10.6329 14.1172 9.84999C14.0395 9.0671 13.6923 8.33549 13.1351 7.78013C12.7798 7.42512 12.3503 7.15329 11.8774 6.9842C11.4045 6.81512 10.9 6.75298 10.4002 6.80228C9.90041 6.85158 9.41777 7.01107 8.98702 7.26929C8.55626 7.5275 8.18812 7.87801 7.90909 8.29558C7.63006 8.71315 7.44708 9.18739 7.37333 9.68416C7.29958 10.1809 7.3369 10.6879 7.48258 11.1685C7.62827 11.6491 7.87871 12.0915 8.21587 12.4637C8.55303 12.8359 8.96852 13.1287 9.43244 13.3211ZM7.03222 6.48143C7.51821 5.99544 8.09516 5.60993 8.73014 5.34692C9.36512 5.0839 10.0457 4.94853 10.733 4.94853C11.4203 4.94853 12.1008 5.0839 12.7358 5.34692C13.3708 5.60993 13.9478 5.99544 14.4338 6.48143C14.9197 6.96743 15.3053 7.54438 15.5683 8.17936C15.8313 8.81434 15.9667 9.49491 15.9667 10.1822C15.9667 10.8695 15.8313 11.5501 15.5683 12.185C15.3053 12.82 14.9197 13.397 14.4338 13.883C13.4522 14.8645 12.121 15.4159 10.733 15.4159C9.34493 15.4159 8.01372 14.8645 7.03222 13.883C6.05071 12.9015 5.49931 11.5703 5.49931 10.1822C5.49931 8.79414 6.05071 7.46294 7.03222 6.48143ZM17.1274 5.72795C17.2478 5.61434 17.3442 5.47773 17.4109 5.32619C17.4776 5.17466 17.5132 5.01128 17.5156 4.84574C17.5181 4.68019 17.4872 4.51585 17.425 4.36243C17.3627 4.20902 17.2704 4.06965 17.1533 3.95258C17.0362 3.83551 16.8969 3.74312 16.7434 3.68088C16.59 3.61864 16.4257 3.58781 16.2601 3.59023C16.0946 3.59264 15.9312 3.62825 15.7797 3.69493C15.6281 3.76162 15.4915 3.85803 15.3779 3.97846C15.157 4.21268 15.036 4.52379 15.0407 4.84574C15.0454 5.16769 15.1754 5.47513 15.4031 5.70281C15.6307 5.93049 15.9382 6.06047 16.2601 6.06517C16.5821 6.06986 16.8932 5.9489 17.1274 5.72795Z" fill="white" fillOpacity="0.15"/></svg></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
})
 
export default Static;