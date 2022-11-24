import {Link} from 'react-router-dom';
import "./menu.css";
function Menu() {
    return ( 
      
            <div><div className="line1"></div>
          <nav className="logo1">
               
                
              
              
               <label className="logo2"></label>
               <ul  className="active4">
                 
                   <li>Tournaments FIFA</li>
                   <li>About FIFA</li>
                   
                
                 
                    <li>Women's football</li>
                    <li> Social Impact</li>
                    <li>Football development</li>
                    <li>Technical</li>
                    {/* {/<li><Link to="/" >Technical</Link></li>/} */}
                 
                   <li> <Link to="/submenu">World Ranking</Link></li>
                  
               </ul>
           
           </nav>
            </div>
     );
}

export default Menu;