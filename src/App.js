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
import Riceflour from './components/Pages/OurCollection/rice&flour'
import Spices from './components/Pages/OurCollection/spices'
import Pickles from './components/Pages/OurCollection/pickles&chutneys'
import Pulses from './components/Pages/OurCollection/pulses'
import Honey from './components/Pages/OurCollection/honey'
import Breakfast from './components/Pages/OurCollection/breakfast'
import GirGhee from './components/Pages/Products/GirGhee'
//import Cards from './components/Cards';
import ScrollToTop from './components/scrollToTop'
import Cart from './components/Pages/Carts'
import Search from './components/Pages/Search'
import subCategories from './components/Pages/OurCollection/subCategories';
import Verify from './components/Pages/Verify'
import terms from './components/Pages/terms&con'
import Privacy from './components/Pages/PrivacyPolicy'

class App extends React.Component{
  render(){
      return (
        <>
         <Router>
           <Navbar/>
           <ScrollToTop />
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
             <Route path='/OurCollection/Immunity' component={Riceflour}/>
             <Route path='/OurCollection/Elixir-Of-Life' component={Spices}/>
             <Route path='/OurCollection/Ancient-Living' component={Pickles}/>
             <Route path='/OurCollection/Kingdom-Of-Spices' component={Pulses}/>
             <Route path='/OurCollection/Wakeup-Mood' component={Honey}/>
             <Route path='/OurCollection/Limited-Edition' component={Breakfast}/>
             <Route path='/cart' component={Cart}/>
             <Route path='/cart/verify' component={Verify}/>
             <Route path='/search' component={Search}/>
             <Route path='/products/:productId' component={GirGhee}></Route>
             <Route path='/category/:category' component={subCategories}></Route>
             <Route path='/terms&conditions' component={terms}></Route>
             <Route path='/privacy-policy' component={Privacy}></Route>
           </Switch>
           <Footer/>
         </Router>
         
        </>
      );
    }
}

export default App;
