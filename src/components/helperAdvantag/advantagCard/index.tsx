import * as React from 'react';

const AdvantagCArd = ({children, title, text}: {children: React.ReactNode, title: string, text: string}) => {
    return (
        <div className='contant_card_advantag'>
            <div className='block_card_advantag_title'>
                {children}

                <h2 className='block_card_advantag_title-text'>{title}</h2>
            </div>

            <div className='block_card_advantag_parag'>
                <p>{text}</p>
            </div>
        </div>
    );
}
 
export default AdvantagCArd;