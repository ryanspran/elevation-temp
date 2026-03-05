import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logo from "@/assets/logo.png";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password });
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        setError("");
        setIsSignUp(false);
        // After signup, auto-sign in
        const { error: signInError } = await signIn(email, password);
        if (signInError) {
          setError("Account created! Sign in to continue. (An admin must grant you access.)");
        } else {
          navigate("/admin");
        }
      }
    } else {
      const { error } = await signIn(email, password);
      setLoading(false);
      if (error) {
        setError(error.message);
      } else {
        navigate("/admin");
      }
    }
  };

  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <img src={logo} alt="Elevation Landscapes" className="h-16 mx-auto mb-4" />
          <h1 className="font-serif text-2xl text-secondary-foreground">
            {isSignUp ? "Create Account" : "Admin Login"}
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label className="text-secondary-foreground/70 text-sm">Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-secondary-foreground/5 border-secondary-foreground/20 text-secondary-foreground"
            />
          </div>
          <div>
            <Label className="text-secondary-foreground/70 text-sm">Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="bg-secondary-foreground/5 border-secondary-foreground/20 text-secondary-foreground"
            />
          </div>
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gold text-navy hover:bg-gold-light font-semibold uppercase tracking-wider"
          >
            {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
          </Button>
          <button
            type="button"
            onClick={() => { setIsSignUp(!isSignUp); setError(""); }}
            className="w-full text-center text-secondary-foreground/50 text-sm hover:text-gold transition-colors"
          >
            {isSignUp ? "Already have an account? Sign in" : "Need an account? Create one"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
