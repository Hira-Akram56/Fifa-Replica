import "./style.css";
import second from"./images/second.png"
import third from"./images/third.png"
import first from"./images/first.png"

import BottomSection from "./bottom";
import {useState} from "react";
function Top() {
  const[card,setcard]= useState([
    {id:0, picture:"./first.png",title:"Football Unites the world", description:"Matuidi:Football has the power to create a better world.",date:"18 Nov 2022"}
  ,{id:1, picture:"./second.png",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
   ,{id:2, picture:"./third.png",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
   
  ])
  const handledelete=(cid)=>{
    const newdata=card.filter((sid)=>sid.id!=cid)
    setcard(newdata);
  }
    return (
        <div style={{backgroundColor:" rgb(15, 133, 162)", marginTop:"200px",height:850,marginTop:"-10px",position:"static",width:1520}}>
<div style={{backgroundColor:" rgb(15, 133, 162)",height:230,width:300,position:"static",marginTop:"10px",marginLeft:"5%"}}>
      <h1  className="h1">Football Unites the World</h1>
      <p className="p"> Football unites the world as a global movement to inspire, unite and develop through football.</p>
      <h2 className="h2">More from this topic</h2>
      </div>
  
 
<div className="row" style={{display:"flex",flexDirection:"row",marginLeft:450,position:"static",marginTop:"-200px"}}>
{card.map((item,key)=>
(
<div className="card" style={{width:"20.6rem",backgroundColor:"white",marginLeft:20,marginTop:"3%"}} >
<img className="card-img-top"  style={{width:330,height:190,marginLeft:"-14px"}} src={item.picture} alt="Card image cap"/>
<div className="card-body">
    <h3 className="card-text" style={{marginLeft:"8%",fontFamily:"serif"}}>{item.title}</h3>
    <p style={{marginLeft:"8%" ,fontFamily:"Serif"}}>{item.description}</p>
    <h3 style={{marginLeft:"8%"}}>{item.date}</h3>
    <button style={{marginLeft:"90px"}} className="btn-btn-danger" onClick={()=>handledelete(item.id)}>Delete</button>
  </div> 
</div>

))
}

</div>
  <h1 className="More">MORE</h1>
  <h2 className="line"></h2>

  <div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"0px",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fourth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%",fontWeight:"bolder"}}>Foootball United the World</p>
<p style={{marginLeft:"23%",marginTop:"-2%",fontSize:"15px"}}>Global stars join FIFA in launching Football unites the World campaign.</p>

</div>
<div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"-100px",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="sixth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%",fontWeight:"bolder"}}>Foootball Unites the World</p>
<p style={{marginLeft:"23%",marginTop:"-2%"}}>Benatia: The world Cup is the most watched event on the planet.</p>
</div>
<div  style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"1%",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="seventh.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%",fontWeight:"bolder"}}>Foootball Unites the World</p>
<p style={{marginLeft:"23%",marginTop:"-2%"}}>Paulo Wanchope:"The world Cup is a magical event"</p>
</div>
<div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"-6.5%",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fifth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%",fontWeight:"bolder"}}>Foootball Unites the World</p>
<p style={{marginLeft:"23%",marginTop:"-2%"}}>Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.</p>
</div>

        
       
        </div>
      );
}

export default Top;