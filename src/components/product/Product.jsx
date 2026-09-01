import React from 'react';
import BannerLeft from '../BannerLeft.jsx/BannerLeft';
import ProductLeft from './ProductLeft/ProductLeft';
import Container from '../container/Container';
import ProductRight from './ProductRight/ProductRight';

const Product = () => {
    return (
        <div className='mt-20'>
          <Container>
           <div className='md:flex '>
              <div className='md:w-[30%]'>
               <ProductLeft/>
            </div>

            <div className='md:w-[70%]'>

              <ProductRight/>
              
            </div> 
           </div>
          </Container>
        </div>
    );
};

export default Product;