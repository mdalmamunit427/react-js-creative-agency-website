import React from 'react';
import MovingText from './MovingText';
import partner1 from '../assets/partner_1.svg'
import partner2 from '../assets/partner_3 (1).svg'
import partner3 from '../assets/partner_3.svg'
import partner4 from '../assets/partner_4.svg'
import partner5 from '../assets/partner_5.svg'

const Partners = () => {
    return (
        <div>
            {/* moving text */}
            <MovingText/>

            {/* company logos */}
            <div className='grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center  gap-8 lg:px-24 px-4 pt-5'>
                <img className='block mx-auto' src={partner1} alt="" />
                <img className='block mx-auto' src={partner2} alt="" />
                <img className='block mx-auto' src={partner3} alt="" />
                <img className='block mx-auto' src={partner4} alt="" />
                <img className='block mx-auto' src={partner2} alt="" />
                <img className='block mx-auto' src={partner1} alt="" />
            </div>
            <div className='h-20'></div>
        </div>
    );
};

export default Partners;