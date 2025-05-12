
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate login
    setTimeout(() => {
      if (email && password) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify({ 
          email, 
          name: 'John Smith',
          avatar: 'user.svg'
        }));
        
        toast({
          title: 'Login successful',
          description: 'Welcome back to AutoDoc!',
          duration: 3000,
        });
        
        onSuccess();
      } else {
        toast({
          title: 'Login failed',
          description: 'Please enter your email and password',
          variant: 'destructive',
          duration: 3000,
        });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <img 
          src="logo.png" 
          alt="AutoDoc" 
          className="h-14 mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-trafigura-dark-blue">Sign In</h2>
        <p className="text-gray-500 mt-2">Access your Trafigura knowledge base</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john.smith@trafigura.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-6"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-6"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
            />
            <Label htmlFor="remember" className="text-sm cursor-pointer">Remember me</Label>
          </div>
          
          <Button variant="link" type="button" className="text-trafigura-light-blue p-0">
            Forgot password?
          </Button>
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 bg-trafigura-dark-blue hover:bg-trafigura-dark-blue/90 text-white rounded-lg"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-500">Don't have an account? </span>
        <Button variant="link" className="p-0 text-trafigura-light-blue">
          Contact your administrator
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
