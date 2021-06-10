import React, { Component } from 'react'
import '../../App.css'
import '../Footer.css'
import {searchByWord} from './product'
import TrendingItem from '../TrendingItems'
import '../Trending.css'

class Search extends Component{
    constructor(){
        super()
        this.state = {
            word: "",
            products: "",
            index: ""
        }
    }

    handleClick = () => {
        var {word, index} = this.state;

        if(word === ""){
            console.log(word);
            return;
        }

        const key = {word: word};
        searchByWord(key)
        .then(data => {
            if(data.error)
                console.log(data.error);
            else{

                this.setState({products: data})
            
                const sz = data.length;
                var x = parseInt( (sz + 2)/3 );
                index = new Array(x);
                for(var i=0; i<x; i++){
                    index[i] = new Array(3);
                    for(var j=0; j<3; j++){
                        if(i*3 + j == sz)
                            break;
                        index[i][j] = i * 3 + j;
                    }
                }
                this.setState({index: index});
            }
        })
    }

    render(){
      const {word, products, index} = this.state
      console.log(products, word);
      return (
        <>
            <div className='search-item-container'>
              <div className="navbar-hidden">
                <div className="search-btn"> 
                    <input className="main-search" placeholder="What do you want to search?" name="word" value={word} onChange = {(event) => this.setState({word: event.target.value})}></input>
                    <button className="redbtn" onClick={this.handleClick}>SEARCH</button>
                </div>
              </div>
              <div className="search-heading"><h1>Your searched items will appear below:</h1></div>
              <br/><br/>
                {index && <div className='trends_container'>
                    <div className='trends_wrapper'>
                      {window.innerWidth>680&&index.map( (array, i) => (
                          <ul className='trends_items' style={{width: !index[i][1] ? "33%" : (!index[i][2] ? "67%" : "100%") }}>
                          { array.map( (val, j) => (
                              <TrendingItem src={products[val].photos[0]} text={products[val].name} path={`/products/${products[val]._id}`} price={products[i].price}/>
                          ))}
                          </ul>
                      ))} 

                      {window.innerWidth<=680&&index.map( (array, i) => (
                          <ul className='trends_items' style={{width:"100%"}}>
                          { array.map( (val, j) => (
                              <TrendingItem src={products[val].photos[0]} text={products[val].name} path={`/products/${products[val]._id}`} price={products[i].price}/>
                          ))}
                          </ul>
                      ))}  
                    </div>
                </div>}
            </div> 
        </>
      );
    }
}
export default Search
