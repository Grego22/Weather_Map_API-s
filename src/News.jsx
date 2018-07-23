import React, {Component} from 'react'
import axios from 'axios'

const ft_api = '59cbaf20e3e06d3565778e7b8fcedd4bc8d44c6dab07fe22cf287fa6'
const news_api = 'c0624797a07a4e1988dbc5624f00c7a0'
const postman_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c0624797a07a4e1988dbc5624f00c7a0'


class News extends Component{
    constructor(){
        super()
        this.state={data : []

        }

        }
    


componentDidMount(){
    
    fetch(postman_url)
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        console.log(data.status);
    })
    /*
    .then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
        console.log(data.status);
        console.log(data.totalResults);
        console.log(data.status);
        console.log(data.articles);
        console.log(data.articles[1].author)
    })
    */

        
    } 

    render(){
        return(
            <div>
                <ul>
               
                <li>
                
                </li>
                </ul>
            </div>
        )
    }

    }




export default News