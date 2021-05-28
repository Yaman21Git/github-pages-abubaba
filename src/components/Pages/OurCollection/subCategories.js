import React, { Component } from "react";
import { getProductsByCategoty } from "../product";
import TrendingItem from '../../TrendingItems'
import '../../Trending.css'

class subCategories extends Component{
    constructor(){
        super()
        this.state = {
            products: "",
            name: "",
            index: ""
        }
    }


    componentDidMount = () => {
        var {index} = this.state;
        var name = this.props.match.params.category;
        const val = {name: name}
        getProductsByCategoty(val)
        .then(result => {
            this.setState({
                products: result
            })
            const sz = result.length;
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
        });

        if(name === "exotic")
            name = name + " Seasoning";
        if(name === "breakfast")
            name = name + " Bites";
        if(name === "pickles")
            name = name + " & Chutney";
        if(name === "exotic")
            name = name + " Seasoning";

        this.setState({
            name: name
        })
    }

    render(){

        const {name, products, index} = this.state;
        
        return (
            <>
                <div className='trends'>
                    <h1 style={{marginBottom:"5%", textTransform: 'capitalize'}}>{name}</h1>
                    {index && <div className='trends_container'>
                        <div className='trends_wrapper'>
                        {index.map( (array, i) => (
                            <ul className='trends_items' style={{width:!index[i][1] ? "33%" : (!index[i][2] ? "67%" : "100%")}}>
                            { array.map( (val, j) => (
                                <TrendingItem src={products[val].photos[0]} text={products[val].name} path={`/products/${products[val]._id}`} price={products[i].price}/>
                            ))}
                            </ul>
                            // !index[i][1] ? "33%" : (!index[i][2] ? "67%" : "100%")
                        ))}   
                        </div>
                    </div>}
                </div> 
            </>
        );
    }
}

export default subCategories