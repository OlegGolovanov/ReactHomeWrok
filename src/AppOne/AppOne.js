import './AppOne.sass';

import AppOneHeader from "../AppOneHeader/AppOneHeader"
import AppFilterProducts from "../AppFilterProducts/AppFilterProducts"
import AppSliderSwiper from "../AppSliderSwiper/AppSliderSwiper"
import AppFormProducts from "../AppFormProducts/AppFormProducts"

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
      {lable: brand, id: "brand", show: false},
      {lable: bulls, id: "bulls", show: false},
      {lable: cocaCola, id: "cocaCola", show: false},
      {lable: football, id: "football", show: false},
      {lable: guchi, id: "guchi", show: false},
      {lable: lacoste, id: "lacoste", show: false},
      {lable: nike, id: "nike", show: false},
      {lable: puma, id: "puma", show: false},
      {lable: reebork, id: "reebork", show: false},      
      {lable: sport, id: "sport", show: false}
    ]
  }  

  showDataSlide = () => {      
      return this.state.dataSlide.filter(item => {
          return item.show == true        
        })       
  }

  onChangeShowDataSlide = (id) => {
      this.setState({
        dataSlide: this.state.dataSlide.map(item=> {
          if(item.id === id) {
            return {...item, show: !item.show}          
          }
          return item      
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

  addState = (e, name) => {
    e.preventDefault()
    const newLidata = this.state.liData
    newLidata.push({name})

    this.setState({
      liData: newLidata
    })
  }
  
  render(){
    return (
      <>
        <AppOneHeader/>
        <div className="_wrapper">
          <AppFilterProducts
            onDelLiData = {this.onDelLiData}
            liData = {this.state.liData}
            accordion = {this.state.accordion}
            changeClassAccordion = {this.changeClassAccordion}
            dataSlide = {this.state.dataSlide}
            onChangeShowDataSlide = {this.onChangeShowDataSlide}
            showDataSlide = {this.showDataSlide}
          />
          <AppFormProducts addState={this.addState}/>
        </div>
        <AppSliderSwiper dataSlide = {this.showDataSlide()}/>        
      </>
    );
  }
}

export default AppOne;
