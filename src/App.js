import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Blogs from './components/Pages/Blogs'
import AboutUs from './components/Pages/AboutUs'
import Services from './components/Pages/Services'
import SignUp from './components/Pages/SignUp'
import SignIn from './components/Pages/SignIn'
import ContactUs from './components/Pages/ContactUs';
import Footer from './components/Footer'
//import Cards from './components/Cards';

class App extends React.Component{
  render(){
      return (
        <>
         <Router>
           <Navbar/>
           <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/blogs' component={Blogs}/>
             <Route path='/about-us' component={AboutUs}/>
             <Route path='/services' component={Services}/>
             <Route path='/contactus' component={ContactUs}/>
             <Route path='/signup' component={SignUp}/>
             <Route path='/signin' component={SignIn}/>
           </Switch>
           <Footer/>
         </Router>
         
        </>
      );
    }
}

export default App;
