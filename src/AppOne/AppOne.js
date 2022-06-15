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
        state = {this.state.liData}
        changeClassAccordion = {this.changeClassAccordion}/>
    </>
    );
  }
}

export default AppOne;
