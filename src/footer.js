import React from 'react'
import fifapartners from "./images/fifapartners.png"
 import fifa from "./images/fp.jpeg"
 import icons from "./images/icons.jpeg"
 import logo from "./images/logo.png"
 const Footer = () => {
  return (
    <div>
        
        <img  src="./fifapartnership.png" alt=""  style={{marginLeft:"0px",width:1498,marginTop:"40px",height:"450px"}}/>

<div style={{position:"relative"}}>

<img  src="./logo.png" alt=""  style={{marginLeft:"50px",width:"100px",marginTop:"20px",height:"50px"}}/>

<h2 style={{marginTop:"10px",marginLeft:"50px"}}>Explore</h2>
<p style={{marginLeft:"50px"}}>Competitions</p>
<p style={{marginLeft:"50px"}}>About FIFA</p>
<p style={{marginLeft:"50px"}}>Women</p>
<p style={{marginLeft:"50px"}}>Social Impact</p>
<p style={{marginLeft:"50px"}}>Football development</p>
<img  src="./icons.jpeg" alt=""  style={{marginLeft:"22px",width:"200px",height:"100px",marginTop:"-20px"}}/>

</div>

<div style={{marginLeft:"300px",position:"relative"}}>
  <h2 style={{position:"absolute",marginTop:"-330px"}}>Also Visit</h2>
  <p style={{position:"absolute",marginTop:"-280px"}}>All stories and topics</p>
  <p style={{position:"absolute",marginTop:"-250px"}}>Oficial Documentation</p>
  <p style={{position:"absolute",marginTop:"-220px"}}>Contact FIFA</p>


</div>

<div>

<p>___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</p>

<table className="table" style={{marginLeft:"30px"}}>
  <tr>
    <td>Term and Services</td>
    <td>Data Protection Portal</td>
    <td>Downloads</td>
    <td>Cookies Setting</td>
  </tr>
</table>
</div>


        </div>
    
  )
}
export default Footer;