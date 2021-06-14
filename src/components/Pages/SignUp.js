import React, { Component } from "react";
import '../../App.css'
import {Button} from '../button'
import {Link, Redirect} from 'react-router-dom'
import { signup , authenticate, isAuthenticated} from './auth'


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

    isValid = () => {
        const { check, password, password2 } = this.state
        const x = document.getElementById('check');
        if (password !== password2) {
            this.setState({
                error: "Passwords do not match",
                loading: false
            })
            return false;
        }

        if(!x.checked)
        {
            this.setState({
                error: "Please Accept The Terms and Conditions ",
                loading: false
            })
            return false;
        }
        return true;
    }

    clickSubmit = str => event => {
        event.preventDefault();
        this.setState({loading: true, error: ""})
        const { name, email, password } = this.state
        const user = { name: name, email: email, password: password, phone: "", address: "" };

        if(this.isValid()){
            signup(user)
            .then(data => {
                if(data.error)
                    this.setState({error: data.error, loading: false})
                else
                    authenticate(data , () => { this.setState({redirectToRefer: true, loading: false, error: ""}) });
            })   
        }
    }

    render() {

        const {redirectToRefer, error, loading} = this.state;

        if(isAuthenticated().user)
            return <Redirect to="/"></Redirect>
        return(
            <>
            <div className="SIGNUP">
                <div className="signup-container">
                    <h1 style={{marginBottom:"0%"}}>My Account</h1>
                    <div className="signup"><div className="sRight"><Link to="/signup" style={{textDecoration:"none", color:"white"}}><a href="/signup" style={{textDecoration:"none", color:"white"}}>SIGN UP</a></Link></div></div>
                    <div className="signin"><div className="sLeft"><Link to="/signin" style={{textDecoration:"none", color:"black"}}><a href="/signin" style={{textDecoration:"none", color:"black"}}>SIGN IN</a></Link></div></div>
                    
                    <form className="mainForm">

                        { redirectToRefer && <div>
                            <p className="success-message">Signup Successful. Please <Link to="/signin">Sign In</Link></p> <br/>
                        </div>}
                        { error && <div><p className="error-message">***{error}***</p> <br/> </div>}
                        { loading && <h2 className="loading-message">Loading...</h2>}
                        
                        <p className="p1"><input className="input-form" type="text" placeholder="Full Name" onChange={this.handleChange("name")}  value={this.state.name}></input></p>
                        <p className="p1"><input className="input-form" type="email" placeholder="Email-Address" onChange={this.handleChange("email")} value={this.state.email}></input></p>
                        <p className="p1"><input className="input-form" type="password" placeholder="Set Password" onChange={this.handleChange("password")}  value={this.state.password}></input></p>
                        <p className="p1"><input className="input-form" type="password" placeholder="Confirm Password" onChange={this.handleChange("password2")}  value={this.state.password2}></input></p>
                        <p className="p2"><input type="checkbox" id="check"></input><label>I agree all statements <u><Link to="/terms&conditions">Terms & Condition</Link></u></label></p>
                        <p className="p2"><input type="checkbox"></input><label>Subscribe to newsletter for latest Updates</label></p>
                        <button className="signupBtn" onClick = {this.clickSubmit("false")}>SIGN UP</button>
                        <p className="haveAcc">Already have an account? <Link to="/signin"><a href="/signin">Login</a></Link></p>
                    </form>
                </div>
            </div>
            </>
        );
    }
}
export default SignUp;
