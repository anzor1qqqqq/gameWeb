import * as React from 'react';
import Qiwi from '../../svg/SVGPay/qiwi';
import WebMoney from '../../svg/SVGPay/webMoney';
import MasterCard from '../../svg/SVGPay/mastercard';
import Visa from '../../svg/SVGPay/visa';
import Bitcoin from '../../svg/SVGPay/bitcoin';
import SamPay from '../../svg/SVGPay/samPay';
import '../../style/payVariant.css'

const PayVariant = React.memo((): JSX.Element => {

    const activeBlock = (id: number): void => {
        const doc = document.querySelectorAll('.contant_block_pay_card') as NodeListOf<HTMLElement>;

        doc.forEach((item: HTMLElement) => item.classList.remove('active'));

        doc[id].classList.add('active');
    };

    return (
        <div className='container_pay_variant'>
            <div className='contant_block_pay'>
                <article className='contant_block_pay_card'>
                    <div className='contant_block_pay_card_info'>
                        <input className='contant_block_pay_card_info_checkbox' type="radio" name="pay" id='pay1' onChange={() => activeBlock(0)} />
                        <label className='contant_block_pay_card_info_text' htmlFor='pay1'>Электронные кошельки</label>
                    </div>

                    <div>
                        <Qiwi/>
                        <WebMoney/>
                    </div>
                </article>

                <article className='contant_block_pay_card'>
                    <div className='contant_block_pay_card_info'>
                        <input className='contant_block_pay_card_info_checkbox' type="radio" name="pay" id='pay2' onChange={() => activeBlock(1)} />
                        <label className='contant_block_pay_card_info_text' htmlFor='pay2'>Банковские карты</label>
                    </div>

                    <div>
                        <MasterCard/>
                        <Visa/>
                    </div>
                </article>

                <article className='contant_block_pay_card'>
                    <div className='contant_block_pay_card_info'>
                        <input className='contant_block_pay_card_info_checkbox' type="radio" name="pay" id='pay3' onChange={() => activeBlock(2)} />
                        <label className='contant_block_pay_card_info_text' htmlFor='pay3'>Криптовалюта</label>
                    </div>

                    <div>
                        <Bitcoin/>
                    </div>
                </article>

                <article className='contant_block_pay_card'>
                    <div className='contant_block_pay_card_info'>
                        <input className='contant_block_pay_card_info_checkbox' type="radio" name="pay" id='pay4' onChange={() => activeBlock(3)} />
                        <label className='contant_block_pay_card_info_text' htmlFor='pay4'>Электронные кошельки</label>
                    </div>

                    <div>
                        <SamPay/>
                    </div>
                </article>
            </div>

            <div>
                <input className='input_basket_email' type="text" placeholder='Укажите почту' />
            </div>
        </div>
    );
});
 
export default PayVariant;