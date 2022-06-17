import { Component } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper';


import 'swiper/css/bundle';
import "./AppSliderSwiper.sass"
import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"
import "../sass/libs/bootstrap-reboot.min.scss"

class AppSliderSwiper extends Component {
    
    render(){
        const swiperSlide = this.props.dataSlide.map(({lable})=>{
            return(
                <SwiperSlide key={lable}><img className="swiperSlide__img" src={lable} alt=""/></SwiperSlide>
                )
        }) 
        return(
            <section className="_container AppSliderSwiper"> 
                <Swiper                    
                    modules={[Grid]}
                    spaceBetween={10}
                    slidesPerView={2}
                    grid = {{rows: 2,
                            fill: "row"}}>
                    {swiperSlide}           
                </Swiper>
            </section>
        )
    }
}


export default AppSliderSwiper