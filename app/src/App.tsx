import Home from './pages/Home/page';
import Shop from './pages/Shop/page';
import { Provider } from 'react-redux';
import store from './Redux/Reducer';
import Footer from './components/Footer/Footer';
import Product from './pages/Shop/[Product]/page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/shop' element={<Shop />}/>
          <Route path='/shop/product/:id' element={<Product />}/>
        </Routes>
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
