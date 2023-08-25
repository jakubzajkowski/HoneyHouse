import Home from './pages/Home/page';
import Shop from './pages/Shop/page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/shop' element={<Shop />}>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
