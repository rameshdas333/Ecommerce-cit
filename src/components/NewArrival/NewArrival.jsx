import React from 'react';
import Container from '../container/Container';
import Title from '../Title/Title';
import Frame1 from '../../assets/Frame1.png'
import Frame2 from '../../assets/Frame2.png'
import Frame3 from '../../assets/Frame3.png'
import Frame4 from '../../assets/Frame 4.png'
import Service1 from '../../assets/Services.png'
import Service2 from '../../assets/Services (1).png'
import Service3 from '../../assets/Services (2).png'

const NewArrival = () => {

    const services = [
        {
           image:Service1,
           service:'FREE AND FAST DELIVERY',
           name:'Free delivery for all orders over $140'
        },
          {
           image:Service2,
           service:'24/7 CUSTOMER SERVICE',
           name:'Friendly 24/7 customer support'
        },
        {
           image:Service3,
           service:'MONEY BACK GUARANTEE',
           name:'We reurn money within 30 days'
        },
      
    ]
    return (
        <div>
            <Container>
                <div>
                    <Title name="Featured" title="New Arrival"  titleSize="text-[30px]"/>
                    <div className='grid grid-cols-4 gap-[30px]'>
                        <div className='col-span-2'>
                            <img className='w-[570px]' src={Frame1} alt="" />
                        </div>
                        <div className='col-span-2 space-y-[32px] '>
                            <div className='col-span-1 '>
                                <img src={Frame2} alt="" />
                            </div>
                            <div className='grid grid-cols-2 gap-[30px]'>
                                <div><img src={Frame3} alt="" /></div>
                                <div><img src={Frame4} alt="" /></div>
                            </div>
                        </div>

                    </div>

                    {/* service part  */}

                    <div className='grid grid-cols-1 md:grid-cols-3 md:w-[970px] my-[174px] mx-auto  gap-[88px]'>
                     {
                        services.map((service,idx) =>(
                            <div key={idx} className='flex  flex-col items-center justify-center'>
                                <img className='pb-6' src={service.image} alt="" />
                                <h3 className='font-secoundary pb-2 font-semibold text-xl leading-7'>{service.service}</h3>
                                <p className='w-[249px] font-primary text-sm  '>{service.name}</p>
                            </div>
                        ))
                     }
                    </div>

                    
                </div>
            </Container>
        </div>
    );
};

export default NewArrival;