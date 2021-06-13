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
import Free from './components/pageno'

class App extends React.Component{
  render(){
      return (
        <>
         <Router>
           <Free/>
           <Navbar/>
           <ScrollToTop />
           <Switch>
             <Route exact path='/' exact component={Home}/>
             <Route exact path='/blogs' component={Blogs}/>
             <Route exact path='/Blog_read/Blog1' component={Blog1}/>
             <Route exact path='/about-us' component={AboutUs}/>
             <Route exact path='/services' component={Services}/>
             <Route exact path='/services2' component={Services2}/>
             <Route exact path='/services3' component={Services3}/>
             <Route exact path='/services4' component={Services4}/>
             <Route exact path='/services5' component={Services5}/>
             <Route exact path='/services6' component={Services6}/>
             <Route exact path='/services7' component={Services7}/>
             <Route exact path='/services8' component={Services8}/>
             <Route exact path='/contactus' component={ContactUs}/>
             <Route exact path='/signup' component={SignUp}/>
             <Route exact path='/signin' component={SignIn}/>
             <Route exact path='/Products/GirGhee' component={GirGhee}/>
             <Route exact path='/OurCollection/Immunity' component={Riceflour}/>
             <Route exact path='/OurCollection/Elixir-Of-Life' component={Spices}/>
             <Route exact path='/OurCollection/Ancient-Living' component={Pickles}/>
             <Route exact path='/OurCollection/Kingdom-Of-Spices' component={Pulses}/>
             <Route exact path='/OurCollection/Wakeup-Mood' component={Honey}/>
             <Route exact path='/OurCollection/Limited-Edition' component={Breakfast}/>
             <Route exact path='/cart' component={Cart}/>
             <Route exact path='/cart/verify' component={Verify}/>
             <Route exact path='/search' component={Search}/>
             <Route exact path='/products/:productId' component={GirGhee}></Route>
             <Route exact path='/category/:category' component={subCategories}></Route>
             <Route exact path='/terms&conditions' component={terms}></Route>
             <Route exact path='/privacy-policy' component={Privacy}></Route>
           </Switch>
           <Footer/>
         </Router>
         
        </>
      );
    }
}

export default App;
