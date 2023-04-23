import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarousel from '../cardCarousel'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow } from 'swiper';


const Carousel = ({ cardArrayData }) => {
    return (
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={2}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow]}
                className="swiper_container"
            >

                {cardArrayData?.map((data, i) => (
                    <SwiperSlide key={i}>
                        <CardCarousel data={data} key={data.id} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >

    )
}

export default Carousel