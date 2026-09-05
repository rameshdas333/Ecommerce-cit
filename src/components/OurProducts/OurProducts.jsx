
import { GoHeart } from 'react-icons/go';
import Container from '../container/Container';
import Title from '../Title/Title';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';
import cat from '../../assets/cat.png';
import camera from '../../assets/camera.png';
import laptop from '../../assets/laptop.png'
import Button from '../Button/Button';
import { useState } from 'react';
import Pagenation from './Pagenation';

const OurProducts = () => {
    const [visible, setVisible] =useState(4);
    const handleLoadData = () =>{
        setVisible((prev) => prev+4)
        
        
      
    }

   


    const products = [
        {
            name:'Breed Dry Dog Food',
            price:'$100',
            image:cat
        },
      
        {
           name:'The north coat',
              price:'$266',
           image:camera
        },
        {
           name:'The north coat',
            price:'$266',
           image:laptop
        },
        {
           name:'Breed Dry Dog Food',
            price:'$100',
            image:cat
        },
        {
          name:'The north coat',
           price:'$266',
             image:camera
        },
        {
           name:'The north coat',
            price:'$266',
          image:laptop
        },
        {
          name:'Breed Dry Dog Food',
          price:'$100',
            image:cat
        },
        {
            name:'The north coat',
            price:'$266',
             image:camera
        },
        {
           name:'The north coat',
            price:'$266',
           image:laptop
        },
    ]
    return (
      <div>
        <Container>
          <div className="pb-[122px] pt-[120px]">
            <Title name="This Month" title="Best Selling Products" titleSize="text-[30px]"/>

            <div className="flex flex-wrap gap-[30px] justify-center md:justify-center">
              {
              products.slice(0, visible).map((product, idx) => (
                <div key={idx} className=" ">
                  <div className="bg-[#F5F5F5] group relative flex items-center justify-center w-[270px] h-[250px]">
                    <img src={product.image} alt="" />
                   

                    <div className="absolute top-3 flex flex-col gap-2  right-3">
                      <div className="flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]">
                        <GoHeart />
                      </div>
                      <div className="flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]">
                        <IoEyeOutline />
                      </div>
                     
                    </div>
                       <button className='absolute bottom-0 left-0 w-full rounded-[4px] py-1 group-hover:block hidden bg-black text-white'>Add to cart</button>
                  </div>
                  
                  <p className="pt-4 pb-2 font-primary font-medium text-base">
                    {product.name}
                  </p>
                  <div className="flex items-center gap-2 ">
                    <p className="font-primary font-medium text-base text-primary1">
                      {product.price}
                    </p>
                      <div className='flex items-center'>
                    {[...Array(5)].map((_, starIdx) => (
                    <TiStarFullOutline
                      key={starIdx}
                      className={`text-2xl ${
                        starIdx < product.rating
                          ? "text-gray-300" 
                          : "text-[#FFAD33]"
                      }`}
                    />
                  ))}

                 
              </div>
                  </div>

            
                  {/* <div className='pt-2 flex items-center '>
                                              <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                                              <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                                              <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                                              <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                                              <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                                              <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                                             </div> */}
                </div>
              ))
              
              }


            </div>

            {visible < products.length && (
              <div
                onClick={handleLoadData}
                className=" text-center pt-15 text-white"
              >
                <Button name="View All Products" />
              </div>
            )}

           
          </div>
        </Container>
      </div>
    );
};

export default OurProducts;