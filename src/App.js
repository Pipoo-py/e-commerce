import './App.css';
import { HashRouter,Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Home } from './components/Home';
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
          <HashRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/pay" element={<Pay />} />
            </Routes>
            <Footer />
          </HashRouter>
        </div>
        </ComponentContextForTotalPrice>
        </GlobalStateTotalProducts>
  );
}

export default App;