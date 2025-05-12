
import React, { useState, useEffect } from 'react';
import { Bell, HelpCircle, Menu, Settings, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

const Header: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check for user in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
      duration: 3000,
    });
    
    // Redirect to login page
    window.location.href = '/login';
  };

  return (
    <header className="h-16 px-6 border-b flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
        <img 
          src="traf_logo.png" 
          alt="Trafigura" 
          className="h-8" 
        />
        <h1 className="hidden md:block text-xl font-semibold text-trafigura-dark-blue">
        <img 
          src="logo.png" 
          alt="AutoDoc" 
          className="h-8" 
        />
        </h1>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
          <Settings className="h-5 w-5" />
        </Button>
        
        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:bg-gray-100">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-trafigura-dark-blue text-white">
                    {user.name?.split(' ').map((part: string) => part[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-gray-100">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="cursor-pointer text-red-600 hover:bg-red-50 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            variant="default" 
            size="sm" 
            className="bg-trafigura-dark-blue hover:bg-trafigura-dark-blue/90"
            onClick={() => window.location.href = '/login'}
          >
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
