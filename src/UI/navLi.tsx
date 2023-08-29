import { useNavigate } from "react-router-dom";

const NavLi = ({text, link}: {text: string, link?: string}): JSX.Element => {
    const navig = useNavigate();

    const style = {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '130%',
        color: '#FFFFFF',
        textDecoration: 'none',
        cursor: 'pointer',
    };

    const switchPAge = () => {
        const headerNav = document.querySelector('.header_nav.active') as HTMLDivElement;

        if (headerNav) {
            const body = document.body;

            body.style.overflowY = '';
            headerNav.classList.remove('active');

            navig(`/${link}`)
        } else {
            navig(`/${link}`)
        };
    };

    return (
        <>
            <a style={style} onClick={() => link 
                ? switchPAge()
                : ''
                }>{text}</a>
        </>
    );
};
 
export default NavLi;