import React, { Component } from "react";
import '../../App.css'
import {Button} from '../button'
import { Redirect} from 'react-router-dom'
import { signin , authenticate, isAuthenticated} from '../api/auth'


class SignIn extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToRefer: false,
            loading: false
        }
    }

    handleChange = (str) => (event) => {
        this.setState({ error: "" })
        this.setState({
            [str]: event.target.value
        });
    };

    clickSubmit = str => event => {
        event.preventDefault();
        this.setState({loading: true, error: ""})
        const { email, password } = this.state
        const user = { email: email, password: password };
        console.log(user);
        signin(user)
        .then(data => {
            if(data.error)
                this.setState({error: data.error, loading: false})
            else
                authenticate(data , () => { this.setState({redirectToRefer: true, loading: false}) });
        })   
    }

    render() {

        const {redirectToRefer, error, loading} = this.state;
        if(redirectToRefer || isAuthenticated().user)
            return <Redirect to="/"></Redirect>
        return(
            <>
            <div>
                <div className="signin-container" style={{height:"500px"}}>
                    <h1>My Account</h1>
                    <div className="signup"><div className="sRight" style={{background:"white"}}><a href="/signup" style={{textDecoration:"none", color:"black"}}>SIGN UP</a></div></div>
                    <div className="signin"><div className="sLeft" style={{background:"black"}}><a href="/signin" style={{textDecoration:"none", color:"white"}}>SIGN IN</a></div></div>
                    <form className="mainForm">
                        
                        { error && <div><h3>***{error}***</h3> <br/> </div>}
                        { loading && <h2>Loading...</h2>}
                        <p className="p1"><input className="input-form" type="email" placeholder="Email-Address" onChange={this.handleChange("email")} value={this.state.email}></input></p>
                        <p className="p1"><input className="input-form" type="password" placeholder="Password"  onChange={this.handleChange("password")}  value={this.state.password}></input></p>
                        
                        <p style={{marginRight:"330px"}}><input type="checkbox"></input><label> Remember me</label></p>
                        
                        <div style={{background:"black", margin:"0 auto", width:"6.3%"}}><Button buttonStyle="btn--outline" onClick={this.clickSubmit("false")}>SIGN IN</Button></div>
                        <p>Create Account <a href="/signup">SIGN UP</a></p>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default SignIn;
