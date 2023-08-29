import * as React from 'react';

import BtnDetailPlus from '../../../svg/helperr/btnDetailsPlus';
import BtnDetailsMinus from '../../../svg/helperr/btnDetailsMinus';

import '../../../style/details.css'

const DetailSummary = ({title, description}: {title: string, description: string}) => {
    const [btnStauts, setBtnStauts] = React.useState<boolean>(true);

    const switchStatusDetails = (target: HTMLElement) => {
        if (!target.classList.contains('parag')) {
            const check = target.closest('details') as HTMLElement;

            const summary = check.querySelector('summary') as HTMLElement

            if (check?.hasAttribute('open')) {
                summary.classList.remove('active')

                setBtnStauts(true);
            } else {
                summary.classList.add('active')

                setBtnStauts(false);
            }
        };
    };

    return (
        <>
            <details className='FAQ_details_title' onClick={e => switchStatusDetails(e.target as HTMLDivElement)}>
                <summary className='FAQ_summary_description'>
                    <div className='FAQ_summary_description_text'>
                        <span className='FAQ_summary_description_text-text'>{title}</span>
                        <span className='FAQ_btn'>{btnStauts ? <BtnDetailPlus/> : <BtnDetailsMinus/>}</span>
                    </div>
                </summary>

                <div className='FAQ_description_text'>
                    <p className='parag'>{description}</p>
                </div>
            </details>
        </>
    );
}
 
export default DetailSummary;