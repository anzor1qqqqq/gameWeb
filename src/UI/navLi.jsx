import React from 'react';

const NavLi = ({text}) => {
    const style = {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 16,
        lineHeight: '130%',
        color: '#FFFFFF',
        textDecoration: 'none',
    }
    return (
        <>
            <a href="#" style={style}>{text}</a>
        </>
    );
}
 
export default NavLi;