import './AppOne.css';
import AppOneHeader from "../AppOneHeader/AppOneHeader"
import AppFilterProducts from "../AppFilterProducts/AppFilterProducts"
import {Component} from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


class AppOne extends Component {
  state = {
    liData: [
        {name: "NordicTrack C100"},
        {name: "Clear Fit Luxury LT.20"},
        {name: "Ammity ATM 720 TFT+"}
    ],
    accordion: [
      {dataAttribute: "#collapseOne", show: "", collapsed: "collapsed"},
      {dataAttribute: "#collapseTwo", show: "", collapsed: "collapsed"},
      {dataAttribute: "#collapseThree", show: "", collapsed: "collapsed"},
    ],
  }

  onDelLiData = (name) => {
    this.setState({
        liData: this.state.liData.filter(item=> {
            return item.name !== name                      
        })
    })     
  }

  changeClassAccordion = (dataAttribute) => {
    console.log(dataAttribute);
    this.setState({
      
      accordion: this.state.accordion.map(item=> {
        if(dataAttribute === item.dataAttribute && item.show === "show" && item.collapsed === "" ){
          return {...item, show: "", collapsed: "collapsed"}          
        }
        if(dataAttribute === item.dataAttribute){
          return {...item, show: "show", collapsed: ""}          
        }
        return {...item, show: "", collapsed: "collapsed"}
      })
    })  
  }


  
  render(){
    const li = this.state.liData.map(({name}) => {
      return(
          <li key = {name} className="items-nav__product">
              <a href="#" className="items-nav__item">{name}</a>
              <div onClick={(e)=>{this.onDelLiData(name)}} className="items-nav__close"></div>                            
          </li> 
      )
  })
    return (
      <>
      <AppOneHeader/>
      <AppFilterProducts
        li = {li}
        state = {this.state.liData}
        accordion = {this.state.accordion}
        changeClassAccordion = {this.changeClassAccordion}/>
         <Swiper
            spaceBetween={1}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>Олег</SwiperSlide>
            <SwiperSlide>Мама</SwiperSlide>
            <SwiperSlide>Папа</SwiperSlide>
            <SwiperSlide>Бабушка</SwiperSlide>
          
        </Swiper>
    </>
    
    );
  }
}

export default AppOne;
