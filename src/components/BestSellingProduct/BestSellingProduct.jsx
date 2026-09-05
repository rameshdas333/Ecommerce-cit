import React from 'react';
import Container from '../container/Container';
import Title from '../Title/Title';
import coat from '../../assets/coat.png'
import gammaxx from '../../assets/gammaxx.png'
import bag from '../../assets/bag.png'
import unsplash from  '../../assets/unsplash .png'
import { GoHeart } from 'react-icons/go';
import { IoEyeOutline } from 'react-icons/io5';
import { TiStarFullOutline } from 'react-icons/ti';


const BestSellingProduct = () => {
    return (
        <div className=''>
            <Container>
                <div className='pb-[122px]  relative after:absolute after:content-[" "] after:bg-[#D9D9D9] after:h-[1px] after:w-full   after:top-0 after:left-0 '>
                    <Title   name="This Month" title='Best Selling Products' />
                   <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-[30px] justify-items-center md:justify-items-start'>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={coat} alt="" />
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={bag} alt="" />
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={gammaxx} alt="" />
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>
                 <div>
                       <div className= 'bg-[#F5F5F5] relative flex items-center justify-center w-[270px] h-[250px]'>
                        <img src={unsplash} alt="" />
                        <div className='absolute top-3 flex flex-col gap-2  right-3'>
                            <div className='flex items-center justify-center h-[34px] bg-white rounded-full  w-[34px]'>
                                <GoHeart />
                            </div>
                           <div className='flex items-center justify-center  h-[34px] bg-white rounded-full  w-[34px]'>
                                <IoEyeOutline/>
                            </div>
                          
                        </div>

                       </div>
                       <p className='pt-4 pb-2 font-primary font-medium text-base'>The north coat</p>
                      <div className='flex'>
                         <p className='font-primary font-medium text-base text-primary1'>$260</p>
                         <del className='font-primary font-medium text-base ml-2'>$360</del>
                      </div>
                       <div className='pt-2 flex items-center '>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <TiStarFullOutline  className='text-[#FFAD33] text-2xl text-start'/>
                        <p className='ml-2 font-primary font-medium text-base '> (65)</p>
                       </div>

                 </div>

                   </div>
                </div>
            </Container>
        </div>
    );
};

export default BestSellingProduct;