import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Log-in';


export default function App() {
  return (
    <Router>
      <div className='flex h-screen'>
        
        <nav className="w-[200px] p-4 bg-gray-200 space-x-4 ">
          <Link to="/" className="hover:underline">Главная</Link>
          <Link to="/log-in" className="hover:underline">Sign in</Link>
        </nav>

        <main className="flex-1">
          <Routes>
            <Route path="/log-in" element={<Login />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}
