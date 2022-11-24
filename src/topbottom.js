import "./style.css";
import second from"./images/second.png"
import third from"./images/third.png"
import first from"./images/first.png"
import fifalogo from "./images/fifalogo.jpeg"
import fifapartnership from "./images/fifapartnership.png"
import "./footer.css";
import {useState} from "react";
import Footer from "./footer";
import Header from "./header";
function Topbottom() {
    const[card,setcard]= useState([
        {id:0,picture:"./first.png",title:"Football Unites the world", description:"Matuidi:Football has the power to create a better world.",date:"18 Nov 2022"}
      ,{ id:1,picture:"./second.png",title:"Football Unites the world", description:"Mario Yepes:Football needs to provide a 'bridge' education",date:"15 Nov 2022"}
       , { id:2,picture:"./third.png",title:"Football Unites the world", description:"Lylod: Every Worldcup has its own highs and lows.",date:"14 Nov 2022"}
       
      ])
      const [men,setMen]=useState([
        {rk:1, team:"./brazil.jpeg", country:"Brazil", tpoints:"1841.30"},
        {rk:2, team:"./belgium.jpeg", country:"Belgium", tpoints:"1816.71"},
        {rk:3, team:"argentina.jpeg", country:"Argentina", tpoints:"1773.88"},
        {rk:4, team:"france.jpeg", country:"France", tpoints:"1759.88"},
        {rk:5, team:"england.jpeg", country:"England", tpoints:"728.47      "},
    ]);
 
    const [women,setWomen]=useState([
     {rk:1, team:"./usa.jpeg", country:"USA", tpoints:"2087.48"},
     {rk:2, team:"./sweden.jpeg", country:"Sweden", tpoints:"2066.30"},
     {rk:3, team:"germany.jpeg", country:"Germany", tpoints:"2064.75"},
     {rk:4, team:"france.jpeg", country:"France", tpoints:"2051.61"},
     {rk:5, team:"england.jpeg", country:"England", tpoints:"2023.09"},
 ]);
 const handledelete=(cid)=>{
    const newdata=card.filter((sid)=>sid.id!=cid)
    setcard(newdata);
  }
    return ( 
        <div style={{backgroundColor:"white",height:1500}}>
       
 <div style={{backgroundColor:" rgb(15, 133, 162)",height:770,marginTop:"-10px",position:"static",width:1520}}>
<div style={{backgroundColor:" rgb(15, 133, 162)",height:230,width:300,position:"static",marginTop:"10px",marginLeft:"5%"}}>
      <h1  className="h1">Football Unites the World</h1>
      <p className="p"> Football unites the world as a global movement to inspire, unite and develop through football.</p>
      <h2 className="h2">More from this topic</h2>
      </div>
  
 
<div className="row" style={{display:"flex",flexDirection:"row",marginLeft:"28%",position:"static",marginTop:"-170px",width:"400px",height:"200px"}}>
{card.map((item)=>
(
<div className="card" style={{width:"20.6rem",backgroundColor:"white",marginLeft:40}} >
<img className="card-img-top"  style={{width:330,height:190,marginLeft:"-12px"}} src={item.picture} alt="Card image cap"/>
<div className="card-body">
    <p className="card-text" style={{marginLeft:"8%",fontFamily:"serif"}}>{item.title}</p>
    <h2 style={{marginLeft:"8%" ,fontFamily:"Serif"}}>{item.description}</h2>
    <h3 style={{marginLeft:"8%"}}>{item.date}</h3>
    <button className="btn-btn-outline-primary" style={{color:"Black",marginTop:"1%",backgroundColor:"smokewhite",fontSize:"15px",marginLeft:"140px"}} onClick={()=>handledelete(item.id)}>Delete</button>
  </div> 
</div>

))
}

</div>
  <h1 className="More">MORE</h1>
  <h2 className="line">________________________________________________________________</h2>

  <div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"20%",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fourth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball United the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-0%"}}>Global stars join FIFA in launching Football unites the World campaign.</h3>

</div>
<div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"-6.5%",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="sixth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-0%"}}>Benatia: The world Cup is the most watched event on the planet.</h3>
</div>
<div  style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"1%",marginLeft:"30%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="seventh.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-0%"}}>Paulo Wanchope:"The world Cup is a magical event"</h3>
</div>
<div style={{backgroundColor:"white",height:100,width:505,position:"static",marginTop:"-6.5%",marginLeft:"65%"}}>
<img className="card-img-top" style={{width:80, height:80,marginTop:"2%",marginLeft:15}} src="fifth.png" alt="Card image cap"/>
<p style={{marginTop:"-17%",marginLeft:"23%"}}>Foootball Unites the World</p>
<h3 style={{marginLeft:"23%",marginTop:"-0%"}}>Alex Lalas:The World Cup is something that is above, beyond everything that you do kicking the ball.</h3>
</div>

        
       
        </div>
        <div>

<div style={{width:"300px",height:"100%"}}>
<img src={fifalogo} alt="Logo" style={{width:"200px",height:"70px",marginTop:"70px",marginLeft:"50px"}} />
<br/>
<br/>
<h2 style={{marginLeft:"50px"}}>WORLD RAKING</h2>
<br/>
<p style={{marginLeft:"50px"}}>The official world ranking of <br/> internaltional men and women <br/> teams.</p>
<br/>
<h6 style={{marginLeft:"50px",color:"blue"}}>FIFA/COCA-COLA WORLD <br/> RANKING</h6>
</div>

<div style={{width:"400px",height:400,marginLeft:"500px",marginTop:"-250px"}}>

<h4>MEN</h4>
<table className="table table-borderd">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    men.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table>
<p>Updated 6 October 2022</p>
<h6 style={{color:"blue"}}>Check full men's ranking table </h6>
</div>

<div style={{width:"400px",height:"100%",marginLeft:"1000px",marginTop:"-420px"}}>

 <h4>WOMEN</h4> 
 <table className="table table-bordered">

<tr>
<td>RK</td>
<td>TEAM</td>
<td></td>
<td>TOTAL POINTS</td>
</tr>
{
    women.map((index,key)=>(
    <tr key={index.rk}>
    <th>{index.rk}</th>
    <th><img src={index.team} style={{width:"120px",height:"70px"}}/></th>
    <th>{index.country}</th>
    <th>{index.tpoints}</th>
    </tr>
))
}
</table> 
<p>Updated 13 October 2022</p>
<h6 style={{color:"blue"}}>Check fill women's ranking table </h6> 
</div>
</div>

<div style={{marginTop:"60px"}}>
<Footer/>
 </div>

        </div>
     );
}

export default Topbottom;