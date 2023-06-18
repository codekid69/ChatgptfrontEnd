import React, { useState } from "react";
const Article = ({ index, title, summary, occurance }) => {
  const [...occure] = occurance;
  const [active, setActive] = useState(false);
  const [mylink, setMyLink] = useState([]);
  
  const handleAction = async () => {
    const url = `https://chatgptai-4h2n.onrender.com/address`;
    let response = await fetch(url);
    setActive(true);
    response=await response.json();
    console.log("occurance",occure);
    setMyLink(response);
    console.log("random response",response);
    if(occure.length<=1){
      let data=response[occure];
      console.log("link1",data);
      setMyLink([data]);
      console.log("link1",mylink);
    }
    else{
      setMyLink(response);
      console.log("link2",mylink);
    }
  };
  return (
    <>
     
        <span>{index + 1}</span>.<span className="title">{title}</span>
        <p>{summary}</p>
        <p>{occurance}</p>
        {active ? (
          mylink?.map((l)=>{
            return <div className="links">
              <p>{l.titile}</p>
              <a href={l.url}>{l.url}</a>
              <button style={{display:'block',margin:"15px auto"}} onClick={()=> setActive(false)}>Cancel</button>
            </div>
          })
        ) : (
          <button style={{marginBottom:'10px'}} onClick={() => handleAction()}>
            Read More...
          </button>
        )}
      
    </>
  );
};
export default Article;
