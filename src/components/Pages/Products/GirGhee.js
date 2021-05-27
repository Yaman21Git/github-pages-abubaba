import React, { Component } from 'react'
import { addToCart, addToWishlist, load } from '../product'
import { isAuthenticated } from '../auth'
import '../../../App.css'
import './Products.css'
import {Link, Redirect} from 'react-router-dom';
import imgstar from '../../../images2/4 start.png'


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
            hovered3:false
        }
    }

    componentDidMount = () => {
        const productId = this.props.match.params.productId;
        load(productId)
        .then(data => {
            if(data.error)
                console.log(data.error)
            else{
                this.setState({
                    product: data,
                    productId: productId
                })
            }
        });
    }

    addToCart = () => {
        const userId = isAuthenticated().user._id;
        const {productId, quantity} = this.state;
        const user = {
            id: userId,
            quantity: quantity
        }
        addToCart(productId, user)
        .then(data => {
            if(data.error)
                console.log(data.error)
            else 
                console.log("Product Added");
        })
    }

    addToWishlist = () => {

        if(!isAuthenticated()){
            this.setState({
                redirect: true
            })
            return;
        }
        const userId = isAuthenticated().user._id;
        const {productId} = this.state;
        const user = {
            id: userId
        }
        addToWishlist(productId, user)
        .then(data => {
            if(data.error)
                console.log(data.error)
            else 
                console.log("Product Added");
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

    handleInput = (event) => {
        const {quantity} = this.state;
    }

    render() {
        
        const {product, redirect, quantity} = this.state
        const { hovered1, hovered2, hovered3 } = this.state;
        const style1 = hovered1 ? { height:"25vw", marginTop:"-25%"} : {display:"none"};
        const style2 = hovered2 ? { height:"25vw", marginTop:"-25%"} : {display:"none"};
        const style3 = hovered3 ? { height:"25vw", marginTop:"-25%"} : {display:"none"};

        if(redirect)
            return <Redirect to="/signin"></Redirect>


        return (
            (product && <div>
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
                        <h2>₹ {product.price}</h2>
                        <p>
                            <br/>
                            Quantity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <button onClick={this.decrementValue} className="quantity-btn" > - </button>
                            <input type="text" value={quantity} onChange={this.handleInput} size="2" className="number"/>
                            <button onClick= {this.incrementValue} className="quantity-btn2" > + </button>
                        </p>

                        {isAuthenticated() ? <button className="spnbtn1" onClick={this.addToCart}>Add to Cart +</button> : <Link to="/signin"><button className="spnbtn1">Add to Cart +</button></Link> }
                        <p><span><button className="wishlist" onClick={this.addToWishlist}><i class="far fa-heart"></i> Wishlist</button></span>
                        <span><button className="wishlist"><i class="fas fa-share-alt"></i> Share</button></span></p>
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
                  <Link to="/Products/GirGhee"><span className="btn"><button className="spnbtn">Write a Review.</button></span></Link>
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
                  <h3 className="marginBtm"><a className="viewall" href="/Products/GirGhee">View all reviews</a></h3>
                </div>
                </div>
                <div className="peopleAlso">
                  <h2>People has also Purchased</h2>
                </div>
              </div>)
      );
    }
};



export default GirGhee;
    
