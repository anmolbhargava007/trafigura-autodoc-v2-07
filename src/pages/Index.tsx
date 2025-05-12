
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
      <Card className="w-full max-w-md p-6 shadow-md border border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="space-y-6 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">Welcome to Your React App</h1>
            <p className="text-slate-500">
              This is a clean slate for your next great project.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Card>
      
      <footer className="mt-8 text-sm text-slate-500">
        Built with React and Tailwind CSS
      </footer>
    </div>
  );
};

export default Index;
