import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HeaderBar } from './components/HeaderBar';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Discounts } from './pages/Discounts';
import { NotFound } from './components/NotFound';
import './styles.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderBar />
        <div className="section columns">
          <nav className="column is-2">
            <Nav />
          </nav>
          <main className="column">
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/discounts" element={<Discounts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
