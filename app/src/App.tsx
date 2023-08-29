import Home from './pages/Home/page';
import Shop from './pages/Shop/page';
import { Provider } from 'react-redux';
import store from './Redux/Reducer';
import Footer from './components/Nav/Footer/Footer';
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
        </Routes>
      </Router>
      <Footer />
    </Provider>
  )
}

export default App
