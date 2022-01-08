import './App.css';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Home from './component/home/home';
import Mayin from './page/mayin/mayin/mayin';
import Mucin from './page/mayin/mucin/mucin';
import Hopmuc from './page/mayin/hopmuc/hopmuc';
import Acer from './page/laptop/acer/acer'

import Dell from './page/laptop/dell/dell';
import Asus from './page/laptop/asus/asus';

import Routerwifi  from './page/wifi/routerwifi/routerwifi';
import Hubwifi from './page/wifi/hubwifi/hubwifi';

import Cameraday from './page/camera/coday/cameraday';
import Camerakhongday from './page/camera/khongday/camerakhongday';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Loa from './page/phukien/loa/loa';
import Chuot from './page/phukien/chuot/chuot';
import Banphim from './page/phukien/banphim/banphim';
import Tainghe from './page/phukien/tainghe/tainghe';
import Ocung from './page/phukien/ocung/ocung';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>   
      <Switch>
              <Route exact={true} path="/" component={()=><Home/>}/>
              <Route  path="/laptop/dell" component={()=><Dell/>}></Route>
              <Route  path="/laptop/asus" component={()=><Asus/>}></Route>
              <Route  path="/laptop/acer" component={()=><Acer/>}></Route>
              <Route  path="/mayin/mayin" component={()=><Mayin/>}></Route>
              <Route  path="/mayin/mucin" component={()=><Mucin/>}></Route> 
              <Route  path="/mayin/hopmuc" component={()=><Hopmuc/>}></Route>

              <Route  path="/wifi/routerwifi" component={()=><Routerwifi/>}></Route> 
              <Route  path="/wifi/hubwifi" component={()=><Hubwifi/>}></Route>
     
              <Route  path="/camera/coday" component={()=><Cameraday/>}></Route>
              <Route  path="/camera/khongday" component={()=><Camerakhongday/>}></Route>
              
              <Route  path="/phukien/loa" component={()=><Loa/>}></Route>
              <Route  path="/phukien/chuot" component={()=><Chuot/>}></Route>
              <Route  path="/phukien/banphim" component={()=><Banphim/>}></Route>
              <Route  path="/phukien/tainghe" component={()=><Tainghe/>}></Route>
              <Route  path="/phukien/ocung" component={()=><Ocung/>}></Route>
      </Switch>
      {/* <Home></Home> */}
      {/* <Mayin/> */}
      {/* <Mucin/> */}
      <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
