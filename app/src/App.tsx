import Home from './pages/Home/page';
import Shop from './pages/Shop/page';
import { Provider } from 'react-redux';
import store from './Redux/Reducer';
import Footer from './components/Footer/Footer';
import Product from './pages/Shop/[Product]/page';
import Register from './pages/Register/page';
import Login from './pages/Login/page';
import Account from './pages/Account/page';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Checkout from './pages/[Checkout]/page';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/product/:id' element={<Product />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/account' element={<Account/>}/>
          <Route path='/checkout/:id' element={<Checkout />}/>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
