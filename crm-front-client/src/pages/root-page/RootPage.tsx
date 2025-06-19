import { useEffect, useState } from "react"

function RootPage(){
    const [user, setUser] = useState('');
    
    useEffect(() => {
        const fetchActiveUser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8001/api/active-user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('access')}`,
          },
        });

        if (!response.ok) {
          console.log('mistake');
          return;
        }

        const data = await response.json();
        setUser(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchActiveUser();
  }, []);
    
    return (
        <div>Hi {user.username} your role {user.role}</div>
    )
}

export default RootPage