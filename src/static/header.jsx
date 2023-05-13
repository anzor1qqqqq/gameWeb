import React from 'react';
import NavLi from '../UI/navLi';
import user from '../img/user.png';
import logoBall from '../img/logoBall.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header_nav'>
                <div className='header_nav_savings_account'>
                    <span className='header_nav_savings_account_lang'>RU/₽</span>
                    <button className='header_nav_savings_account_arrow_select'>
                        <svg width="8" height="5" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 2.59454L1.2543 5L0 3.50432L4 0L8 3.50432L6.7457 5L4 2.59454Z" fill="#77BE1D"/>
                        </svg>
                    </button>
                    <NavLi text={'Накопительный'}/>

                    <div className='d-none'>
                        <ul>
                            <li><a href="">Русский(RU)</a></li>
                            <li><a href="">English(EN)</a></li>
                            <hr />
                            <div>
                                <button>$</button>
                                <button>€</button>
                                <button>₽</button>
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

            <div className='header_search'>
                <div className='header_search_contant'>
                    <img style={{width: 30, height: 30}} src={logoBall} alt="" />
                    <span className='header_search_contant_logo'>Playnchill</span>
                </div>

                <div className='header_search_contant_input'>
                    <input type="text" placeholder='Поиск' />
                    <div className='header_search_contant_input_img'>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.9992 11.6472C21.9992 16.9753 17.6804 21.2943 12.3532 21.2943C7.026 21.2943 2.70714 16.9753 2.70714 11.6472C2.70714 6.319 7.026 2 12.3532 2C17.6804 2 21.9992 6.319 21.9992 11.6472ZM23.9992 11.6472C23.9992 18.0797 18.7851 23.2943 12.3532 23.2943C9.49714 23.2943 6.88123 22.2661 4.85532 20.5597L1.41428 24.0011L0 22.5869L3.4412 19.1454C1.7351 17.1193 0.707141 14.5033 0.707141 11.6472C0.707141 5.21461 5.92125 0 12.3532 0C18.7851 0 23.9992 5.21461 23.9992 11.6472Z" fill="white" fillOpacity="0.2"/>
                        </svg>
                    </div>
                </div>

                <div className='header_search_contant_like_busket'>
                    <div className='like'>
                        <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.17875 2.47059C4.48377 2.47059 2.47619 4.45541 2.47619 6.69457C2.47619 7.78053 2.9447 8.84477 3.81685 9.64625L13 18.0853L22.1831 9.64625C23.0553 8.84478 23.5238 7.78053 23.5238 6.69457C23.5238 4.45541 21.5162 2.47059 18.8212 2.47059C17.5427 2.47059 16.3349 2.93827 15.4593 3.74289L13.8388 5.23214C13.3648 5.66772 12.6352 5.66772 12.1612 5.23214L10.5407 3.7429C9.66509 2.93828 8.45731 2.47059 7.17875 2.47059ZM0 6.69457C0 2.90358 3.31187 0 7.17875 0C9.05132 0 10.8656 0.682659 12.2182 1.92567L13 2.6441L13.7818 1.92566C15.1344 0.682658 16.9487 0 18.8212 0C22.6881 0 26 2.90358 26 6.69457C26 8.5044 25.2167 10.2173 23.8607 11.4635L13.8388 20.6733C13.3648 21.1089 12.6352 21.1089 12.1612 20.6733L2.13929 11.4635C0.783262 10.2173 0 8.5044 0 6.69457Z" fill="#CDCDCF"/>
                        </svg>
                    </div>

                    <div>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.65953 2.60856L0 2.36418L0.22549 0L4.49329 0.392171L5.59618 3.89179L24 5.58293L23.164 14.3485L7.19617 17.0039L2.65953 2.60856ZM6.37019 6.34781L8.88113 14.3153L20.9285 12.3119L21.3659 7.72578L6.37019 6.34781Z" fill="#77BE1D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.7707 22.6255C19.1047 22.6255 19.3755 22.3597 19.3755 22.0319C19.3755 21.704 19.1047 21.4382 18.7707 21.4382C18.4367 21.4382 18.1659 21.704 18.1659 22.0319C18.1659 22.3597 18.4367 22.6255 18.7707 22.6255ZM18.7707 25C20.4408 25 21.7947 23.6711 21.7947 22.0319C21.7947 20.3926 20.4408 19.0637 18.7707 19.0637C17.1006 19.0637 15.7468 20.3926 15.7468 22.0319C15.7468 23.6711 17.1006 25 18.7707 25Z" fill="#77BE1D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.09413 22.6255C9.42814 22.6255 9.69891 22.3597 9.69891 22.0319C9.69891 21.704 9.42814 21.4382 9.09413 21.4382C8.76011 21.4382 8.48934 21.704 8.48934 22.0319C8.48934 22.3597 8.76011 22.6255 9.09413 22.6255ZM9.09413 25C10.7642 25 12.1181 23.6711 12.1181 22.0319C12.1181 20.3926 10.7642 19.0637 9.09413 19.0637C7.42405 19.0637 6.07019 20.3926 6.07019 22.0319C6.07019 23.6711 7.42405 25 9.09413 25Z" fill="#77BE1D"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
};
 
export default Header;