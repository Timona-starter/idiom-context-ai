import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 p-4">
       <Link to="/" className="absolute top-8 left-8 p-2 rounded-full hover:bg-slate-200 transition-colors">
          <ArrowLeft className="h-6 w-6 text-slate-600" />
        </Link>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Log In</CardTitle>
          <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                to="#"
                className="text-sm font-medium text-slate-900 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
            <Link to="/dashboard" className='w-full'>
                <Button className="w-full">Log In</Button>
            </Link>
          <div className="text-sm text-slate-600">
            Don\'t have an account?{' '}
            <Link to="/signup" className="font-medium text-slate-900 hover:underline">
              Sign Up
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;