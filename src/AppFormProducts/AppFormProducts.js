import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"
import { Component } from "react"


class AppFormProducts extends Component {
    state = {
        name: ""        
    }
    

    onAdd = (e) => {
        e.preventDefault()       
        this.setState({
            name: e.target.value
        })                  
    }

    onResetFormAdd = (e) => {
        this.props.addState(e, this.state.name)
        this.setState({
            name: ""
        })
    }


    render(){       
        return(
            <form >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                    onInput={(e)=> {this.onAdd(e)}}
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>                
                <button onClick={(e)=>{this.onResetFormAdd(e)}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default AppFormProducts


