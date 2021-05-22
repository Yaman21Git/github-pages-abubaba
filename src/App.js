import React from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Blogs from './components/Pages/Blogs'
import Blog1 from './components/Pages/Blog_read/Blog1'
import AboutUs from './components/Pages/AboutUs'
import Services from './components/Pages/Services'
import Services2 from './components/Pages/Services2'
import Services3 from './components/Pages/Services3'
import Services4 from './components/Pages/Services4'
import Services5 from './components/Pages/Services5'
import Services6 from './components/Pages/Services6'
import Services7 from './components/Pages/Services7'
import Services8 from './components/Pages/Services8'
import SignUp from './components/Pages/SignUp'
import SignIn from './components/Pages/SignIn'
import ContactUs from './components/Pages/ContactUs';
import Footer from './components/Footer';
import GirGhee from './components/Pages/Products/GirGhee'
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
             <Route path='/Blog_read/Blog1' component={Blog1}/>
             <Route path='/about-us' component={AboutUs}/>
             <Route path='/services' component={Services}/>
             <Route path='/services2' component={Services2}/>
             <Route path='/services3' component={Services3}/>
             <Route path='/services4' component={Services4}/>
             <Route path='/services5' component={Services5}/>
             <Route path='/services6' component={Services6}/>
             <Route path='/services7' component={Services7}/>
             <Route path='/services8' component={Services8}/>
             <Route path='/contactus' component={ContactUs}/>
             <Route path='/signup' component={SignUp}/>
             <Route path='/signin' component={SignIn}/>
             <Route path='/Products/GirGhee' component={GirGhee}/>
           </Switch>
           <Footer/>
         </Router>
         
        </>
      );
    }
}

export default App;
