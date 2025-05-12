
import React, { useEffect } from 'react';
import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user');
    if (user) {
      navigate('/');
    }
  }, [navigate]);
  
  const handleLoginSuccess = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-trafigura-gray to-white p-4">
      <div className="w-full max-w-md">
        <LoginForm onSuccess={handleLoginSuccess} />
        
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Trafigura Group • Enterprise Knowledge Search
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
