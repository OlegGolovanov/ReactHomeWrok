import "../sass/libs/fonts.scss"
import "../sass/libs/bootstrap-reboot.min.scss"
import { Component } from "react"


class AppFormProducts extends Component {
    state = {
        name: "",
        id: ''
    }
    id = 1

    onAdd = (e) => {
        console.log(e.target.value);
        e.preventDefault()
        this.setState({
            name: e.target.value
        })
        this.setState({
            id: this.state.id++
        })
    }


    render(){       
        return(
            <form>
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
                <button onClick={(e)=>{this.props.addState(e, this.state.name)}} type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
export default AppFormProducts


