import React from 'react';
import '../style/cardTopFour.css'

const CardTopFour = ({dataB, id}) => {
    const data = dataB[id];

    return (  
            <div className='block_card' key={id}>
                <div className='contant_card'>
                    <img className='contant_card_image' src={data.img} alt="" />
                    <button className='contant_card_image_btn basket'>В корзину</button>
                    <button className='contant_card_image_btn favorite'><svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5.79822 2C3.62151 2 2 3.60676 2 5.41942C2 6.29853 2.37841 7.16006 3.08284 7.80887L10.5 14.6405L17.9172 7.80887C18.6216 7.16006 19 6.29853 19 5.41942C19 3.60676 17.3785 2 15.2018 2C14.1691 2 13.1936 2.3786 12.4864 3.02996L11.1775 4.23555C10.7946 4.58815 10.2054 4.58815 9.82252 4.23555L8.51361 3.02996C7.80642 2.3786 6.8309 2 5.79822 2ZM0 5.41942C0 2.35052 2.67497 0 5.79822 0C7.31068 0 8.77606 0.552629 9.86856 1.55887L10.5 2.14046L11.1314 1.55887C12.2239 0.552628 13.6893 0 15.2018 0C18.325 0 21 2.35052 21 5.41942C21 6.88451 20.3674 8.27117 19.2721 9.27996L11.1775 16.7355C10.7946 17.0882 10.2054 17.0882 9.82252 16.7355L1.72789 9.27996C0.632635 8.27117 0 6.88451 0 5.41942Z" fill="#77BE1D"/></svg></button>
                    <span className='contant_card_image_btn top'>TOP 4</span>
                </div>
                
                <div>
                    <div>
                        <span>{data.price}</span>
                        {data.sale 
                        ? <> <span>{data.sale}</span> <span>{data.price - (data.price * (data.sale / 100))}</span> </>
                        : ''}
                    </div>

                    <div>
                        <p>{data.name}</p>
                    </div>

                    <div>
                        {data.tags.map((item, i) => 
                            <span key={i}>{item}</span>
                        )}
                    </div>
                </div>
            </div>
    );
}
 
export default CardTopFour;