import fifalogo from "./images/fifalogo.jpeg"
import brazil from "./images/brazil.jpeg"
import belgium from "./images/belgium.jpeg"
import argentina from "./images/argentina.jpeg"
import france from "./images/france.jpeg"
import england from "./images/england.jpeg"
import usa from "./images/usa.jpeg"

import sweden from "./images/sweden.jpeg"
import germany from "./images/germany.jpeg"
import {useState} from "react";

function BottomSection() {

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




    return ( 
 
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

<div style={{width:"400px",height:"100%",marginLeft:"400px",marginTop:"-330px"}}>

<h4 style={{color:"rgb(20, 76, 95)",fontFamily:"serif",fontSize:"30px",fontWeight:"bolder"}}>MEN</h4>
<table className="table table-bordered">

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

<div style={{width:"400px",height:"100%",marginLeft:"900px",marginTop:"-500px"}}>

 <h4 style={{color:"rgb(20, 76, 95)",fontFamily:"serif",fontSize:"30px",fontWeight:"bolder"}}>WOMEN</h4> 
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
<h6 style={{color:"blue"}}>Check full women's ranking table </h6> 
</div>
</div>
 
);
}

export default BottomSection;