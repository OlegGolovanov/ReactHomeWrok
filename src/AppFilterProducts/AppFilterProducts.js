import "./AppFilterProducts.sass"
import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"
import { Component } from "react"


class AppFilterProducts extends Component {
        

    render(){
        const div = this.props.liData.map(({name}) => {
            console.log(name);
            return(
                <div key ={name}>
                    <li>
                        <label for={name}>{name}</label>
                        <input id={name} type="checkbox" placeholder/>
                    </li>
                   <li key = {name} className="items-nav__product">
                        <a href="#" className="items-nav__item">{name}</a>
                        <div onClick={(e)=>{this.props.onDelLiData(name)}} className="items-nav__close"></div>                          
                    </li>  
                </div>
                
            )
          })
        const {changeClassAccordion, accordion} = this.props   
        return(
            <section className="AppFilterProducts"> 
                <div className="_container">            
                    <nav className="nav ">
                        <h2 className="nav__title">Фильтр товаров</h2>                    
                        <div className="nav__item items-nav">
                            <div className="items-nav__title">Товары для сравнения</div>
                                <ul className="items-nav__wrapper">
                                    {div}                              
                                </ul>                                              
                        </div>
                        <div className="accordion" id="accordionExample">
                            
                        </div>
                    </nav>
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button 
                            className={`accordion-button ${accordion[0].collapsed}`} 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#collapseOne" 
                            aria-expanded="true" 
                            aria-controls="collapseOne"
                            onClick={(e)=> changeClassAccordion(e.target.getAttribute("data-bs-target"))}
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className={`accordion-collapse collapse ${accordion[0].show}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>



                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                        <button onClick={(e)=> changeClassAccordion(e.target.getAttribute("data-bs-target"))} className={`accordion-button ${accordion[1].collapsed}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                        </h2>
                        <div  id="collapseTwo" className={`accordion-collapse collapse ${accordion[1].show}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div style={{transition: "1s all"}} className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                        <button onClick={(e)=> changeClassAccordion(e.target.getAttribute("data-bs-target"))} className={`accordion-button ${accordion[2].collapsed}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                        </h2>
                        <div id="collapseThree" className={`accordion-collapse collapse ${accordion[2].show}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                </div>

                


            </section>
        )
    }
}
export default AppFilterProducts


