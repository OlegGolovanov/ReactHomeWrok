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

        checkboxData: [
            {name: "Сlear-fit"},
            {name: "Diadora"},
            {name: "Hasttings"},
            {name: "Carbon-fitness"},
            {name: "Nordic Track"}           
        ]
    }
    onDelLiData = (name) => {
        this.setState({
            liData: this.state.liData.filter(item=> {
                return item.name !== name                      
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

        const checkbox = this.state.checkboxData.map(({name}) => {
            return(
                <li key = {name} className="items-nav__product">
                    <input type="checkbox"/>
                    <div>{name}</div>
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
                        <div className="nav__item items-nav">
                            <div className="items-nav_manufacturer">
                                <div className="items-nav__title">Производитель:</div>
                                <div className="items-nav__icons">аыва</div>
                            </div>
                            <ul className="items-nav__wrapper">
                                {checkbox}                            
                            </ul>                                              
                        </div>
                    </nav>
                </div>
            </section>
        )
    }
}
export default AppFilterProducts


