import './App.css';
// import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import About from './Components/About';
import { Provider  } from 'react-redux';
import Productpage from './Components/Productpage';
import store from './store/store';
import Cart from './Components/Cart';
import InProd from './Components/InProd';
import Top from './Components/Top';
import Topbar from './Components/Topbar';
import Menu from './Components/Menu';
function App() {
  
  return (
 <div className='app' >  
 <Provider store={store}> 
 <Router>
  <Topbar />
  <Menu />
  <Routes>
<Route path='/' element={<Top />}/> 
<Route path='/about' element={<About />}/>
<Route path='/products' element={<InProd />}/>
<Route path='/productpage/:productId' element={<Productpage />} />

<Route path='/cart' element={<Cart />}/>
</Routes>
<Footer />
 </Router>
</Provider>
</div>
  )

}

export default App;
