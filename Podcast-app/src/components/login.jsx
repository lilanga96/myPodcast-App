
import { useState } from 'react';
import supabase from '../supabase'; 


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });
      if (error) {
        console.error('Error logging in:', error.message);
      } else {
        console.log('Logged in successfully:', user);
      }
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
