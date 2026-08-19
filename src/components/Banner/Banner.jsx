import React from 'react';
import BannerLeft from '../BannerLeft.jsx/BannerLeft';
import BannerRight from '../BannerRight/BannerRight';
import Container from '../container/Container';

const Banner = () => {
    return (
       <section>
       <Container>
        <div className='flex '>
           <BannerLeft/>
        <BannerRight/>
        </div>
       </Container>
       </section>
    );
};

export default Banner;