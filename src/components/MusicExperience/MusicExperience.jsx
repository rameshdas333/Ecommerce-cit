
import moment from 'moment';
import Container from '../container/Container';



const MusicExperience = () => {
    return (
        <div>
            <Container>
                <div className='bg-[url(./assets/enhance.jpg)]   h-[500px]'>
               
                <p className='text-[#00FF66] pt-[70px] font-semibold pl-[56px] text-base font-primary leading-[20px]'>Categories</p>
                <h1 className='text-white font-secoundary font-semibold text-[30px] md:text-5xl leading-[45px] md:leading-[60px] w-[443px] pl-[56px] py-8'>Enhance Your Music Experience</h1>
                <div className='pl-[35px] md:pl-[56px] flex gap-4 items-center pb-[32px]'>
                   
                    <div className='bg-white rounded-full h-[62px] text-[12px] font-semibold font-primary w-[62px] flex flex-col items-center justify-center'>{moment().hours()} 
                        <p>Hours</p>
                    </div>
                    <div className='bg-white rounded-full h-[62px] text-[12px] font-semibold font-primary w-[62px] flex flex-col items-center justify-center'>{moment().days()} 
                        <p>Days</p>
                    </div>
                    <div className='bg-white rounded-full h-[62px] text-[12px] font-semibold font-primary w-[62px] flex flex-col items-center justify-center'>{moment().minutes()} 
                        <p>Minutes</p>
                    </div>
                    <div className='bg-white rounded-full h-[62px] text-[12px] font-semibold font-primary w-[62px] flex flex-col items-center justify-center'>{moment().seconds()} 
                        <p>Seconds</p>
                    </div>
                    
                  
                 

                   
                </div>
                <div className='pl-[56px] pb-[77px]'>
                      <button className='bg-[#00FF66] rounded px-12 py-4  '>Buy Now!</button>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default MusicExperience;