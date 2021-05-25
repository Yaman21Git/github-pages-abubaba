import React, { Component } from 'react'
import '../../App.css'
import { Button } from '../button'
import '../Footer.css'
import {Link} from 'react-router-dom';
import {searchByWord} from './product'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            word: "",
            products: ""
        }
    }

    handleClick = () => {
        const {word} = this.state;
        const key = {word: word};
        searchByWord(key)
        .then(data => {
          if(data.error)
              console.log(data.error);
          else
              this.setState({products: data}) 
      })
    }

    render(){
      const {word, products} = this.state
      console.log(products, word);
      return (
        <>
          <div className="search-item-container">
              <div className="navbar-hidden">
                <div style={{width:"50%",float:"left",paddingTop:"2%"}}><h1 style={{marginLeft:"8%", textAlign:"left",fontSize:"4vw"}}>Your searched items will appear below:</h1></div>
                <div className="search-btn">
                  <input className="main-search" placeholder="What do you want to search?" name="word" value={word} onChange = {(event) => this.setState({word: event.target.value})}></input>
                  <button className="redbtn" onClick={this.handleClick}>SEARCH</button>
                </div>
                { products && products.map((product, i) => (
                  <p>{product.name}</p>
                ))}
              </div> 
          </div>
        </>
      );
    }
}
export default Search
