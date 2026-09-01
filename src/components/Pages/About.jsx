
import Container from '../container/Container';
import AboutLeftside from '../../components/Aboutpage/AboutLeftSide';
import AboutRightSide from '../../components/Aboutpage/AboutRightSide';

const About = () => {
    return (
        <div className='mt-[120px] mb-[140px] md:flex items-center justify-center gap-[75px]'>
         <Container>
            <div className='md:ml-[160px] px-5 md:px-0'>
                <AboutLeftside/>
              
            </div>
         </Container>
           <AboutRightSide/>
        </div>
    );
};

export default About;