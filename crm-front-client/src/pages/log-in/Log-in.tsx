import { useState } from 'react';
import Logo from '../components/logo';


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:8001/auth/sign-in/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className='flex h-screen max-w-7xl'>

        <Logo/>
        <div className="w-1/2 bg-amber-200 flex flex-col gap-4 p-6 shadow-lg">
            {/* <p className="text-2xl font-bold">Sign In to Mbanking</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="p-2 rounded border border-gray-300"
                />

                <button
                    type="submit"
                    className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                    >
                    Sign In
                </button>
            </form>

            <a href="#" className="text-sm underline hover:text-blue-500">
                Don't have an account?
            </a> */}
        </div>
    </div>
  );
}