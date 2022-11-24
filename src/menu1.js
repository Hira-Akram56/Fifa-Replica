import React from 'react'
import'./menstyle.css'
 import Men2 from './menu2'

 const Men1 = () => {

  return (
    <div >
         <nav >
       
        
      
      
       <label className="logo">FIFA</label>
       <ul  className="active">
         
           <li className="active1">Store</li>
           <li className="active2">Ticket</li>
           
        
          {/*<select style={{color:"white",height:50,width:90,background:"red",borderRadius:5,border:"none"}}>
         
           <option>products </option>
          
           <option style={{color:"black",height:500,width:100,background:"red",borderRadius:5,border:"none"}}></option>
           <option style={{color:"black",height:50,width:50}}></option>
  </select>*/}
            <li className="active3"> Log in</li>
            
          
       </ul>
       <h>_____________________________________________________________________________________________________________________________________________________________________________________________</h>
   </nav>
   
    <Men2/> 
    </div>
  )
}
export default Men1