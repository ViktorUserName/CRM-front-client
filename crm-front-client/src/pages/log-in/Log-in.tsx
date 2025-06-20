import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './components/logo';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Введите логин и пароль');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8001/auth/sign-in/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok){
        alert('Неверный логин или пароль');
        return;
      }

      const data = await response.json();
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);

      console.log(data);

      navigate('/');
    } catch(error){
      alert('Ошибка подключение к серверу');
      console.log(error);
    }
  }


  return (
    <div className='flex h-[100%] max-w-7xl'>

      <Logo />

      <div className="w-1/2 bg-white flex flex-col items-center justify-center gap-12 p-6 rounded-r-2xl">
        <p className="text-2xl font-bold">Sign In to Mbanking</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[500px] w-[100%]">
          <div className='flex flex-col gap-3.5'>
            <label className='bold text-[14px] text-[#7D8592]'>Email adress</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="p-2 rounded-2xl border border-[#D8E0F0]"
            />
          </div>
          <div className='flex flex-col gap-3.5'>
            <label htmlFor="" className='bold text-[14px] text-[#7D8592]'>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="p-2 rounded-2xl border border-[#D8E0F0]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#3F8CFF] rounded-2xl text-white py-2 mx-auto hover:bg-gray-800 transition max-w-[170px] w-[100%]"
          >
            Sign In
          </button>
        </form>

        <a href="#" className="text-sm underline hover:text-blue-500">
          Don't have an account?
        </a>
      </div>

    </div>
  );
}