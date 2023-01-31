import React, { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News() {
    const [News, setNews] = useState([])
    let GetNews = async ()=>{
        let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=95254dca3d9542e1b6b9596203f9b0cc"
        let data = await fetch(url)
        let parsedData = await data.json()
        setNews(parsedData.articles)
    }
    useEffect(()=>{
        GetNews()
    })
  return (
    <div className='container my-3'>
        <h2> Todays Top HeadLines</h2>
        <div className='row'>
            {News.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title.slice(0,45)} description={element.description} urlToImange={element.urlToImange} newsUrl={element.url}/>
                    </div>
            })}
        </div>

    </div>
  )
}
