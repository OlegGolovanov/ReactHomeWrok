import './AppOne.css';
import AppOneHeader from "../AppOneHeader/AppOneHeader"
import AppFilterProducts from "../AppFilterProducts/AppFilterProducts"
import {Component} from "react"

class AppOne extends Component {
  state = {
    liData: [
        {name: "NordicTrack C100"},
        {name: "Clear Fit Luxury LT.20"},
        {name: "Ammity ATM 720 TFT+"}
    ],
    accordion: [
      {show: "show", collapsed: "collapsed"}
    ],
  }

  onDelLiData = (name) => {
    this.setState({
        liData: this.state.liData.filter(item=> {
            return item.name !== name                      
        })
    })     
  }

  changeClassAccordion = () => {
    this.setState({
      show: this.state
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
        liData = {li}
        state = {this.state.liData}/>
    </>
    );
  }
}

export default AppOne;
