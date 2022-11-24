
   import {Routes,Route} from "react-router-dom";

//  import Footer from "./footer";

 import Topbottom from "./topbottom";



import Top from "./top";
import Header from "./header";
//import BottomSection from "./bottom";

import BottomSection from "./bottom";
import Footer from "./footer";
import Men1 from "./menu1";
import Menu3 from "./menu3";
import Middlesection from "./topsection";
import Privacypage from "./privacy";
import Terms from "./terms";
function App() {
  return (
    <div >
   <div> 
    <Men1/>
   <Routes>
    <Route path="/menu3" element={<Menu3/>}/>
    <Route path="/privacy" element={<Privacypage/>}/>
    <Route path="/term" element={<Terms/>}/>
   </Routes>
   </div> 
   {/* <Top/>  */}
   <Middlesection/>
   <BottomSection/>
   <Footer/>

    </div>
  );
}

export default App;
