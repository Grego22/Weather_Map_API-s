import React, {Component} from 'react'
import axios from 'axios'
import NewsForm from './NewsForm.jsx'

const news_api = 'c0624797a07a4e1988dbc5624f00c7a0'
const postman_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c0624797a07a4e1988dbc5624f00c7a0'

class News extends Component{
    constructor(props){
        super(props)
        this.state={data : [],
            author: undefined, 
            title1: undefined, 
            title2: undefined,
            title3: undefined,
            title4: undefined,

        }
      

        }
    


    getNews= () => {
        const response =  postman_url.json()
    
    fetch(postman_url)
    .then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data);
        console.log(data.status);
        const x = (data.articles[2].title)
        this.setState({
        title4: response.data.articles[2].title
    })
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
                    <NewsForm loadNews = {this.getNews}/>
                </li>
                </ul>
            </div>
        )
    }

    }




export default News