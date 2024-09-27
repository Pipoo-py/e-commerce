import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './components/Home';
import { GlobalStateProvider } from './components/GlobalStateForProducts';
import { GlobalStateForViewCar } from './components/GlobalStateForViewCarShop';
import { About } from "./components/About";
import { GlobalStateTotalProducts } from './components/GlobalStateForTotalProducts';
import { Pay } from "./components/Pay";
import { ComponentContextForTotalPrice } from './components/GlobalStateTotalPrice';
import { Footer } from "./components/Footer";

if (window.ResizeObserver) {
  const resizeObserverErrorHandler = e => {
    e.preventDefault();
  };
  window.addEventListener('error', resizeObserverErrorHandler);
}

function App() {

  return (
        <GlobalStateTotalProducts>
          <ComponentContextForTotalPrice>
          <div className="App">
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pay" element={<Pay />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
        </ComponentContextForTotalPrice>
        </GlobalStateTotalProducts>
  );
}

export default App;
