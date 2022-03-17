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
import ReactDOM from 'react-dom'

import Loa from './page/phukien/loa/loa';
import Chuot from './page/phukien/chuot/chuot';
import Banphim from './page/phukien/banphim/banphim';
import Tainghe from './page/phukien/tainghe/tainghe';
import Ocung from './page/phukien/ocung/ocung';
import Lenovo from './page/laptop/lenovo/lenovo';
import Hp from './page/laptop/hp/hp';

import LG from './page/manhinh/lg/lg';
import HP from './page/manhinh/hp/hp';
import Provision from './page/manhinh/provision/provision';

import Sualaptop from './page/dichvu/sualaptop/sualaptop';
import PC from './page/dichvu/pc/pc';
import Camera from './page/dichvu/camera/camera';
import Suamayin from './page/dichvu/mayin/suamayin';
import Baotrinet from './page/dichvu/baotrinet/baotrinet';
import Suachuatannha from './page/dichvu/suachuatannha/suachuatannha';

import Mainasus from './page/pc/asus/asus';
import Mainhp from './page/pc/hp/hp';
import Mainlenovo from './page/pc/lenovo/lenovo';
import Counter from './page/couter/couter';
import {connect} from 'react-redux';

// var action = type => store.dispatch({ type });
// function Counter(){
//   return(
//     <CounterTemp
//       value={store.getState()}
//       onIncrement={() => action('INCREMENT')}
//       onDecrement={() => action('DECREMENT')}
//       onIncrementIfOdd={() => action('INCREMENT_IF_ODD')}
//       onIncrementAsync={() => action('INCREMENT_ASYNC')}
//     />
//   )
// }


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
              <Route  path="/laptop/lenovo" component={()=><Lenovo/>}></Route>
              <Route  path="/laptop/hp" component={()=><Hp/>}></Route>

              <Route  path="/main/asus" component={()=><Mainasus/>}></Route>
              <Route  path="/main/hp" component={()=><Mainhp/>}></Route>
              <Route  path="/main/lenovo" component={()=><Mainlenovo/>}></Route>

              <Route  path="/manhinh/lg" component={()=><LG/>}></Route>
              <Route  path="/manhinh/hp" component={()=><HP/>}></Route>
              <Route  path="/manhinh/provision" component={()=><Provision/>}></Route>

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

              <Route  path="/dichvu/sualaptop" component={()=><Sualaptop/>}></Route>
              <Route  path="/dichvu/pc" component={()=><PC/>}></Route>
              <Route  path="/dichvu/camera" component={()=><Camera/>}></Route>
              <Route  path="/dichvu/mayin" component={()=><Suamayin/>}></Route>
              <Route  path="/dichvu/baotrinet" component={()=><Baotrinet/>}></Route>
              <Route  path="/dichvu/suachuatannha" component={()=><Suachuatannha/>}></Route>
              <Route  path="/counter" component={()=><Counter></Counter>}></Route>
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
