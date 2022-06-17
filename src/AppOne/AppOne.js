import './AppOne.css';
import AppOneHeader from "../AppOneHeader/AppOneHeader"
import AppFilterProducts from "../AppFilterProducts/AppFilterProducts"
import AppSliderSwiper from "../AppSliderSwiper/AppSliderSwiper"
import {Component} from "react"


// Import img
import brand from "../img/AppSliderSwiper/brand.jpeg";
import bulls from "../img/AppSliderSwiper/bulls.png";
import cocaCola from "../img/AppSliderSwiper/CocaCola.jpeg";
import football from "../img/AppSliderSwiper/football.jpeg";
import guchi from "../img/AppSliderSwiper/guchi.jpeg";
import lacoste from "../img/AppSliderSwiper/Lacoste.jpg";
import nike from "../img/AppSliderSwiper/nike.jpeg";
import puma from "../img/AppSliderSwiper/puma.jpeg";
import reebork from "../img/AppSliderSwiper/reebork.png";
import sport from "../img/AppSliderSwiper/sport.jpeg";


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
    dataSlide: [
        {lable: brand, id: "brand", show: true},
        {lable: bulls, id: "bulls", show: true},
        {lable: cocaCola, id: "cocaCola", show: true},
        {lable: football, id: "football", show: true},
        {lable: guchi, id: "guchi", show: true},
        {lable: lacoste, id: "lacoste", show: true},
        {lable: nike, id: "nike", show: true},
        {lable: puma, id: "puma", show: true},
        {lable: reebork, id: "reebork", show: true},      
        {lable: sport, id: "sport", show: true},
    ],  

  }

  

  showDataSlide = () => {
    this.setState({
      dataSlide: this.state.dataSlide.filter(({show})=> {
          return show === true        
      })
    })
  }

  onChangeShowDataSlide = (id) => {
    this.setState({
      dataSlide: this.state.dataSlide.map(item => {            
        if(item.id === id) {  
          item.show = !item.show        
          // return {...item, show: !item.show}
          return item
        }
        return
      })
    })
  }


  onDelLiData = (name) => {
    this.setState({
        liData: this.state.liData.filter(item=> {
            return item.name !== name                      
        })
    })     
  }

  changeClassAccordion = (dataAttribute) => {
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
    return (
      <>
        <AppOneHeader/>
        <AppFilterProducts
          onDelLiData = {this.onDelLiData}
          liData = {this.state.liData}
          accordion = {this.state.accordion}
          changeClassAccordion = {this.changeClassAccordion}
          dataSlide = {this.state.dataSlide}
          onChangeShowDataSlide = {this.onChangeShowDataSlide}
          showDataSlide = {this.showDataSlide}
        />
        <AppSliderSwiper dataSlide = {this.state.dataSlide}/>        
      </>
    );
  }
}

export default AppOne;
