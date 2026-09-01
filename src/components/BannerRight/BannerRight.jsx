import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'


const BannerRight = () => {
    var settings = {
    dots: true,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000, 
    pauseOnHover: true,

  };
    return (
   <div className="md:w-[80%] pt-10 md:pl-10">
         <Slider {...settings}>
      <div>
       <img className="w-full" src={banner} alt="" />
      </div>
      <div>
         <img className="w-full" src={banner2} alt="" />
      </div>
      <div>
         <img className="w-full" src={banner3} alt="" />
      </div>
     
    </Slider>
   </div>
    );
};

export default BannerRight;