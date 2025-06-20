import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/log-in/Log-in';
import Navbar from './components/navbar';
import RootPage from './pages/root-page/RootPage';
import Employees from './pages/employees/employess';


export default function App() {
  return (
    <Router>
      <div className='w-full min-h-screen bg-[#F2F2F2] '>
        <div className='flex h-screen max-w-[1360px] mx-auto gap-5 pt-5 pb-5'>

          <Navbar/>

          <main className="flex-1 ">
            <Routes>
              <Route path='/' element={<RootPage/>}/>
              <Route path="/log-in" element={<Login />} />
              <Route path='/employees' element={<Employees/>}/>
            </Routes>
          </main>

        </div>
      </div>
    </Router>
  );
}
