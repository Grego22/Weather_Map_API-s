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
    axios.get(postman_url)
        .then(res => {
            var data2 = {}
            data2 = JSON.stringify(res.data)
            var source = [{"source" :"id"}]
            console.log(data2)
            // console.log(source)
            
        })
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