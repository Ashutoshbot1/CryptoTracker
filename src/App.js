import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DashboardPage from './Pages/DashboardPage';
import CoinPage from './Pages/CoinPage';
import ComparePage from './Pages/ComparePage';
import WatchlistPage from './Pages/WatchlistPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/watchlist" element={<WatchlistPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// ctrl+space for auto import