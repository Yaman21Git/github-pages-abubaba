import React, { Component } from 'react'
import { addToCart, load, getProductsByCategoty } from '../product'
import { isAuthenticated } from '../auth'
import '../../../App.css'
import './Products.css'
import {Link, Redirect} from 'react-router-dom';
import imgstar from '../../../images2/4 start.png'
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'
import img0 from '../../../images2/161 Choco Nutty.jpg'
import img1 from '../../../images2/191-Mango-Pickle.jpg'
import img2 from '../../../images2/168-Blueberries.jpg'
import ThreeDotsLoader from './../../ThreeDotsLoader'
import {FacebookShareButton, WhatsappShareButton, TwitterShareButton} from 'react-share'
import {FacebookIcon, WhatsappIcon, TwitterIcon} from 'react-share'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class GirGhee extends Component{
    constructor(){
        super()
        this.state = {
            userId: "",
            productId: "",
            product : "",
            quantity: 1,
            images: "",
            redirect: false,
            hovered1:false,
            hovered2:false,
            hovered3:false,
            redirectToCart: "",
            index: [[0,1,2]],
            suggested: "",
            img: [img0, img1, img2],
            text: ['Choco Nutty Granola', 'Mango Pickle', 'Blueberries'],
            path: ['/products/60aa9f242e79914b043dc0b4','/products/60aa6cbe3f3ca14f407dc624','/products/60aaa2852e79914b043dc0b9'],
            price: [380, 320, 380],
            url: String(window.location),
            open: false
        }
    }

    componentDidMount = () => {
        const productId = this.props.match.params.productId;
        load(productId)
        .then(data => {

            if(data.Error){
                this.setState({ product: null})
                return;
            }

            this.setState({
                product: data,
                productId: productId
            })
            const val = {name: data.id}
            getProductsByCategoty(val)
            .then(result => {
                this.setState({
                    suggested: result
                })
            });
        });
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.match.params.productId === this.state.productId)
            return;
        else
            window.location.reload()
    }

    addToCart = (str) => {
        const {product, productId, quantity} = this.state
        if (!(localStorage.getItem("cart"))){
            console.log(quantity);
            const details = {
                id: productId,
                name: product.name,
                quantity: quantity
            }
            localStorage.setItem("cart", JSON.stringify([details]));
        }
        else{
            var flag = false;
            var array = JSON.parse(localStorage.getItem("cart"));
            
            console.log(array);
            for(var i=0; i<array.length; i++){
                if(productId === array[i].id){
                    flag = true;
                    array[i].quantity += quantity;
                }
            }
            if(!flag){
                const details = {
                    id: productId,
                    name: product.name,
                    quantity: quantity
                }
                array.push(details);
            }
            localStorage.setItem("cart", JSON.stringify(array));
        }
        toast.success(<div style={{ position: 'relative' }}>
            <h6>Item added to cart</h6>
            </div>, {
            position: "top-center",
            autoClose: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
        });
        
        this.setState({
            redirectToCart: str
        })
    }

    onMousehover1 = e => {
        this.setState({ hovered1: true });
    };
    onMouseout1 = e => {
        this.setState({ hovered1: false });
    };

    onMousehover2 = e => {
        this.setState({ hovered2: true });
    };
    onMouseout2 = e => {
        this.setState({ hovered2: false });
    };

    onMousehover3 = e => {
        this.setState({ hovered3: true });
    };
    onMouseout3 = e => {
        this.setState({ hovered3: false });
    };

    incrementValue = () => {
        const { quantity } = this.state;
        if(quantity < 10)
            this.setState({
                quantity: quantity + 1
            }) 
    }

    decrementValue = () => {
        const { quantity } = this.state;
        if(quantity > 1)
            this.setState({
                quantity: quantity - 1
            }) 
            return;
    }

    shareButton = () => {
        var val = this.state.open;
        val = (val ? false : true);
        this.setState({
            open: val
        })
    }
    handleInput = (event) => {
        const {quantity} = this.state;
    }

    
    render() {
        const {product, redirect, productId, quantity, redirectToCart, suggested, index, img, path, price, text, open, url} = this.state
        const { hovered1, hovered2, hovered3 } = this.state;
        const style1 = window.innerWidth>680 ? (hovered1 ? { height:"25vw", marginTop:"-25%"} : {display:"none"}) : (hovered1 ? {position:"absolute",marginTop:"-144%",height:"108vw"} : {display:"none"});
        const style2 = window.innerWidth>680 ? (hovered2 ? { height:"25vw", marginTop:"-25%"} : {display:"none"}) : (hovered2 ? {position:"absolute",marginTop:"-144%",height:"108vw"} : {display:"none"});
        const style3 = window.innerWidth>680 ? (hovered3 ? { height:"25vw", marginTop:"-25%"} : {display:"none"}) : (hovered3 ? {position:"absolute",marginTop:"-144%",height:"108vw"} : {display:"none"});
        
        if(redirect)
            return <Redirect to="/signin"></Redirect>

        if(redirectToCart)
            return <Redirect to="/cart"></Redirect>

        return (
            (product ? (<div>
                <ToastContainer />
                <div className="pdtImages">
                    <div className="images">
                        <img className="full"  src={product.photos[0]} />
                        <img className="small first-one" src={product.photos[1]} onMouseOver={this.onMousehover1} onMouseOut={this.onMouseout1}/>
                        <img className="small" src={product.photos[2]} onMouseOver={this.onMousehover2} onMouseOut={this.onMouseout2}/>
                        <img className="small" src={product.photos[3]} onMouseOver={this.onMousehover3} onMouseOut={this.onMouseout3}/>
                    </div>
                    <div className="pdtMatter">
                        {hovered1 && <div className="hover1" style={style1}><img className="imghovered" src={product.photos[1]}/> </div>}
                        {hovered2 && <div className="hover2" style={style2}><img className="imghovered" src={product.photos[2]}/> </div>}
                        {hovered3 && <div className="hover3" style={style3}><img className="imghovered" src={product.photos[3]}/> </div>}
                        <h1>{product.name}</h1>
                        <h2>₹ {product.price}.00</h2>
                        <p>
                            <br/>
                            Quantity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={this.decrementValue} className="quantity-btn" > - </button>
                            <input type="text" value={quantity} onChange={this.handleInput} size="2" className="number"/>
                            <button onClick= {this.incrementValue} className="quantity-btn2" > + </button>
                        </p>

                        <button className="spnbtn1" onClick={() => this.addToCart(true)}>Buy Now</button>
                        <p><span><button className="wishlist" onClick={() => this.addToCart(false)}>Add To Cart</button></span>
                        <span><button className="wishlist" onClick={() => this.shareButton()}><i class="fas fa-share-alt" ></i> Share</button></span>
                        {open && <span className="sharebtns">
                                <FacebookShareButton url={url} quote={"I loved this and would recommend everyone to try this out"} hashtag="AbubabaOrganic">
                                    <FacebookIcon localFillColor="white" round={true} size={"2.5rem"}></FacebookIcon>
                                </FacebookShareButton>
                                <WhatsappShareButton url={url} quote={"I loved this and would recommend everyone to try this out"} hashtag="AbubabaOrganic">
                                    <WhatsappIcon localFillColor="white" round={true} size={"2.5rem"}></WhatsappIcon>
                                </WhatsappShareButton>
                                <TwitterShareButton url={url} quote={"I loved this and would recommend everyone to try this out"} hashtag="AbubabaOrganic">
                                    <TwitterIcon localFillColor="white" round={true} size={"2.5rem"} ></TwitterIcon>
                                </TwitterShareButton>
                        </span>}
                        </p><br/>
                        <p className="delivery">{"*Product will be delivered within 3-4 days"}</p>
                    </div>
                </div>
                <div className="productDes">
                    <h2>Product Description</h2>
                    <hr></hr>
                    { product.description.map( (des, i) => (
                        <p key={i}>{des}</p>
                    ))}
                    <br/>
                    
                    
                    <h3>Ingredients:</h3>
                    <ul>
                    { product.ingredients.map( (ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                    </ul>


                    <h3>Benefits:</h3>
                    <ul>
                      { product.benefits.map( (benefit, i) => (
                          <li key={i}>{benefit}</li>
                      ))}
                    </ul>

                </div>
                <div className="reviews">
                <div className="review-container">
                  <h2>Customers Reviews</h2>
                  <span className="span1"><img src={imgstar}/></span><span className="span2">Based on {product.rating.total / 5} reviews.</span>
                  <Link to={`/products/${productId}`}><span className="btn"><button className="spnbtn">Write a Review.</button></span></Link>
                  <ul>
                  { product.reviews.map((review, i) => (
                      <li className="remBullet" key={i}>
                        <span className="span0">{review.summary}</span>
                        <span className="span1"><img src={imgstar}/></span>
                        <p className="p1">{review.name} {review.date}</p>
                        <p className="p2">{review.details}</p>
                      </li>
                  ))}
                  </ul>
                  <h3 className="marginBtm"><Link className="viewall" to={`/products/${productId}`}>View all reviews</Link></h3>
                </div>
                </div>
                <div className='trends'>
                <div className="peopleAlso"><h2>People also Purchased</h2></div>
                    {index && <div className='trends_container'>
                        <div className='trends_wrapper'>
                        {index.map( (array, i) => (
                            <ul className='trends_items' style={{width: "100%" }}>
                            { array.map( (val, j) => (
                                (suggested[val] ? (<TrendingItem src={suggested[val].photos[0]} text={suggested[val].name} path={`/products/${suggested[val]._id}`} price={suggested[val].price}/>) : (<TrendingItem src={img[val]} path={path[val]} price={price[val]} text={text[val]}/>))
                            ))}
                            </ul>
                        ))}   
                        </div>
                    </div>}
                </div>
              </div>) : (<ThreeDotsLoader/>))
      );
    }
};



export default GirGhee;
