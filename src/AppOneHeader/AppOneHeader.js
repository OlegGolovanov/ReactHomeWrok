import "./AppOneHeader.sass"
import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"



const AppOneHeader = () => {
    return(
        <section className="AppOneHeader"> 
            <nav className="AppOneHeader__nav nav-AppOneHeader _container">
                <li className="nav-AppOneHeader__li">about us</li>
                <li className="nav-AppOneHeader__li">.</li>
                <li className="nav-AppOneHeader__li">work</li>
                <li className="nav-AppOneHeader__li nav-AppOneHeader__li_logo "></li>
                <li className="nav-AppOneHeader__li">shop</li>
                <li className="nav-AppOneHeader__li">.</li>
                <li className="nav-AppOneHeader__li">contact</li>
            </nav>
        </section>
    )
}

export default AppOneHeader