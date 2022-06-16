import "./AppSliderSwiper.sass"
import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


const AppSliderSwiper = () => {
    return(
        <section className="_container AppSliderSwiper"> 
            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide><img src="../img/AppSliderSwiper/1.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="../img/AppSliderSwiper/2.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="../img/AppSliderSwiper/3.jpeg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="../img/AppSliderSwiper/1.jpeg" alt="" /></SwiperSlide>            
            </Swiper>
        </section>
    )
}

export default AppSliderSwiper