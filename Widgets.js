import React from 'react'
import './Widgets.css'
import{BsFillInfoCircleFill} from "react-icons/bs"
import{GoPrimitiveDot} from "react-icons/go"
function Widgets() {
    const newsArticle = (heading, subtitle)=>(
        <div className="widget_article">
           
             <div className="widgets_articleleft">
               <GoPrimitiveDot></GoPrimitiveDot>
             </div>
             <div className="widgets_articleright">
                 <h4>{heading}</h4>
                 <p>{subtitle}</p>

             </div>

        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>Linkedln News</h2>
                <BsFillInfoCircleFill></BsFillInfoCircleFill>
            </div>
            {newsArticle("CoronaVirus India update","Top news-2161 reders ")}
            {newsArticle("Bitcon hit the graph ","Top news-2161 reders ")}
            {newsArticle("Taliban News ","Top news-2161 reders ")}
            {newsArticle("linkedln react redux project","Top news-2161 reders ")}
            {newsArticle("linkedln react redux project","Top news-2161 reders ")}

        </div>
    )
}

export default Widgets
