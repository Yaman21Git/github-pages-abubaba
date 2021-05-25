import React, { Component } from "react";
import '../../App.css'
import {Button} from '../button'
import {Link, Redirect} from 'react-router-dom'
import { signup , authenticate, isAuthenticated} from '../api/auth'


class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
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
        const { name, email, password } = this.state
        const user = { name: name, email: email, password: password };

        signup(user)
        .then(data => {
            if(data.error)
                this.setState({error: data.error, loading: false})
            else
                authenticate(data , () => { this.setState({redirectToRefer: true, loading: false, error: ""}) });
        })   
    }

    render() {

        const {redirectToRefer, error, loading} = this.state;

        if(isAuthenticated().user)
            return <Redirect to="/"></Redirect>
        return(
            <>
            <div>
                <div className="signup-container">
                    <h1>My Account</h1>
                    <div className="signup"><div className="sRight"><a href="/signup" style={{textDecoration:"none", color:"white"}}>SIGN UP</a></div></div>
                    <div className="signin"><div className="sLeft"><a href="/signin" style={{textDecoration:"none", color:"black"}}>SIGN IN</a></div></div>
                    
                    <form className="mainForm">

                        { redirectToRefer && <div>
                            <p>Signup Successful. Please <Link to="/signin">Sign In</Link></p> <br/>
                        </div>}
                        { error && <div><h3>***{error}***</h3> <br/> </div>}
                        { loading && <h2>Loading...</h2>}
                        
                        <p className="p1"><input className="input-form" type="text" placeholder="Full Name" onChange={this.handleChange("name")}  value={this.state.name}></input></p>
                        <p className="p1"><input className="input-form" type="email" placeholder="Email-Address" onChange={this.handleChange("email")} value={this.state.email}></input></p>
                        <p className="p1"><input className="input-form" type="password" placeholder="Set Password" onChange={this.handleChange("password")}  value={this.state.password}></input></p>
                        <p className="p1"><input className="input-form" type="password" placeholder="Confirm Password" onChange={this.handleChange("password2")}  value={this.state.password2}></input></p>
                        <p className="p2"><input type="checkbox"></input><label>I agree all statements <u><a href="https://abubabaorganic.com/privacy-policy/">Terms & Condition</a></u></label></p>
                        <p className="p2"><input type="checkbox"></input><label>Subscribe to newsletter for latest Updates</label></p>
                        <div style={{background:"black", margin:"0 auto", width:"6.3%"}}><Button buttonStyle="btn--outline" onClick = {this.clickSubmit("false")}>SIGN UP</Button></div>
                        <p>Already have an account? <a href="/signin">Login</a></p>
                    </form>
                </div>
            </div>
            </>
        );
    }
}
export default SignUp;
