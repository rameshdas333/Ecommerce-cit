import React from 'react';

const BannerLeft = () => {
    return (
        <div className='py-2 md:w-[20%] pt-[40px] relative after:absolute after:content-[""]  after:top-0 after:right-0 after:bg-[#D9D9D9]  after:w-[2px] after:h-full'>
            <p className='py-2 text-base'>Woman’s Fashion</p>
            <p className='py-2 text-base'>Men’s Fashion</p>
            <p className='py-2 text-base'>Electronics</p>
            <p className='py-2 text-base'>Home & Lifestyle</p>
            <p className='py-2 text-base'>Medicine</p>
            <p className='py-2 text-base'>Sports & Outdoor</p>
            <p className='py-2 text-base'>Baby’s & Toys</p>
            <p className='py-2 text-base'>Groceries & Pets</p>
            <p className='py-2 text-base'>Health & Beauty</p>
            
        </div>
    );
};

export default BannerLeft;