import './App.css';
// import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Menu from './Components/Menu';
import About from './Components/About';
import { Provider  } from 'react-redux';
import Productpage from './Components/Productpage';
import store from './store/store';
import Cart from './Components/Cart';
import InProd from './Components/InProd';
import Top from './Components/Top';
function App() {
  return (
 <div className='app' >  
 <Provider store={store}> 
 <Router>
  <Menu />
  <Routes>
<Route path='/' Component={Top}/> 
<Route path='/about' Component={About}/>
<Route path='/products' Component={InProd}/>
<Route path='/productpage/:productId' Component={Productpage} />

<Route path='/cart' Component={Cart}/>
</Routes>
<Footer />
 </Router>
</Provider>
</div>
  )

}

export default App;
