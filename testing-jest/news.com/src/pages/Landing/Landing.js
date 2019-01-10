import React, {Component} from "react";
import "./landing.css"
import {Link} from "react-router-dom"
import Input from "../../components/Input/Input"

class Landing extends Component {

  state= {

  }

  handleChange = e => {
   const {name, value} = e.target

   this.setState({
     [name]: value
   }, ()=>console.log(this.state))
  }

  submitForm = e => {
    e.preventDefault()
  }

  render () {

    return (
      <div>
       <form onSubmit={this.submitForm}>
         <Input name="name" type="text" onChange={this.handleChange}/>
         <Link to={{ pathname: '/Home', state: { name: this.state.name} }}><Input type="submit" value="See the news!"/></Link>
         
       </form>  
      </div>  
    )
  }
}

export default Landing;