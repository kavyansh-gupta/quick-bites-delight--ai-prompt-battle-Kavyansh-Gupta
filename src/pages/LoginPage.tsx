import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link to="/" className="text-3xl font-bold text-primary" style={{ fontFamily: "'Prata', serif" }}>
            🍔 Quick Bites
          </Link>
          <h1 className="text-2xl font-bold mt-6 text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground text-sm mt-1">Sign in to your account</p>
        </div>
        <form className="space-y-4 bg-card p-8 rounded-2xl shadow-lg" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <Input type="email" placeholder="you@example.com" className="rounded-xl" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <Input type="password" placeholder="••••••••" className="rounded-xl" />
          </div>
          <Button className="rounded-full w-full mt-2">Sign In</Button>
          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <span className="text-primary font-semibold cursor-pointer">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
