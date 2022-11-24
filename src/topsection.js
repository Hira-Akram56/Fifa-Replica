import { useState } from "react";
import first from './images/first.png'
import second from './images/second.png'
import third from './images/third.png'
import fourth from './images/fourth.png'
import fifth from './images/fifth.png'
import sixth from './images/sixth.png'
import seventh from './images/seventh.png'
import './middlesectio.css'

const Middlesection = (e) => {
    const[card,setCard]=useState([
        { id:0,content:"Matuidi:Football has the power to create a better world",img:first,title:"Football Unites the world"},
        { id:1,content:"Mario Yepes:Football needs to provide a 'bridge' education",img:second,title:"Football Unites the world"},
        { id:2,content:"Lylod: Every Worldcup has its own highs and lows.",img:third,title:"Football Unites the world"}
    ]);
    const [news,setNews]=useState([
        {id:0,content:"Global stars join FIFA in launching Football unites the World campaign",img:fourth},
        {id:1,content:"Benatia: The world Cup is the most watched event on the planet.",img:fifth},
        {id:2,content:"Paulo Wanchope:The world Cup is a magical event",img:sixth},
        {id:3,content:"Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.",img:seventh}
        ,{id:4,content:"Paulo Wanchope:The world Cup is a magical event",img:sixth},
        {id:5,content:"Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.",img:seventh}
    ])
    // const handledelete =(cid)=>
    // {
    //     const newdata=card.filter((sid)=>sid.id!=cid)
    //     setCard(newdata);
    // }
    const handledeleted =(cid)=>
    {
        const newdata=news.filter((sid)=>sid.id!=cid)
        setNews(newdata);
    }
    return( 
        <div className="main">
      <div className="leftside">
        {/* <div className="content">
    <h2>Football Unites The World</h2>
    <p>
        Football Unites the World is a global movement to inspire,unite and develop
        through football.
    </p>
    <h2>More From This Topic</h2> */}


<div className="column" style={{marginTop:"-25%"}}>
            {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "18rem",color:"black" ,marginLeft:"40px",marginBottom:"7%"}} >
                    <img className="card-img-top"  style={{width:"290px",marginLeft:"-0px"}} src={setCard.img} alt="Image"/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                    {/* <button className="btn btn-danger" style={{marginLeft:"80px"}} onClick={()=>handledelete(setCard.id)}>Delete</button> */}
                    
                     </div>
                    </div>


                ))
            }
        
        </div>





    {/* </div>  */}




    
    </div>

    {/* right side starts */}
    <div className="container rightside" style={{backgroundColor:"rgb(37,150,190)" ,marginTop:"3.2%"}}>
        <div className="row" style={{marginTop:"30px"}}>
            {
                card.map((setCard,key)=>(
                    
                    <div className="card" style={{width: "18rem",color:"black" ,marginLeft:"40px"}} >
                    <img className="card-img-top"  style={{width:"290px",marginLeft:"-13px"}} src={setCard.img} alt="Image"/>
                    <div className="card-body">
                     <h5 className="card-title">{setCard.title}</h5>
                    <p className="card-text">{setCard.content}</p>
                    {/* <button className="btn btn-danger" style={{marginLeft:"80px"}} onClick={()=>handledelete(setCard.id)}>Delete</button> */}
                    
                     </div>
                    </div>


                ))
            }
        
        </div>
        <h3>More</h3>
            <p style={{color:"rgb(37,150,190)"}}>____________________________________________________________________________________________________________________________________________</p>
        <div className="row" style={{marginTop:"-20px", backgroundColor:"rgb(37,150,190)",width:"1170px",display:"flex",flexDirection:"row"}}>
            {/* <h3>More</h3>
            <p style={{color:"darkgray"}}>--------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p> */}
            {
                news.map((setNews,key)=>(
                    <div className="news" style={{width:"355px",marginTop:"10px",height:"100px"}} > 
                        <img style={{width:"80px",height:"70px",marginTop:"5px"}}src={setNews.img}/> 
                        
                        <p>{setNews.content}</p>
                        <button className="btn btn-outline-success" style={{marginLeft:"5px",marginTop:"20%"}} onClick={()=>handledeleted(setNews.id)}>Delete</button>
                    </div>
                   



                ))
            }

        </div>

    </div>
    </div>
);

     
};
export default Middlesection;