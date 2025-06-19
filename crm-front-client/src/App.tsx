import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/log-in/Log-in';
import Navbar from './components/navbar';


export default function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-[#F2F2F2] pt-5 pb-5'>
        <div className='flex h-screen max-w-[1360px] mx-auto gap-5'>

          <Navbar/>

          <main className="flex-1 ">
            <Routes>
              <Route path="/log-in" element={<Login />} />
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
}
