import "./AppFilterProducts.sass"
import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"
import { Component } from "react"


class AppFilterProducts extends Component {
    state = {
        liData: [
            {name: "NordicTrack C100"},
            {name: "Clear Fit Luxury LT.20"},
            {name: "Ammity ATM 720 TFT+"}
        ],
    }
    onDel = (name) => {
        this.setState({
            liData: this.state.liData.filter(item=> {
                return item.name != name                      
            })
        })      
    }

    render(){
        const li = this.state.liData.map(({name}) => {
            return(
                <li key = {name} className="items-nav__product">
                    <a href="#" className="items-nav__item">{name}</a>
                    <div onClick={(e)=>{this.onDel(name)}} className="items-nav__close"></div>                            
                </li> 
            )
        })
        
        return(
            <section className="AppFilterProducts"> 
                <div className="_container">            
                    <nav className="nav ">
                        <h2 className="nav__title">Фильтр товаров</h2>                    
                        <div className="nav__item items-nav">
                            <div className="items-nav__title">Товары для сравнения</div>
                                <ul className="items-nav__wrapper">
                                    {li}                              
                                </ul>                                              
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}
export default AppFilterProducts


