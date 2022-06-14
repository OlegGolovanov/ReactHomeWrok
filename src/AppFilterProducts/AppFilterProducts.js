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
            {idH2: "headingOne", id: "collapseOne", dataBsTarget: "#collapseOne", ariaExpanded: "true", ariaControls: "collapseOne", class: "accordion-collapse", ariaLabelledby: "headingOne"},
            {idH2: "headingTwo", id: "collapseTwo", dataBsTarget: "#collapseTwo", ariaExpanded: "true", ariaControls: "collapseTwo", class: "accordion-collapse", ariaLabelledby: "headingTwo"},
            {idH2: "headingThree", id: "collapseThree", dataBsTarget: "#collapseThree", ariaExpanded: "true", ariaControls: "collapseThree", class: "accordion-collapse", ariaLabelledby: "headingThree"},          
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

        const accordion = this.state.checkboxData.map((item) => {
            return(
                <div class="accordion-item">
                    <h2 class="accordion-header" id={item.idH2}>
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
            </div>
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
                        <div class="accordion" id="accordionExample">
                            
                        </div>
                    </nav>
                </div>

                


            </section>
        )
    }
}
export default AppFilterProducts


