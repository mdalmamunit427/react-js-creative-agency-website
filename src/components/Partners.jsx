import React from 'react';
import MovingText from './MovingText';

const Partners = () => {
    return (
        <div>
            {/* moving text */}
            <MovingText/>

            {/* company logos */}
            <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center  gap-8 lg:px-24 px-4 pt-5'>
                <img className='block mx-auto' src="/src/assets/partner_1.svg" alt="" />
                <img className='block mx-auto' src="/src/assets/partner_3 (1).svg" alt="" />
                <img className='block mx-auto' src="/src/assets/partner_4.svg" alt="" />
                <img className='block mx-auto' src="/src/assets/partner_5.svg" alt="" />
                <img className='block mx-auto' src="/src/assets/partner_3 (1).svg" alt="" />
                <img className='block mx-auto' src="/src/assets/partner_1.svg" alt="" />
            </div>
            <div className='h-20'></div>
        </div>
    );
};

export default Partners;