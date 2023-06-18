import React, { useEffect, useState } from "react";
import Article from "./article";
const ArticleList=()=>{
    const [article,setArticle]=useState([]);
    useEffect(()=>{
        const url=`https://chatgptai-4h2n.onrender.com/articles`;
        const fetchArticle=async()=>{
            let  response=await fetch(url);
           response=await response.json();
          setArticle(response);
        }
        fetchArticle();
    },[])

    return(
        <>
        <h1>Chatgpt Ai</h1>
        {
            article.map((a,index)=>{
               return<li key={index}>
                   <Article index={index} summary={a.summary} title={a.title} occurance={a.occurance}/>
               </li>
            })
        }
        </>
    )
}
export default ArticleList;